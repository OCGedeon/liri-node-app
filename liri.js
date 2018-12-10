require("dotenv").config();

var keys = require('keys.js');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);




if (process.argv[2] == 'concert-this' ) {
   
    var artist = process.argv.slice(3).join(" ")
    console.log(artist);
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) console.log(error);
        var result  =  JSON.parse(body)[0];
        console.log("Venue name " + result.venue.name);
        console.log("Venue location " + result.venue.city);
        console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
       


    });

} else if ( process.argv[2] == 'spotify-this-song') {

    var songName = process.argv.slice(3).join(" ");

    if (songName == undefined) {
        songName = "The sign by Ace of Base";
    }


    
} 
