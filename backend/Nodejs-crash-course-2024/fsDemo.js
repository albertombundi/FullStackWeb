//import fs from 'fs';
import fs from 'fs/promises';

// readFile() – versão de retorno de chamada
//fs.readFile('./text.txt', 'utf8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//});

// readFileSync() – versão síncrona
//const data = fs.readFileSync('./text.txt', 'utf8');
//console.log(data);

//readFile() – promise .then --> versão com promises
//fs.readFile('./text.txt', 'utf8')
//    .then((data) => console.log(data))
//    .catch((err) => console.error(err));

// readFile() – versão async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

//writeFile() – versão async/await
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Hello, I am writing to this file!', 'utf8');
        console.log('File written to...');
    } catch (error) {
        console.error(error);
    }
};

//appendFile() – versão async/await
const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\nThis is appended text.', 'utf8');
        console.log('File appended to...');
    } catch (error) {
        console.error(error);
    }
};

// Chamar as funções
writeFile();
appendFile();
readFile();