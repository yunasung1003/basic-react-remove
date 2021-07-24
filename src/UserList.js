import React from "react";

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b>
      <span>{email}</span>
      {/* props.id :id 값이 특정값을 것을 삭제하겠다.  */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
export default UserList;
