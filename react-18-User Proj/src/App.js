import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
