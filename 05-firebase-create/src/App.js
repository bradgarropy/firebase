import "./App.css";
import { createUser } from "./user";

const App = () => {
  return (
    <div className="App">
      <button onClick={() => createUser({ name: "Brad Garropy" })}>
        Create
      </button>
    </div>
  );
};

export default App;
