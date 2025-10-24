"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
import { PhoneInput } from "@/components/ui/CustomPhoneInput";

export function ContactUsForm() {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex h-full flex-col gap-5 md:gap-3  text-black">
      <Input placeholder="Name" className="!px-4 !py-6" />
      <Input placeholder="Email" className="!px-4 !py-6" />
      {/*<Input placeholder="Phone No." className="!px-4 !py-6" />*/}
      <PhoneInput
        defaultCountry="us"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <Textarea
        placeholder="Write about your project..."
        className=" flex-1 min-h-[200px] !px-4 !py-6"
      />
      <Button className="w-full !px-4 !py-6 text-2xl font-bold">Submit</Button>
    </div>
  );
}
