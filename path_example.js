const path = require("path");

const rutaCompleta = path.join("archivos", "example.txt");

console.log("Ruta completa del archivo:", rutaCompleta);

const extension = path.extname(rutaCompleta);
console.log("extension del archivo:", extension);

const nombreBase = path.basename(rutaCompleta);
console.log("Nombre base del archivo:", nombreBase);

// Obtener el directorio del archivo>