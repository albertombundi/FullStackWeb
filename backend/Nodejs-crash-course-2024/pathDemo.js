import path from 'path';
import url from 'url';

const filepath = './dir1/dir2/text.txt'; // Caminho do arquivo

// Nome base
console.log(path.basename(filepath)); // Output: text.txt

// Diretório
console.log(path.dirname(filepath)); // Output: dir1/dir2

// Extensão do arquivo
console.log(path.extname(filepath)); // Output: .txt

// Analisar o caminho 
console.log(path.parse(filepath)); // Output: { root: '', dir: 'dir1/dir2', base: 'text.txt', ext: '.txt', name: 'text' }

const __filename = url.fileURLToPath(import.meta.url); // Caminho do arquivo atual
const __dirname = path.dirname(__filename); // Diretório do arquivo atual
console.log(__filename, __dirname); // Output: Caminho completo do arquivo atual e seu diretório

// Juntar caminhos
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'text.txt');
console.log(filePath2); // Output: Caminho completo juntado

// Resolver caminhos
const filePath3 = path.resolve('dir1', 'dir2', 'text.txt');
console.log(filePath3); // Output: Caminho absoluto do arquivo