import "./App.css";
import ThemeContextProvider from "./Context/ThemeContext";
import Navbar from "./component/Navbar";
import NotesList from "./component/NotesList";
import ThemeToggle from "./component/ThemeToggle";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <NotesList />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
