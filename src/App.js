import Sidebar from "./components/Sidebar/Sidebar";
import './Sass/styles.sass'
import Header from "./Layout/Header/Header";
import Workspace from "./components/Workspace/Workspace";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-content">
        <Sidebar/>
        <Workspace/>
      </div>
    </div>
  );
}

export default App;
