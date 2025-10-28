import "./App.css";
import ThemeContextProvider from "./Context/ThemeContext";
import Navbar from "./component/Navbar";
import NotesList from "./component/NotesList";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <NotesList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
