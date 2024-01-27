import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IUser } from "../../models/IUser";

interface UsersProps {}
const Users: FC<UsersProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
