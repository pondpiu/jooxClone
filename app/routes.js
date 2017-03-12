module.exports = function(app) {
	var Lyric = require('../app/models/lyric');

	// server routes ===========================================================
	app.get('/musics/lyrics/:mid',function(req,res){
		var mid = req.params.mid;
		if(mid == 1){
			res.json(
				{
				  "message":{
				    "header":{
				      "status_code":200
				    },
				    "body":{
				      "lyric":{
				        "lyric_id" : "1",
				        "lyric_body": `[ti:I want it that way]
									[ar: Backstreet boy]
									[00:00.00]---
									[00:09.00]~Yeah~
									[00:15.72]You are, my fire
									[00:20.48]The one, desire
									[00:25.47]Believe when i say
									[00:30.60]I want it that way
									[00:34.94]But we, are two worlds apart
									[00:42.26]Can't reach to your heart
									[00:47.14]When you say
									[00:49.78]That I want it that way
									[00:53.94]Tell me why
									[00:55.75]Ain't nothin' but a heartache
									[00:59.44]Tell me why
									[01:00.73]Ain't nothin' but a mistake
									[01:04.36]Tell me why
									[01:05.52]I never wanna hear you say
									[01:09.70]I want it that way
									[01:14.03]Am I, your fire?
									[01:18.78]Your one, desire?
									[01:23.39]Yes I know, it's too late
									[01:28.68]But I want it that way
									[01:33.31]Tell me why
									[01:34.59]Ain't nothin' but a heartache
									[01:37.77]Tell me why
									[01:39.34]Ain't nothin' but a mistake
									[01:43.00]Tell me why
									[01:44.26]I never wanna hear you say
									[01:48.27]I want it that way
									[01:53.26]Now I can see that we've fallen apart
									[01:57.82]From the way that it used to be, yeah
									[02:02.74]No matter the distance
									[02:05.15]I want you to know
									[02:07.58]That deep down inside of me...
									[02:12.70]You are, my fire
									[02:16.80]The one, desire
									[02:21.75]You are
									[02:23.07]You are, you are, you are
									[02:29.88]Don't wanna hear you say
									[02:32.24]Ain't nothin' but a heartache
									[02:36.88]Ain't nothin' but a mistake
									[02:41.07]Don't wanna hear you say
									[02:41.95]I never wanna hear you say
									[02:46.65]I want it that way
									[02:50.83]Tell me why
									[02:52.21]Ain't nothin' but a heartache
									[02.55.54]Tell me why
									[02:57.08]Ain't nothin' but a mistake
									[03:00.75]Tell me why
									[03:01.74]I never wanna hear you say
									[03:04.54]Don't wanna hear you say
									[03:06.20]I want it that way
									[03:10.41] Tell me why
									[03:11.62]Ain't nothin' but a heartache
									[03:16.58]Ain't nothin' but a mistake
									[03:19.98]Tell me why
									[03:21.38]I never wanna hear you say
									[03:25.58]I want it that way
									[03:30.03]'Cause I want it that way
									[03:37.25]------`
				    			,
				        "lyric_language" : "EN",
				        "version" : "1.0"
				      }
				    }
				  }
				}

			);
		}else if (mid == 2) {
			res.json(
				{
				  "message":{
				    "header":{
				      "status_code":200
				    },
				    "body":{
				      "lyric":{
				        "lyric_id" : "1",
				        "lyric_body": `[ti:All Star]
									[ar:Smash Mouth]
									[00:00.00]---
									[00:01.03]Somebody once told me the world is gonna roll me
									[00:05.90]I ain't the sharpest tool in the shed
									[00:09.94]She was looking kind of dumb with her finger and her thumb
									[00:14.51]In the shape of an "L" on her forehead

									[00:19.43]Well, the years start coming and they don't stop coming
									[00:22.17]Fed to the rules and I hit the ground running
									[00:24.35]Didn't make sense not to live for fun
									[00:26.95]Your brain gets smart but your head gets dumb

									[00:29.08]So much to do, so much to see
									[00:30.84]So what's wrong with taking the back streets?
									[00:33.46]You'll never know if you don't go
									[00:35.84]You'll never shine if you don't glow

									[00:38.03]Hey, now, you're an All Star, get your game on, go play
									[00:42.96]Hey, now, you're a Rock Star, get the show on, get paid
									[00:47.51]And all that glitters is gold
									[00:51.00]Only shooting stars break the mold

									[00:56.80]It's a cool place and they say it gets colder
									[00:59.12]You're bundled up now wait 'til you get older
									[01:01.43]But the meteor men beg to differ
									[01:03.52]Judging by the hole in the satellite picture

									[01:05.57]The ice we skate is getting pretty thin
									[01:07.60]The water's getting warm so you might as well swim
									[01:10.05]My world's on fire. How about yours?
									[01:12.17]That's the way I like it and I'll never get bored.

									[01:15.31]Hey, now, you're an All Star, get your game on, go play
									[01:19.96]Hey, now, you're a Rock Star, get the show on, get paid
									[01:24.43]And all that glitters is gold
									[01:27.98]Only shooting stars break the mold

									[01:52.25]Hey, now, you're an All Star, get your game on, go play
									[01:56.91]Hey, now, you're a Rock Star, get the show on, get paid
									[02:01.40]And all that glitters is gold
									[02:04.99]Only shooting stars break the mold

									[02:08.72]Somebody once asked could I spare some change for gas
									[02:12.63]I need to get myself away from this place
									[02:16.63]I said yep, what a concept
									[02:19.32]I could use a little fuel myself
									[02:21.66]And we could all use a little change

									[02:26.42]Well, the years start coming and they don't stop coming
									[02:29.03]Fed to the rules and I hit the ground running
									[02:31.49]Didn't make sense not to live for fun
									[02:33.62]Your brain gets smart but your head gets dumb

									[02:35.96]So much to do, so much to see
									[02:37.78]So what's wrong with taking the back streets?
									[02:40.52]You'll never know if you don't go
									[02:42.68]You'll never shine if you don't glow.

									[02:45.27]Hey, now, you're an All Star, get your game on, go play
									[02:49.93]Hey, now, you're a Rock Star, get the show on, get paid
									[02:54.36]And all that glitters is gold
									[02:58.13]Only shooting stars break the mold

									[03:03.79]And all that glitters is gold
									[03:07.43]Only shooting stars break the mold

									[03:17.51]-----`
				    			,
				        "lyric_language" : "EN",
				        "version" : "1.0"
				      }
				    }
				  }
				}

			);
		}
	});
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
