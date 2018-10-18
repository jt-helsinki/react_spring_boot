# React Books

A simple demo app written with React, RXJS, Redux and Typescript.

This application demonstrates some of the key concepts. Although it is a simple application it has been written as if it was to be developed into a larger application.

The code is fully typed using Typescript types.

## What's happenging here?

This React application makes use of RXJS for all async calls and redux for application state management. The calls to the RXJS library are contained within the _epics_ under the `redux/epics` directory. Once an RXJS epics is registered, each action which calls it makes the request to the backend API. Once the response is received the epic sends a new action to the relevant reducer found in the `redux/reducers` directory. State is always updated from the reducer (and not the epics).  

## Installation

In the terminal clone this repository into directory of your choice. Navigate in the termal to the newly cloned project directory.

Run the following command

`npm install`

The application should now be installed and ready for action.

__NOTE:__ Because there is no `yarn.lock` file running `yarn install` won't work. 

## Run the application

First, ensure that the backend API is up an running. Find it [here](https://github.com/jt-helsinki/v_backend)

`npm start`

Navigate to `http://localhost:3000`