// import logo from './logo.svg';
import "./App.css";
import TodoApp from './components/todo/TodoApp'
// import FirstComponent from "./components/learning-examples/FirstComponent";
// // Without "{}", it will return the default component only
// import { FifthComponent } from "./components/learning-examples/FirstComponent";
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import FourthComponent from "./components/learning-examples/FourthComponent";
//import LearningComponent from "./components/learning-examples/LearningComponent";
function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

// function PlayingWithProps({property1, property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>
//       Props
//     </div>
//   )
// }

export default App;
