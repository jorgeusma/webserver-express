const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Jorge Mario',
            edad: 37,
            url: req.url
        }
        res.write(JSON.stringify(salida))
            //res.write('hola mundo');
        res.end();
    })
    .listen(3000);
console.log('Escuchando puerto 3000')