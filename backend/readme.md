# Simple RESTful Book API

Thee `GET` method endpoints
* `/books/` : List all the books.
* `/books/{id}` :  Find a book by ID.
* `/books/search/{search term}` : Search for a book by title or author name.

Runs on port `8080`.

For example: `http://localhost:8080/books/`

## Install
Ensure you have Java 1.8+ installed.

Clone this repository into a directory of your choice. Once cloned, switch into the new project 
directory and run:

`mvn package`

This will install dependencies, run the tests and package the application into a jar inside the `target`
directory.

Alternatively, just open the newly cloned project in IntelliJ and install the dependencies.   

## Data
Data is automatically loaded when the application runs. Uses an H2 in memory database. 

Note: There should be nothing to do here. 

## To Run

Ensure you have Java 1.8+ installed.

#### From the Command Line
From inside the project directory run the following command:

`java -jar ./target/backend-0.0.1-SNAPSHOT.jar`

#### From IntelliJ
This is  a SpringBoot application. Import the project into IntelliJ and from the `src/main/java` directory 
simply run the `com.jthelsinki.backend.BackendApplication` class.

## Web Client
Once running, open the client side application (a seperate project) and start making requests. 




