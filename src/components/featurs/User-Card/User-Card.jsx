import "./User-Card.css";
import React from "react";

function UserCard({user}) {
  const {name,age,email,picture} = user;
  return (
    <div className="user-card">
        <h1>first name:{name.first}</h1>
        <h1>last name:{name.last}</h1>
        <h1>age:{age}</h1>
        <h1>email:{email}</h1>
        <img src={picture} alt="" />
    </div>
  );
}

export default UserCard;
