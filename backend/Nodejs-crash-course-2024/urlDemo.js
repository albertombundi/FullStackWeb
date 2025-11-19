import url from 'url';

// Exemplo de string de URL
const urlString = 'https://www.google.com/search?q=hello+world'; // URL de exemplo

// Objeto URL
const urlObj = new url.URL(urlString); // Cria um objeto URL a partir da string

console.log(urlObj.pathname);

// format()
console.log(url.format(urlObj)); // Formata o objeto URL de volta para uma string

//import.meta.url = url - file URL
console.log(import.meta.url); // Exibe a URL do módulo atual

console.log(url.fileURLToPath(import.meta.url)); // Converte a file URL para um caminho de arquivo

console.log(urlObj.search);

const params = new url.URLSearchParams(urlObj.search); // Cria um objeto URLSearchParams a partir da string de consulta
console.log(params.get('q')); // Obtém o valor do parâmetro 'q'
params.append('limit', '5'); // Adiciona um novo parâmetro 'limit' com valor '5'
params.delete('limit'); // Remove o parâmetro 'limit'
console.log(params); // Exibe os parâmetros de consulta atualizados