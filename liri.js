var fs = require("fs");
var twitterKeys = require("./keys.js");
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fields = process.argv.slice(2);

function begin(){
  switch(task) {
    case "my-tweets":
      getTweets();
      break;
    case "spotify-this-song":
      getSpotifyQuery();
      break;
    case "movie-this":
      getMovie();
      break;
    };
};