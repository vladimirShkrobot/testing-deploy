import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import User from "./User";

interface UsersForE2eProps {}

const UsersForE2e: FC<UsersForE2eProps> = ({}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setUsers(json);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  const onDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {isLoading && <h1 id="users-loading">loading...</h1>}
      {users.length && (
        <div id="users-list">
          {users.map((user) => (
            <User key={user.id} onDelete={onDelete} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersForE2e;
