#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, async (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  // Parse the body to get the movie details
  const movieData = JSON.parse(body);
  const charactersArray = movieData.characters;

  // Loop through each character URL in the charactersArray
  for (const character of charactersArray) {
    await new Promise((resolve, reject) => {
      // Make a request to get the character details
      request(character, (err, res, body) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          // Print the character name
          console.log(JSON.parse(body).name);
          resolve();
        }
      });
    });
  }
});