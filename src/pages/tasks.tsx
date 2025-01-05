/** @format */

import { useAppDispatch, useAppSelector } from "@/app/hook";
import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/features/task/taskSlicer";



const Tasks = () => {
   const tasks = useAppSelector(selectTasks);
   const dispatch = useAppDispatch();
   console.log(tasks);
   return (
      <div>
         <div className="flex justify-end items-center">
            <h2 className="mr-auto">Tasks</h2>
            <Tabs  defaultValue={"all"}>
               <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
                  <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
                  <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
                  <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
               </TabsList>
            </Tabs>
            <AddTaskModal></AddTaskModal>
         </div>
         <div>
            {tasks.map((task) => (
               <TaskCard task={task} key={task.id}></TaskCard>
            ))}
         </div>
      </div>
   );
};

export default Tasks;
