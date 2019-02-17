const express = require('express')
const app = express()

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'))

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
})

const port = process.env.PORT || 3000;



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'yorch mariO'
    })

})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})