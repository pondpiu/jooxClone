#JooxClone
part of an application for internship

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
