var http = require('http');
var title = process.argv.slice(2); 
var length = 'short'; //change it to full if you want the full plot
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
			   		 	'\nCountry: ' + datos.Country + '\nLanguage: ' + datos.Language + '\nRuntime: ' + datos.Runtime + '\nPlot: ' + datos.Plot);
			   		}
			   });
		   });

req.end();
