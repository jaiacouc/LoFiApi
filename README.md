# LoFiApi
> This is a LoFi music api that allows users to request all songs that are stored within a cloud database.

## Table of Contents
* [General Info](#general-information)
* [Technologies and Frameworks](#technologies-and-frameworks)
* [Usage](#usage)
* [Project Status](#project-status)

## General Information
- This is a API that allows the user to make requests to get songs from a mongodb database.
- The database is hosted in a sandbox cluster in Mongodb cloud service.
- The Api was hosted in a Azure web app using a docker container that is set to update the webapp everytime changes are pushed to github. This is done using a Azure devops pipeline taking the docker container and setting it up with gihub. The api is now only ran on localhost by running the docker image.
- The api allows for the user to Add songs, delete songs, and get all songs that are stored within the database.
- I created this project to use in tandem with another project I was working on where I needed music to be played so instead of using soundcloud api or spotify I decided to create my own.

## Technologies and Frameworks
This project was made with:
* Node.js 
* expressjs
* Mongodb
* mongoose 
* multer
* nodemon
* Docker
* Azure
* Devops Pipeline

## Usage
- Used through http requests
- Example:
```
function App() {
  async function fetchSong() {
    const res = await fetch("http://localhost:4000/music/");
    const data = await res.json();
    console.log(data);
  }
  ```
  
  ## Project Status
  Project is: _Complete_ / _No longer being worked on_. This is to keep from paying to host on Azure. But can still be run on local host when needed
