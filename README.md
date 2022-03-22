# LoFiApi

> This is a LoFi music api that allows users to request all songs that are stored within a cloud database.  
> Live link [_here_](https://lofi-api.azurewebsites.net/music)

## Table of Contents

- [General Info](#general-information)
- [Technologies and Frameworks](#technologies-and-frameworks)
- [Usage](#usage)
- [Project Status](#project-status)
- [Improvements](#room-for-improvement)
- [Acknowledgements](#acknowledgments)

## General Information

- This is a API that allows the user to make requests to get songs from a mongodb database.
- The database is hosted in a Azure Cosmos for MongoDB.
- The Api is hosted in a Azure web app that is deployed using the nodejs code. The api uses expressjs for the routes and queries the database to return json data.
- The api allows for the user to get all songs that are stored within the database.
- I created this project to use in tandem with another project I was working on where I needed music to be played so instead of using soundcloud api or spotify I decided to create my own.

## Technologies and Frameworks

This project was made with:

- Node.js
- expressjs
- Mongodb
- mongoose
- multer
- nodemon
- Azure
- Azure Cosmos for MongoDB

## Usage

- Used through http requests
- Example:

```
  async function fetchSong() {
    const res = await fetch("https://lofi-api.azurewebsites.net/music");
    const data = await res.json();
    console.log(data);
  }
```

## Project Status

Project is: _Live_

## Room for Improvement

Possible future features:

- Add songs by artists
- Add single songs requests

## Acknowledgments

Music sourced from: https://pixabay.com
