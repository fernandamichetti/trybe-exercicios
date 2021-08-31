// Parte 1
// Exercício 1
testingScope = escopo => {
if (escopo === true) {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  ifScope = `${ifScope} ótimo, fui utilizada no escorpo!`;
  console.log(ifScope)
} else {
  const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  console.log(elseScope);
}
}

testingScope(true)

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedOddsAndEvens = oddsAndEvens.sort(function(a,b) {
  return a - b;
}); 

console.log(`Os números ${sortedOddsAndEvens} se encontram ordenados de form crescente!`);

// Parte 2
// Exercício 1
const fatorial = n => {
  let result = 1;
  for (let i = 2; i <=  n; i += 1) {
    result *= i;
  }

  return result;
}

// Exercicio 2
const longestWord = text => {
let wordArray = text.split(' ');
let maxLength = 0;
let result = '';

for (const word of wordArray) {
    if (word.length > maxLength) {
        maxLength = word.length;
        result = word;
    }
}

return result;
}