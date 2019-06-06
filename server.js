const http = require('http')
const port = 9000
const fs = require('fs')
const path = require('path')

let responseGlobal = ''
//function handler (err) {
function handleExistence (err) {   
	if (err) {
        console.log('El archivo no existe')
        //El archivo no existe
    } else {
        fs.readFile(filepath, 'utf-8', handleRead)
    //El archivo existe´
    }
}
function handleRead (err, data) {   
	if (err) {
        console.log('Error al leer archivo')
        //El archivo no existe
    } else {
    console.log(data)
    response.end()
    }
}

const filepath = path.resolve(__dirname, 'static/index.html')
fs.access(filepath,fs.constants.F_OK, handleExistence)

    function handleRequest (request, response) {   
        function handleRead (err, data) {   
            if (err) {
                console.log('El archivo no existe')
                //El archivo no existe
            } else {
            console.log(data)
            response.end()
            }
        }
    }
//fs.readFile(filepath, function (err, data) {
    //if (err) throw err;
    //console.log(data);
//});

const url = require('url')
const myURL = url.parse('https://example.org/abc/xyz?123s')
 
    const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(filepath)
        res.write(handleRequest)
        res.end()
    })
     
        server.listen(port)
