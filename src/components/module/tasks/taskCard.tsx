import { Button } from "@/components/ui/button";
import { ITask } from "@/types";

interface IProps {
  task: ITask;
}

const TaskCard = ({task}: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="size-3 rounded-full bg-green-500" />
            <h1>{task.title} </h1>
          </div>
          <div className="flex gap-3 items-center">
          <Button variant="outline">Button</Button>

          </div>
        </div>
        <p className="mt-5"> {task.description} </p>
      </div>
    );
};

export default TaskCard;