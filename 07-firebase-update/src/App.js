import "./App.css";
import {
  createUser,
  readUsers,
  readUser,
  readUserByName,
  updateUser,
} from "./users";

const App = () => {
  return (
    <div className="App">
      <button onClick={() => createUser({ name: "Brad Garropy" })}>
        Create
      </button>

      <button onClick={() => readUsers()}>Read All</button>

      <button onClick={() => readUser("HFF70OHbn3ICwQNlhh6d")}>Read One</button>

      <button onClick={() => readUserByName("Brad Garropy")}>
        Read One By Name
      </button>

      <button
        onClick={() =>
          updateUser("HFF70OHbn3ICwQNlhh6d", { name: "Bradley Garropy" })
        }
      >
        Update
      </button>
    </div>
  );
};

export default App;
