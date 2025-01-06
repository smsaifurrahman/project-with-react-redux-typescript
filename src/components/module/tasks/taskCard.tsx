/** @format */

import { Button } from "@/components/ui/button";
import { ITask } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteTask, toggleCompleteState } from "@/features/task/taskSlicer";
import { selectUsers } from "@/features/user/userSlice";

interface IProps {
   task: ITask;
}

const TaskCard = ({ task }: IProps) => {

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find(user => user.id === task.assignedTo )

   return (
      <div className="border px-5 py-3 rounded-md">
         <div className="flex justify-between items-center">
            <div
               className={cn("size-3 rounded-full", {
                  "bg-green-500": task.priority === "low",
                  "bg-yellow-500": task.priority === "medium",
                  "bg-red-500": task.priority === "high",
               })}
            />

            <div className="flex gap-2 items-center">
               <div className="size-3 rounded-full bg-green-500" />
               <h2> {task.id} </h2>
               <h1 className={cn({"line-through": task.isCompleted })}>{task.title} </h1>
            </div>
            <div> {task.priority} </div>
            <div className="flex gap-3 items-center">
               <Button onClick={()=> dispatch(deleteTask(task.id))} variant="outline">
                  {" "}
                  <Trash2></Trash2>{" "}
               </Button>
               <Checkbox checked={task.isCompleted} onClick={()=> dispatch(toggleCompleteState(task.id))}></Checkbox>
            </div>
         </div>
         <p> Assigned to : { assignedUser ?  assignedUser.name : " No one "}</p>
         <p className="mt-5"> {task.description} </p>
      </div>
   );
};

export default TaskCard;
