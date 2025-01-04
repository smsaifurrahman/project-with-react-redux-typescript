/** @format */

import { Button } from "@/components/ui/button";
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
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
   const form = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <Dialog>
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
                           <FormLabel />
                           <FormLabel>Title</FormLabel>
                           <FormControl>
                              <Input></Input>
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
                     name="dueDate"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel />
                           <FormLabel>Due Date</FormLabel>
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
                           <FormLabel />
                           <FormLabel>Priority</FormLabel>
                           <FormControl>
                              <Select>
                                 <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">
                                       System
                                    </SelectItem>
                                 </SelectContent>
                              </Select>
                           </FormControl>
                           <FormDescription />
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
