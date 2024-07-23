import logo from "./logo.svg";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";

function App() {
  return (
    <div className="App">
      <h1 className="ny-times">NY Times App</h1>
      <ArticleList />
    </div>
  );
}

export default App;
