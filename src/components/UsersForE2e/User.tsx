import React, { FC } from "react";
import { IUser } from "../../models/IUser";

interface UserProps {
  onDelete(id: number): void;
  user: IUser;
}

const User: FC<UserProps> = ({ user, onDelete }) => {
  return (
    <div id="user-item">
      {user.name}
      <button onClick={() => onDelete(user.id)} id="user-delete">
        delete
      </button>
    </div>
  );
};

export default User;
