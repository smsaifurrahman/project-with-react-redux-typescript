/** @format */

import { useAppSelector } from "@/redux/hook";
import { AddUserModal } from "@/components/module/users/addUserModal";
import UserCard from "@/components/module/users/userCard";
import { selectUsers } from "@/features/user/userSlice";

const Users = () => {
       const users = useAppSelector(selectUsers);
   return (
      <div>
         <div className="flex justify-end items-center">
            Users
            <AddUserModal />
         </div>
         <div className="grid grid-cols-2">
            {
                users.map((user) => <UserCard key={user.id} user={user} />)
            }
         </div>
      </div>
   );
};

export default Users;
