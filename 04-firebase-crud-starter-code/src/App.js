import "./App.css";
import {
  createUser,
  readUser,
  readUsers,
  updateUser,
  deleteUser,
} from "./users";

const App = () => {
  return (
    <div className="App">
      <button onClick={createUser}>Create</button>
      <button onClick={readUser}>Read One</button>
      <button onClick={readUsers}>Read All</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
};

export default App;
