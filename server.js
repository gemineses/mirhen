var http = require("http"),
	path = require("path"),
	urls = require("url"),
	fs = require('fs');

function petServ(req, resp){
	var pathname = urls.parse(req.url).pathname;
	router(rutas, pathname, resp);
}

http.createServer(petServ).listen(8888);

console.log("servidor creado");


//trabajando con las rutas
function router(rutas, pathname, response, request){
	if(typeof rutas[pathname] === 'function'){
		return rutas[pathname](response, request, pathname);
	}else{
		response.writeHead(404, {'Content-Type':'text/html'});
		response.write('<h1>Error 404 Page not found</h1>');
		response.end();	
	}
}


var rutas = {};
rutas['/'] = root;
rutas['/admin'] = admin,
rutas['/mirhen'] = mirhen;


function mirhen(res, req, pathname){
	/*var filenameIndex = __dirname+pathname;
	console.log("filenameIndex");
	console.log(filenameIndex);*/
	fs.createReadStream('index.html').pipe(res);
}

function root(res, req, pathname){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('main page');
	res.end();
}

function admin(res, req, pathname){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('main ADMIN page');
	res.end();
}