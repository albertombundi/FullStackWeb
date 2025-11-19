import os from 'os';

// 
console.log(os.userInfo().username); // Output: Informações do usuário atual

// Memória total do sistema
console.log(os.totalmem());

// Memória livre do sistema
console.log(os.freemem());

//Número de CPUs
console.log(os.cpus());