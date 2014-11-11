var http = require('http');
var title = process.argv[2]?process.argv[2]:''; //example: the+godfather (note that you must use "+" instead of blank spaces)
var length = process.argv[3]?process.argv[3]:'short'; //add full if you want the long plot

var options = {
    host: 'www.omdbapi.com',
    path: '/?t=' + title +'&y=&plot=' + length + '&r=json', 
    method: 'GET'
};

var dataJSON = ""; 
var req = http.request(options, function(res) {
			   res.setEncoding('utf8');
			   
			   res.on('data', function (datos_JSON) {
			   		dataJSON+= datos_JSON; 
			    });
			   
			   res.on('end', function () {
			   		datos = JSON.parse(dataJSON);
			   		if (datos.Response == 'False') {
			   			console.log(datos.Error);
			   		}
			   		else{
			   			console.log('Title: ' + datos.Title + "\nYear: " + datos.Year + "\nDirector: " + datos.Director + '\nActors: ' + datos.Actors +
			   		 	'\nCountry: ' + datos.Country + '\nLanguage: ' + datos.Language + '\nPlot: ' + datos.Plot);
			   		}
			   });
		   });

req.end();
