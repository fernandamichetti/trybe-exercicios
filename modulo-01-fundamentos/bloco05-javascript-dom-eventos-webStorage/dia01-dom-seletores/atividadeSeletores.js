// Seletores do Tempo
document.getElementsByTagName('h1')[0].style.backgroundColor = 'green'
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor =
  'salmon'
let roxinho = document.getElementsByTagName('h3')
for (let i = 0; i < 2; i += 1) {
  roxinho[i].style.backgroundColor = 'purple'
}
//Se eu quiser que o Loop comece só apartir de x lugar, como fazer isso?
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor =
  'yellow'
document.querySelector('footer').style.backgroundColor = 'green'
document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor =
  'black'
document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor =
  'black'
//Consegui fazer, mas queria deixar mais bonito
