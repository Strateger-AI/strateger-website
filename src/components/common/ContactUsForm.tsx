import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactUsForm() {
  return (
    <div className="flex h-full flex-col gap-3">
      <Input placeholder="Name" className="!px-4 !py-6" />
      <Input placeholder="Email" className="!px-4 !py-6" />
      <Input placeholder="Phone No." className="!px-4 !py-6" />
      <Textarea
        placeholder="Write about your project..."
        className="min-h-[250px] flex-1 !px-4 !py-6"
      />
      <Button className="w-full !px-4 !py-6 text-2xl font-bold">Submit</Button>
    </div>
  );
}
