/** @format */

import { useAppDispatch } from "@/redux/hook";
import { Button } from "@/components/ui/button";
import { removeUser } from "@/features/user/userSlice";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

/** @format */
interface IProps {
   user: IUser;
}

const UserCard = ({ user }: IProps) => {
    
    const dispatch = useAppDispatch();

   return (
      <div className="max-w-xs mx-auto mt-8">
         <div className=" rounded-lg p-4 border-4 text-center border-green-500 flex items-center justify-center ">
            <h2 className="text-lg font-medium text-white ">
                {user.name} </h2>
                <Button  onClick={()=> dispatch(removeUser(user.id))} variant="outline">
                  {" "}
                  <Trash2></Trash2>{" "}
               </Button>
               
         </div>
      </div>
   );
};

export default UserCard;
