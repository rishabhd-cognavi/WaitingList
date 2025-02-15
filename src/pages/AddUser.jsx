import { UserForm, UserListWithPosition } from "../modules/AddUser";

export function AddUser() {
  return (
    <div className="flex flex-col gap-5 p-5 lg:flex-row">
      <UserForm />
      <UserListWithPosition />
    </div>
  );
}
