const fs = require('fs');

// Carrega os dois arquivos JSON
const json1 = JSON.parse(fs.readFileSync('example1.json', 'utf-8'));
const json2 = JSON.parse(fs.readFileSync('example2.json', 'utf-8'));

// Função para comparar dois arrays de arrays
function compararArrays(arr1, arr2) {
  // Verifica se os arrays possuem o mesmo tamanho
  if (arr1.length !== arr2.length) {
    console.log("Os arrays possuem tamanhos diferentes.");
    return false;
  }

  // Compara os elementos de cada sub-array
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) {
      console.log(`Os sub-arrays na posição ${i} têm tamanhos diferentes.`);
      return false;
    }

    // Compara cada item dentro do sub-array
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        console.log(`Diferença encontrada na posição [${i}][${j}]:`);
        console.log(`  - Array1: ${arr1[i][j]}`);
        console.log(`  - Array2: ${arr2[i][j]}`);
        return false;
      }
    }
  }

  console.log("Os arquivos são iguais.");
  return true;
}

// Comparando os arrays carregados dos arquivos JSON
compararArrays(json1, json2);
