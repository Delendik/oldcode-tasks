import React from 'react';

import './App.css';

//Пусть в методе render есть переменная text с текстом 'текст'. С ее помощью выведите следующее:
// function App() {
//   const text = 'text func'
//   return (
//     <div className="App">
//       {text}
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     const text = 'text class2';
//     return(
//     <div className="App">{text}</div>
//     )
//   }
// }

//Пусть в методе render есть переменная text с текстом '<p>текст</p>'. С ее помощью выведите следующее:
// function App() {
//   const text = <p>текст func</p>
//   return (
//     <div className="App">
//       {text}
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     const text = <p>текст class</p>;
//     return(
//     <div className="App">{text}</div>
//     )
//   }
// }

//Пусть в методе render есть переменная text1 с текстом '<p>текст1</p>' и переменная text2 с текстом '<p>текст2</p>'. С их помощью выведите следующее:
// function App() {
//   const text1 = <p>текст func1</p>
//   const text2 = <p>текст func2</p>
//   return (
//     <div className="App">
//       {text1}
//       <p>!!!</p>
//       {text2}
//     </div>
//   );
// }

//Пусть в методе render есть переменная attr с текстом 'block'. Сделайте так, чтобы метод render вывел на экран следующее (значение атрибута id должно вставится из переменной attr):

// class App extends React.Component{
//   render(){
//     const attr = 'block'
//     return(
//     <div id = {attr}>text class</div>
//     )
//   }
// }

//Дан див с текстом. Установите этому диву зеленый цвет, границу и border-radius в 30px.
// function App() {
//   const text = <p>текст func</p>
//   return (
//     <div className="App" style={{backgroundColor:'green', borderRadius:'30px', border:'1px solid red'}}>
//       text func
//     </div>
//   );
// }

//Пусть в методе render есть переменная show, которая может иметь значение true или false. Сделайте так, чтобы, если эта переменная равна true, метод render вывел на экран следующее:
// class App extends React.Component{
//   render(){
//     const show = false
//     return(
//       show ? <div>text true</div> : <div>text false</div>
    
//     )
//   }
// }

//Пусть в методе render есть переменная arr, в которой лежит массив с элементами ['a', 'b', 'c', 'd', 'e']. 
//Сделайте так, чтобы метод render вывел на экран следующее (в каждую лишку запишется один из элементов массива):
// function App() {
//   const arr = ['a', 'b', 'c', 'd', 'e']
//   return (
//     <ul className="App">
//       {arr.map(item => <li>{item}</li>)}
//     </ul>
//   );
// }

//Пусть класс App имеет метод getText(), который своим результатом возвращает '<p>текст</p>'.
// class App extends React.Component{
//   getText(){
//     return <p>текст</p>
//   }
//   render(){
//     return(
//     this.getText()
//     )
//   }
// }

//Пусть класс App имеет метод getNum1(), который своим результатом возвращает число 1 и метод getNum2(), который своим результатом возвращает число 2. 
//Используя эти методы в методе render выведите на экран сумму результатов этих методов (3 - результат сложения getNum1() и getNum2()):
function App() {
  const getNum1 = () => {
    return 1
  }
  const getNum2 = () => {
    return 2
  }

  return (
    <div>{'text ' + (getNum1()+getNum2())}</div>
    
  );
}

export default App;
