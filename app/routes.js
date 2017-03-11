module.exports = function(app) {
	var Lyric = require('../app/models/lyric');

	// server routes ===========================================================
	app.get('/musics/lyrics/:mid',function(req,res){
		var mid = req.params.mid;
		res.send(`
			{
			  "message":{
			    "header":{
			      "status_code":200
			    },
			    "body":{
			      "lyric":{
			        "lyric_id" : "1"
			        "lyric_body": "[ti:I want it that way]
								[ar: Backstreet boy]
								[00:00.00]---
								[00:09.00]~Yeah~
								[00:15.72]You are, my fire
				        [00:20.48]The one, desire
				        [00:25.47]Believe when i say
				        [00:30.60]I want it that way
				        [00:35.26]But we, are two worlds apart
				        [00:42.26]Can't reach to your heart
				        [00:47.14]When you say
				        [00:50.28]That I want it that way
				        [00:54.46]Tell me why
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
				        [03:37.25]------
			        ",
			        "lyric_language" : "EN",
			        "version" : "1.0"
			      }
			    }
			  }
			}
			`
		)
	});
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};