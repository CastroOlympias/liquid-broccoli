# `liquid-broccoli`. a book search engine.

## Description
This is a book search application which started as a RESTful API to a mongo database that I converted to a GraphQL using mutations and queries.

## Table of Contents
- [Story](#Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Authors](#Authors)
- [Resources](#Resources)


## Story

This was quite a scientific process, narrowing down the interactions between server-side typeDefs, resolvers, the playground, to client-side mutations and queries, to the front of the jsx files. It was a head pounding process of trial and error, attempt two kinds of methods to saveBook information, using the input type BookInput (BookData) to not using that method, the issues I had were the same using either method, so while it was a painful process, when you discover the man ways to do something right, you better understand it. 
<br><br>
Toward the end of this bootcamp, we all were cramming so much new technology and development tools and we didn’t nearly have as much practice with GraphQL, Apollo servers as we did with the RESTful APIs, using either mongoose or Sequelize ORM, which those two are much more alike.
<br><br>
I think some of the difficulty is diagnosing precisely where there may be issues in your code as it seems fairly vague ins where the issues are, but with due practice I’m sure I can figure our more solutions as well as become more familiar with the error and know more of its relevance. For example, error on $bookId is referenced in place files so you don’t get an exact and precise location of the problem. This error, while the exact syntax is located on the server, was caused by the client side queries file, because I had a `:` right after the `description` query and I forget to query the authors which prevented the unique value, prevent the savedBook page on the front from associating the unique value of each saved book.



## Installation
Install in your terminal:
  <br>
* Root: `npm install` will these package.json will install all necessary modules from root, server and client to get this app running.
  <br>

Software download
* <a href="https://nodejs.org/en/docs/">Node.js</a>
  <br>

## Usage

* Root: Concurrently, which is installed after running `npm i` will run the server side `server` and the client side `server` form one single CLI terminal.

## Authors

* David Crockett / <a href="https://github.com/CastroOlympias">CastroOlympias @ GitHub</a>

## Resources
Documentation:
  <br>
* <a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a> Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.
  <br>
* <a href="https://nodejs.org/en/docs/">Node.js</a> Back-end JavaScript runtime environment
  <br>
* <a href="https://graphql.org/">GraphQl</a> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
  <br>
* <a href="https://reactjs.org/docs/getting-started.html">React.js</a> React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
  <br>

