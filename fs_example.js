const fs = require('fs');

fs.readFile('archivos\\example.txt', 'utf-8', (err, data) => {
    if (err)
{
    console.error('Error al leer el archivo:', err);
} else {
    console.log('Contenido del archivo:', data);
}});

const Content =  'Este es un nuevo archivo creado con Node.js';
fs.writeFile('archivos\\output.txt',  Content, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo escrito exitosamente');
    }   
});
