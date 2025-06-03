import "./App.css";
import Lg from "./components/Lg";
import Mb from "./components/Mb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 className="hd">
        <span className="hds">Un</span>Graduation
      </h1>
      <Lg />
      <Mb />
    </div>
  );
}

export default App;
