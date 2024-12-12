import './App.css';
import AddItem from "./components/Additem";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
        <AddItem/>
        <ListItem/>
    </div>
  );
}

export default App;
