import React, { useState } from "react";

function EventBinding() {
  const [username, setUsername] = useState("");

  function handleUserName(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <label>Username</label>
      <input type="text" onKeyUp={handleUserName} />
      <h3>Hello! {username}</h3>
    </div>
  );
}

export default EventBinding;
