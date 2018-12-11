require("dotenv").config();
console.log("HELLO WORLD");
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var cTable = require('console.table');
var request = require('request');
var moment = require('moment');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
//console.log(spotify);
//console.log(process.argv);


var test = function (apiType, data) {

    console.log("Your argument was");
    if (apiType == "concert-this") {
        var artist = data;
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=71b31052b70e73067b5e4ac44f5a63a5";
        
        axios.get(queryURL)
            .then(function(response){
                console.log(response.data[0]);
                console.log("Venue name " + response.data[0].venue.name);
                console.log("Venue location " + response.data[0].venue.city);
                console.log("Date of Event " +  response.data[0].datetime)

            }) 
        console.log(artist);

    } else if (apiType == "spotify-this-song") {
        var songName = data;
        if (songName == undefined) {
            songName = "The sign by Ace of Base";
        }
    
        spotify.search({ type: 'track', query: songName, limit: 10  }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
    
            var tableArray = [];
    
            for (var i = 0; i < data.tracks.items.length; i++ ) {
                var result = {
                    artist : data.tracks.items[i].album.artists[0].name,
                    album_name : data.tracks.items[i].album.name,
                    song_name : data.tracks.items[i].name,
                    preview_url : data.tracks.items[i].preview_url 
                }
                tableArray.push(result);
            }
    
    
            var table = cTable.getTable(tableArray);
    
            console.log(table);
    
    
    });
        


    } else if (apiType == "movie-this") {

        var movieName = process.argv.slice(3).join(" ");

        if (movieName == undefined) {
            movieName = "Mr. Nobody";
        } 
    
        request('http://www.omdbapi.com/?i=tt3896198&apikey=55e8eecb&t=' + process.argv[3], function (error, response, body) {
    
            var result  =  JSON.parse(body);
            console.log("Title :" + result.Title);
            console.log("Year :" + result.Released);
            console.log("IMDB Rating :" + result.imdbRating );
            console.log("Country :" +  result.Country);
            console.log("Movie Plot :" + result.Plot);
            console.log("Actors :" +  result.Actors);
    
        });
    
    } else if ( process.argv[2] == 'do-what-it-says') {
        console.log('do what it says')


        
    } else {
        console.log("Please try again :)");
    }

}
test(process.argv[2],process.argv[3]);



    
    

