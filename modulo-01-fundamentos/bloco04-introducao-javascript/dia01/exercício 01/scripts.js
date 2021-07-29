/* Variáveis */
const myName = "Fernanda";
const birthCity = "São Paulo";
let birthYear = 1996

console.log (myName);
console.log (birthCity);
console.log(birthYear);
birthYear = 2030
console.log (birthYear);

/* operações aritméticas*/
let base = 5
let altura = 8
let area = (base * altura)
let perimetro = (base + altura + base + altura)
console.log (area)
console.log (perimetro)

/* Condiçòes If e Else */
let nota = 50;

if (nota > 80) {
  console.log ("Parabéns, você foi aprovada (o)!")
}
else if (nota < 80 && nota >= 60) {
console.log ("Você está na nossa lista de espera")
}
else {
  console.log ("Você foi reprovada(o)")
}

/* Switch e Case */
let resultadoTrybe = "lista";

switch (resultadoTrybe) {
  case "aprovada":
  console.log ("Parabéns, você foi aprovada (o)!");
  break;

    case "lista":
      console.log ("Você está na nossa lista de espera");
      break;

  case "reprovada":
    console.log ("Você foi reprovada (o)");
    break;

    default:
      console.log ("Valor não identificado");
}


