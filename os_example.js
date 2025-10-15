const os = require("os");

const plataforma = os.platform();
console.log("Plataforma del sistema operativo:", plataforma);

const memoriaLibre = os.freemem();
console.log("Memoria libre disponible (bytes):", memoriaLibre);

const memoriaTotal = os.totalmem();
console.log("Memoria total del sistema (bytes):", memoriaTotal);

const cpuinfo = os.cpus();
console.log("Número de núcleos de CPU:", cpuinfo.length);
console.log("Modelo de CPU:", cpuinfo[0].model);
console.log("Velocidad de CPU (MHz):", cpuinfo[0].speed);