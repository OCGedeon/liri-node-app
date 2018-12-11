# Welcome to my Liri Bot! 

<div>

    
    LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.



<img src="liriBot.png" alt="My cool LiriBot">

`Overview`

```css
PLEASE NOTE: There are several installs you will need prior to running this in your terminal.

1. Git - Installing Git: Run git from terminal
2. git clone git https://ocgedeon.github.io/liri-node-app/

1. node liri.js my-tweets: This will show your last 20 tweets and when they were created at     in your terminal/bash window.
2. node liri.js spotify-this-song '' This will show the following information about the song    in your terminal/bash window:
        Artist(s),
        The song's name,
        A preview link of the song from Spotify,
        The album that the song is from

3. If no song is provided then your program will default to "The Sign" by Ace of Base.
    node liri.js movie-this ''. This will output the following information to your terminal/bash window:
        Title of the movie.
        Year the movie came out.
        IMDB Rating of the movie.
        Rotten Tomatoes Rating of the movie.
        Country where the movie was produced.
        Language of the movie.
        Plot of the movie.
        Actors in the movie.
4. node liri.js do-what-it-says Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run             spotify-this-song for "I Want it That Way," as follows the text in random.txt. Feel free to  change the text in that document to test out the feature for other commands.

```

### Task Requirements:

```css
Instructions


Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.
Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.


node_modules
.DS_Store
.env

Make a JavaScript file named keys.js.



Inside keys.js your file will look like this:


console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:


# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret


This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.
If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.



Make a file called random.txt.




Inside of random.txt put the following in with no extra characters or white space:


spotify-this-song,"I Want it That Way"

Make a JavaScript file named liri.js.
At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

Add the code required to import the keys.js file and store it in a variable.

You should then be able to access your keys information like so

  var spotify = new Spotify(keys.spotify);

Make it so liri.js can take in one of the following commands:

    concert-this
    spotify-this-song
    movie-this
    do-what-it-says


### How to Use:

    Terminal / Bash

    node liri.js my-tweets
    node liri.js spotify-this-song
    node liri.js movie-this
    node liri.js do-what-it-says

--------------------END----------------------------

```

### Languages Used:

```css
    - Nodejs

```
### Licenses:
    - MIT License
### Contributing:

    Fork it!
    Create your feature branch: git checkout -b my-new-feature
    Commit your changes: git commit -am Add some feature
    Push to the branch: git push origin my-new-feature
    Submit a pull request! 

```css
Link to Project

https://ocgedeon.github.io/liri-node-app/

