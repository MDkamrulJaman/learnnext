import React from "react";
// import users from "../../users";
import { useState } from "react";

function Users() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState("");

  const loadUsers = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        return setusers(data);
      });
  };

  const handleAddUser = () => {
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
    loadUsers();
  };

  const handleDeleteBtn = (id) => {
    fetch(`/api ${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h1>this is the API get route</h1>
      <button onClick={loadUsers}>Load User</button>
      <br />
      <input onChange={(e) => setuser(e.target.value)} type="text" />
      <button onClick={handleAddUser}>Add User</button>
      <br />

      {users.map((user) => {
        return (
          <div key={user.id}>
            <div></div>
            <h1>
              {user.id} : {user.name}
            </h1>
            <button onClick={handleDeleteBtn(user.id)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Users;
