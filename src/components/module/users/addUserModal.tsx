/** @format */

import { useAppDispatch } from "@/redux/hook";
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

import { addUser, DraftUser } from "@/features/user/userSlice";

import { DialogDescription } from "@radix-ui/react-dialog";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export function AddUserModal() {
   const form = useForm();
   const dispatch = useAppDispatch();

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      console.log(data);
      dispatch(addUser(data as DraftUser));
   };

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button>Add User</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only">
               Fill up this form to Add task
            </DialogDescription>
            <DialogHeader>
               <DialogTitle>Add User</DialogTitle>
            </DialogHeader>
            <Form {...form}>
               <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
               >
                  <FormField
                     control={form.control}
                     name="name"
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

                  <DialogFooter>
                     <Button type="submit">Save changes</Button>
                  </DialogFooter>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   );
}
