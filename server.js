const fs = require('fs')
const path = require('path')
const filepath = path.resolve(__dirname, 'static/index.html')

fs.access(filepath,fs.constants.F_OK, function (err) {
//function handler (err) {
//const handler = function (err) {   
    //C/Users/User/OneDrive/Full-Stack/clase13/static/index.html
	if (err) {
        console.log('El archivo no existe')
        //El archivo no existe
    } else {
    console.log('El archivo existe')
    //El archivo existe´
    }
})
fs.readFile(filepath, function (err, data) {
    if (err) throw err;
    console.log(data);
});
