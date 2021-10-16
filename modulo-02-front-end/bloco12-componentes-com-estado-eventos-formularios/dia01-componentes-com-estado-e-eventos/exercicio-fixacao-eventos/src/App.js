import './App.css';
import React from 'react';

function clickTwo() {
  console.log('Jager, te amo!')
}

function clickThree() {
  console.log('Lupin, te amo!')
}

class App extends React.Component {
constructor () {
  super()
  this.clickOne = this.clickOne.bind(this)
}

clickOne() {
  console.log('Greg, te amo!')
}

  render() {
return (
<div>
<button onClick={this.clickOne} className='greg'>Clica aqui primeiro!</button>

<button onClick={clickTwo} className='jager'>Clica aqui depois!</button>

<button onClick={clickThree} className='lupin'>Por ultimo clica aqui..</button>
</div>
)
  }

}

export default App;
