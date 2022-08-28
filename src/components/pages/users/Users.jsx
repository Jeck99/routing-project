import "./users.css";
import React, { useContext } from "react";
import UserCard from "../../featurs/User-Card/User-Card";
import { usersContext } from "../../../contexts/users-context";

function Users() {
  const {users,setUsers} = useContext(usersContext);
  return (
    <div className="users">
      <h1>users</h1>
      {users?.map(userItem => (
        <UserCard user={userItem}/>
      ))}
    </div>
  );
}

export default Users;
