# React with Spring Boot and Typescript
A simple application demonstrating React together with Spring Boot and Typescript

This repository consists of two projects.
* React frontend
* Spring Boot backend.


## React Books (Front End)

A simple demo app written with React, RXJS, Redux and Typescript.

This application demonstrates some of the key concepts. Although it is a simple application it has been written as if it was to be developed into a larger application.

The code is fully typed using Typescript types.

### What's happenging here?

This React application makes use of RXJS for all async calls and redux for application state management. The calls to the RXJS library are contained within the _epics_ under the `redux/epics` directory. Once an RXJS epics is registered, each action which calls it makes the request to the backend API. Once the response is received the epic sends a new action to the relevant reducer found in the `redux/reducers` directory. State is always updated from the reducer (and not the epics).  

### Installation

In the terminal clone this repository into directory of your choice. Navigate in the termal to the newly cloned project directory.

Run the following command

`npm install`

The application should now be installed and ready for action.

__NOTE:__ Because there is no `yarn.lock` file running `yarn install` won't work. 

### Run the application

First, ensure that the backend API is up an running. Find it [here](https://github.com/jt-helsinki/v_backend)

`npm start`

Navigate to `http://localhost:3000`

## Simple RESTful Book API (Backend)

Thee `GET` method endpoints
* `/books/` : List all the books.
* `/books/{id}` :  Find a book by ID.
* `/books/search/{search term}` : Search for a book by title or author name.

Runs on port `8080`.

For example: `http://localhost:8080/books/`

### Install
Ensure you have Java 1.8+ installed.

Clone this repository into a directory of your choice. Once cloned, switch into the new project 
directory and run:

`mvn package`

This will install dependencies, run the tests and package the application into a jar inside the `target`
directory.

Alternatively, just open the newly cloned project in IntelliJ and install the dependencies.   

### Data
Data is automatically loaded when the application runs. Uses an H2 in memory database. Nothing
to do here.

Note: There should be nothing to do here. 

### Run the application

Ensure you have Java 1.8+ installed.

##### From the Command Line
From inside the project directory run the following command:

`java -jar ./target/backend-0.0.1-SNAPSHOT.jar`

##### From IntelliJ
This is  a SpringBoot application. Import the project into IntelliJ and from the `src/main/java` directory 
simply run the `com.jthelsinki.backend.BackendApplication` class.

### Web Client
Once running, open the client side application (a seperate project) and start making requests. 



