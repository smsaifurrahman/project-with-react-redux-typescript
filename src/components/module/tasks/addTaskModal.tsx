/** @format */

import { useAppDispatch, useAppSelector } from "@/app/hook";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "@/features/task/taskSlicer";
import { selectUsers } from "@/features/user/userSlice";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


export function AddTaskModal() {
   const [open, setOpen] = useState(false)
   const form = useForm();
   const dispatch = useAppDispatch();
   const users = useAppSelector(selectUsers)

   const onSubmit : SubmitHandler<FieldValues> = (data) => {
      console.log(data);
      dispatch(addTask(data as ITask));
      setOpen(false);
      form.reset()
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button>Add Task</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only">
               Fill up this form to Add task
            </DialogDescription>
            <DialogHeader>
               <DialogTitle>Add Task</DialogTitle>
            </DialogHeader>
            <Form {...form}>
               <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
               >
                  <FormField
                     control={form.control}
                     name="title"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Title</FormLabel>
                           <FormControl>
                              <Input {...field} value={field.value || ""} />
                           </FormControl>
                           <FormDescription />
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="description"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel />
                           <FormLabel>Description</FormLabel>
                           <FormControl>
                              <Textarea {...field} value={field.value || ""} />
                           </FormControl>
                           <FormDescription />
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="priority"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Priority</FormLabel>
                           <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                           >
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Select a Priority" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 <SelectItem value="low">Low</SelectItem>
                                 <SelectItem value="medium">Medium</SelectItem>
                                 <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                           </Select>
                           <FormDescription>
                              You can manage email addresses in your .
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="assignedTo"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Assigned To</FormLabel>
                           <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                           >
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Select a User" />
                                 </SelectTrigger>
                              </FormControl>
                             
                              <SelectContent>
                                 {
                                    users.map((user)=> <SelectItem value={user.id}> {user.name} </SelectItem> )
                                 }
                             
                            
                              </SelectContent>
                           </Select>
                           <FormDescription>
                              You can manage email addresses in your .
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="dueDate"
                     render={({ field }) => (
                        <FormItem className="flex flex-col">
                           <FormLabel> Due Date</FormLabel>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <FormControl>
                                    <Button
                                       variant={"outline"}
                                       className={cn(
                                          " pl-3 text-left font-normal",
                                          !field.value &&
                                             "text-muted-foreground"
                                       )}
                                    >
                                       {field.value ? (
                                          format(field.value, "PPP")
                                       ) : (
                                          <span>Pick a date</span>
                                       )}
                                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                 </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                 className="w-auto p-0"
                                 align="start"
                              >
                                 <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    // disabled={(date) =>
                                    //    date > new Date() ||
                                    //    date < new Date("1900-01-01")
                                    // }
                                    initialFocus
                                 />
                              </PopoverContent>
                           </Popover>
                           <FormDescription>
                              Your date of birth is used to calculate your age.
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <DialogFooter>
                     <Button type="submit">Save changes</Button>
                  </DialogFooter>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   );
}
