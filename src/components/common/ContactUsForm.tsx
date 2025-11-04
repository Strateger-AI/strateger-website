// "use client";
//
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { PhoneInput } from "@/components/ui/CustomPhoneInput";
//
// export function ContactUsForm() {
//   const [phone, setPhone] = useState("");
//   return (
//     <div className="flex h-full flex-col gap-5 md:gap-3  text-black">
//       <Input placeholder="Name" className="!px-4 !py-6" />
//       <Input placeholder="Email" className="!px-4 !py-6" />
//       {/*<Input placeholder="Phone No." className="!px-4 !py-6" />*/}
//       <PhoneInput
//         defaultCountry="us"
//         value={phone}
//         onChange={(phone) => setPhone(phone)}
//       />
//       <Textarea
//         placeholder="Write about your project..."
//         className=" flex-1 min-h-[200px] !px-4 !py-6"
//       />
//       <Button className="w-full !px-4 !py-6 text-2xl font-bold">Submit</Button>
//     </div>
//   );
// }
"use client";
import { toast } from "sonner";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/CustomPhoneInput";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.reset();
      // alert("Message sent successfully!");
      toast.success("Email Successfully Sent!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 md:gap-4 text-black h-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" className="!px-4 !py-6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" className="!px-4 !py-6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  defaultCountry="us"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1 flex flex-col">
              <FormControl className="flex-1 flex flex-col">
                <Textarea
                  {...field}
                  placeholder="Write about your project..."
                  className="flex-1  !px-4 !py-6 resize-none overflow-auto"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full !px-4 !py-6 text-2xl font-bold mt-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
