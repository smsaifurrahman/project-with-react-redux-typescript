/** @format */

import { useAppSelector } from "@/app/hook";
import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/features/task/taskSlicer";

const Tasks = () => {
   const tasks = useAppSelector(selectTasks);
   console.log(tasks);
   return (
      <div>
         <div className="flex justify-between items-center">
            <h2>Tasks</h2>
            <AddTaskModal></AddTaskModal>
         </div>
         <div>
            {tasks.map((task) => (
               <TaskCard task={task} key={task.id} ></TaskCard>
            ))}
         </div>
      </div>
   );
};

export default Tasks;
