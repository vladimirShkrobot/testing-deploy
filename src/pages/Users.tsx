import { FC } from "react";
import UserList from "../components/UserList/UserList";

interface UsersProps {}

const Users: FC<UsersProps> = () => {
  return (
    <div data-testid="users-page">
      <UserList />
    </div>
  );
};

export default Users;
