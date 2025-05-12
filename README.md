# Ferramenta de Comparação JSON

Uma ferramenta Node.js simples para comparar dois arquivos JSON. A ferramenta verifica se os arrays são idênticos em estrutura e conteúdo, destacando quaisquer diferenças encontradas.

## Funcionalidades

- Compara dois arquivos JSON
- Verifica diferenças estruturais (tamanhos dos arrays)
- Identifica posições específicas onde os valores diferem
- Fornece saída detalhada de quaisquer diferenças encontradas

## Pré-requisitos

- Node.js instalado no seu sistema
- NPM (Node Package Manager)

## Instalação

1. Clone ou baixe este repositório
```bash
https://github.com/joaoliotti/compare-json.git
```
2. Instale as dependências:
```bash
npm install
```

## Como Usar

1. Coloque seus arquivos JSON no diretório do projeto (por padrão, a ferramenta procura por `example1.json` e `example2.json`)

2. Execute a comparação:
```bash
npm run dev
```

A ferramenta irá mostrar:
- Se os arrays são idênticos
- Se existem diferenças de tamanho entre os arrays
- Posições específicas e valores onde foram encontradas diferenças

## Exemplo de Saída

Quando os arquivos são idênticos:
```
Os arquivos são iguais.
```

Quando diferenças são encontradas:
```
Diferença encontrada na posição [0][0]:
  - Array1: "value1"
  - Array2: "different_value"
```

## Licença

Licença MIT

## Autor

João Liotti
