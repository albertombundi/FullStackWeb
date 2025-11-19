import crypto from 'crypto';

// createHash() // Cria um objeto hash que pode ser usado para gerar resumos de hash usando o algoritmo especificado.
const hash = crypto.createHash('sha256');
hash.update('password123');
console.log('Hash:', hash.digest('hex'));

//RandomBytes createHmac() // Cria um objeto HMAC que pode ser usado para gerar códigos de autenticação de mensagem usando o algoritmo especificado e uma chave secreta.
//crypto.randomBytes(16, (err, buffer) => {
//  if (err) throw err;
//  console.log('Random Bytes:', buffer.toString('hex'));
//});

// createCipheriv & createDecipheriv() // Cria objetos de cifra e decifra usando o algoritmo especificado, uma chave e um vetor de inicialização (IV).
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this a secret message!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);