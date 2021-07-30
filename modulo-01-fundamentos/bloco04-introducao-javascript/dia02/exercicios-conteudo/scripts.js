/*Exercício 01
Obtenha o valor "Serviços" do array menu*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links']
let menuServices = menu[1]

console.log(menuServices)

/*Exercício 02
Procure o índice do valor "Portfólio" do array menu*/

let indexOfPortfolio = menu.indexOf('Portfólio')

console.log(indexOfPortfolio)

/*Exercício 03
Adicione o valor "Contato" no final do array menu */
menu.push('Contato')
console.log(menu)

/*For exercício 01
Utilize o for para imprimir os elementos da lista groceryList com o console.log() */
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia']
for (let = index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
}
