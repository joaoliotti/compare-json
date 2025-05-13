const fs = require('fs');

// Lê o JSON principal com a chave "lente"
const json = JSON.parse(fs.readFileSync('hoyaMultiMDO.json', 'utf-8'));

const resultado = [];

// Itera sobre cada lente no array "lente"
if (Array.isArray(json.lente)) {
  json.lente.forEach((lente) => {
    const linhas = lente?.codigo?.linha;
    if (Array.isArray(linhas)) {
      linhas.forEach(item => {
        if (Array.isArray(item.coluna)) {
          resultado.push(item.coluna);
        }
      });
    }
  });
}

fs.writeFileSync('codigos_extraidos.json', JSON.stringify(resultado, null, 2), 'utf-8');

console.log(`✅ ${resultado.length} grupos de códigos extraídos.`);
