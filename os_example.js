const os = require("os");

const plataforma = os.platform();
console.log("Plataforma del sistema operativo:", plataforma);


const memoriaLibre = os.freemem();
console.log("Memoria libre disponible (bytes):", memoriaLibre);

const memoriaTotal = os.totalmem();
console.log("Memoria total del sistema (bytes):", memoriaTotal);

const cpuinfo = os.cpus();
console.log("Información de las CPU:", cpuinfo);