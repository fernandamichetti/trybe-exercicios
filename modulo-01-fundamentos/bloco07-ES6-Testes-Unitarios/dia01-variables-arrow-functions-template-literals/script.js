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