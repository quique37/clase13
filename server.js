const http = require('http')
const port = 9000
const fs = require('fs')
const path = require('path')

let responseGlobal = ''
const filepath = path.resolve(__dirname, 'static/index.html')

//function handler (err) {
function handleExistence (err) {   
	if (err) {
        console.log('El archivo no existe')
        //El archivo no existe
        
        responseGlobal.writeHead(500, { 'Content-Type': 'text/plain' })
        responseGlobal.write("El archivo no existe")
        responseGlobal.end()
    } else {
        fs.readFile(filepath, 'utf-8', handleRead)
    //El archivo existe´
    }
}

function handleRead (err, data) {   
	if (err) {
        console.log('Error al leer archivo')
        //El archivo no existe
        responseGlobal.writeHead(500, { 'Content-Type': 'text/plain' })
        responseGlobal.write("El archivo no existe")
        responseGlobal.end()
    } else {
        console.log(data)
        responseGlobal.writeHead(200, { 'Content-Type': 'text/plain' })
        responseGlobal.write(data)
        responseGlobal.end()
    }
}




/*function handleRequest (request, response) {   
    function handleRead (err, data) {   
        if (err) {
            console.log('El archivo no existe')
            //El archivo no existe
        } else {
        console.log(data)
        response.end()
        }
    }
}*/
//fs.readFile(filepath, function (err, data) {
    //if (err) throw err;
    //console.log(data);
//});

const url = require('url')
const myURL = url.parse('https://example.org/abc/xyz?123s')
 
const server = http.createServer(function (req, res) {
    responseGlobal = res

    //res.write(filepath)
    fs.access(filepath,fs.constants.F_OK, handleExistence)

})

server.listen(port)
