#JooxClone
part of an application for internship

#Installation  
- Clone the project
- go to root directory
```
cd jooxClone
```
- install depedencies
```
npm install
```
- configure mongoDB URI

#mongoDB
the project need an instance of mongoDB to function

setting environment variable pointing to mongoDB

for windows
```
SET MONGOLAB_URI="mongodb://example:example@ds054324.mongolab.com:55482/example"
```

for \*nix
```
export MONGOLAB_URI="mongodb://example:example@ds054324.mongolab.com:55482/example"
```

#Running
- go to root directory
```
cd jooxClone
```
- starting node server (default port 8080) 
```
node server.js 
```

#Formatting

the lyrics are stored and communicated with LRC format :
```
[00:12.00]Line 1 lyrics
[00:17.20]Line 2 lyrics
[00:21.10]Line 3 lyrics
...
[mm:ss.xx]last lyrics line
```
>https://en.wikipedia.org/wiki/LRC_(file_format)

#API

**GETTING A LYRICS**

Path: /musics/lyrics/{mid}  
HTTP Method: GET  
Return Data: Lyric object (JSON)  
Description: Get a Lyric object according to the given music ID parameter in the URI  

URI parameter
  - mid(int): Music ID

Example: /musics/lyrics/1  
```
{  
  "message":{  
    "header":{  
      "status_code":200  
    },  
    "body":{  
      "lyric":{  
        "lyric_id" : "1",  
        "lyric_body": "[00:15.72]You are, my fire  
        [00:20.48]The one, desire  
        [00:25.47]Believe  
        [00:27.88]When I say  
        [00:30.60]That I want it that way  
        ",  
        "lyric_language" : "EN",  
        "version" : "1.0"  
      }  
    }  
  }  
}  
```

**ADDING A LYRICS**

Path: /musics/lyrics  
HTTP Method: POST  
Return Data: status(JSON)  
Description: Upload a lyric to mongoDB  

URI Parameter  
  - lyric_id (int): lyric ID
  - lyric_body (string): lyrics in LRC format
  - lyric_language (string): lyrics's language code (ex. EN)
  - version (string): lyrics's version

Example: /musics/lyrics
```
{
  message: 'Lyric added.'
}
```

**GETTING A SONGS**  
Path: /musics/songs  
HTTP Method: GET  
Return Data: Array of Song objects (JSON)  
Description: Get a list of song available  

Example: /musics/songs  
```
  "message": {
    "header": {
      "status_code": 200
    },
    "body": {
      "song": [
        {
          "id": 1,
          "title": "I want it that way",
          "artist": "Backstreet boy",
          "url": "https://example.com/song/iwantitthatway.mp3",
        },
        {
          "id": 2,
          "title": "All star",
          "artist": "Smashmouth",
          "url": "https://example.com/song/allstar.mp3",
        }
      ]
    }
  }
}
```

**ADDING A SONG**  
Path: /musics/songs  
HTTP Method: POST  
Return Data: status(JSON)  
Description: added a song object to mongoDB  

URI Parameter  
  - id (int): song ID
  - title (string): song's title
  - artist (string): song's artist
  - url (string): song's url (.mp3)

Example: /musics/songs
```
{
  message: 'Songs added.'
}
```
