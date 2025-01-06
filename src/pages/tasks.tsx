/** @format */

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/features/task/taskSlicer";
import { useGetTaskQuery } from "@/redux/api/baseApi";



const Tasks = () => {

   const {data, isLoading, isError} = useGetTaskQuery(undefined);
   console.log({data,isLoading});
   // const tasks = useAppSelector(selectTasks);
   // const dispatch = useAppDispatch();

   return (
      <div>
         <div className="flex justify-end items-center">
            <h2 className="mr-auto">Tasks</h2>
            <Tabs  defaultValue={"all"}>
               <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="low">Low</TabsTrigger>
                  <TabsTrigger value="medium">Medium</TabsTrigger>
                  <TabsTrigger value="high">High</TabsTrigger>
               </TabsList>
            </Tabs>
            <AddTaskModal></AddTaskModal>
         </div>
         <div>
            {/* {tasks.map((task) => (
               <TaskCard task={task} key={task.id}></TaskCard>
            ))} */}
         </div>
      </div>
   );
};

export default Tasks;
