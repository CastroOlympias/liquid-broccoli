const { AuthenticationError } = require('apollo-server-express');
const { User, bookSchema } = require('../models')

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedBooks')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('savedBooks')
                
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('savedBooks')
                
        },
        savedBooks: async (parent, { username }) => {
            const params = username ? { username } : {};
            return bookSchema.find(params).sort({ ceratedAt: -1 });
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        SaveBook: async (parent, args, context) => {
            if (context.user) {
              const book = await bookSchema.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { savedBooks: book._id } },
                { new: true }
              );
      
              return book;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
    }

}


module.exports = resolvers;