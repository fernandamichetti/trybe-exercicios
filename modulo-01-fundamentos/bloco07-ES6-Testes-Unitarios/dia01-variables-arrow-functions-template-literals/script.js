//Parte 1

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

//Parte 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedOddsAndEvens = oddsAndEvens.sort(function(a,b) {
  return a - b;
}); 

console.log(`Os números ${sortedOddsAndEvens} se encontram ordenados de form crescente!`);
