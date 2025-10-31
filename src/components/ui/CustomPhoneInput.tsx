"use client";

import * as React from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import "react-international-phone/style.css";

import {
  usePhoneInput,
  defaultCountries,
  parseCountry,
  CountryIso2,
  FlagImage,
} from "react-international-phone";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value?: string;
  defaultCountry?: CountryIso2;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const PhoneInput = ({
  value,
  defaultCountry = "us",
  onChange,
  disabled,
  className,
}: PhoneInputProps) => {
  const { inputValue, handlePhoneValueChange, country, setCountry, inputRef } =
    usePhoneInput({
      defaultCountry,
      value,
      countries: defaultCountries,
      onChange: ({ phone }) => {
        onChange?.(phone);
      },
    });

  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("flex", className)}>
      {/* --- Country Selector --- */}
      <Popover
        open={isOpen}
        // modal
        onOpenChange={(open) => {
          setIsOpen(open);
          if (open) setSearchValue("");
        }}
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="flex gap-1 !px-4 !py-6 rounded-e-none rounded-s-md border-r-0 focus:z-10"
            disabled={disabled}
          >
            <FlagImage iso2={country.iso2} className="size-5" />
            <ChevronsUpDown
              className={cn(
                "-mr-2 size-4 opacity-50",
                disabled ? "hidden" : "opacity-100",
              )}
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] p-0" sideOffset={0}>
          <Command>
            <CommandInput
              value={searchValue}
              onValueChange={(value) => {
                setSearchValue(value);
                setTimeout(() => {
                  scrollAreaRef.current
                    ?.querySelector("[data-radix-scroll-area-viewport]")
                    ?.scrollTo(0, 0);
                }, 0);
              }}
              placeholder="Search country..."
            />

            <CommandList>
              <ScrollArea ref={scrollAreaRef} className="h-72">
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {defaultCountries.map((c) => {
                    const parsed = parseCountry(c);
                    return (
                      <CommandItem
                        key={parsed.iso2}
                        onSelect={() => {
                          setCountry(parsed.iso2);
                          setIsOpen(false);
                        }}
                        className="gap-2"
                      >
                        <FlagImage iso2={parsed.iso2} className="size-5" />
                        <span className="flex-1 text-sm">{parsed.name}</span>
                        <span className="text-sm text-muted-foreground">
                          +{parsed.dialCode}
                        </span>
                        <Check
                          className={cn(
                            "ml-auto size-4",
                            parsed.iso2 === country.iso2
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* --- Phone Input --- */}
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handlePhoneValueChange}
        className="rounded-s-none !px-4 !py-6 "
        disabled={disabled}
        placeholder="Enter phone number"
        type="tel"
      />
    </div>
  );
};

// "use client";
//
// import * as React from "react";
// import { ChevronsUpDown, Check } from "lucide-react";
// import "react-international-phone/style.css";
//
// import {
//   usePhoneInput,
//   defaultCountries,
//   parseCountry,
//   CountryIso2,
//   FlagImage,
// } from "react-international-phone";
//
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { cn } from "@/lib/utils";
// import { Label } from "@/components/ui/label";
//
// interface PhoneInputProps {
//   value?: string;
//   defaultCountry?: CountryIso2;
//   onChange?: (value: string) => void;
//   disabled?: boolean;
//   className?: string;
// }
//
// export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
//   ({ value, defaultCountry = "us", onChange, disabled, className }, ref) => {
//     const {
//       phone,
//       inputValue,
//       handlePhoneValueChange,
//       country,
//       setCountry,
//       inputRef,
//     } = usePhoneInput({
//       defaultCountry,
//       value,
//       countries: defaultCountries,
//       onChange: ({ phone }) => {
//         onChange?.(phone);
//       },
//     });
//
//     const scrollAreaRef = React.useRef<HTMLDivElement>(null);
//     const [searchValue, setSearchValue] = React.useState("");
//     const [isOpen, setIsOpen] = React.useState(false);
//
//     return (
//       <div className={cn("flex", className)}>
//         {/* --- Country Selector --- */}
//         <Popover
//           open={isOpen}
//           modal
//           onOpenChange={(open) => {
//             setIsOpen(open);
//             if (open) setSearchValue("");
//           }}
//         >
//           <PopoverTrigger asChild>
//             <Button
//               type="button"
//               variant="outline"
//               className="flex gap-1 rounded-e-none rounded-s-md border-r-0 px-3 focus:z-10"
//               disabled={disabled}
//             >
//               <FlagImage iso2={country.iso2} className="size-5" />
//               <ChevronsUpDown
//                 className={cn(
//                   "-mr-2 size-4 opacity-50",
//                   disabled ? "hidden" : "opacity-100",
//                 )}
//               />
//             </Button>
//           </PopoverTrigger>
//
//           <PopoverContent className="w-[300px] p-0">
//             <Command>
//               <CommandInput
//                 value={searchValue}
//                 onValueChange={(value) => {
//                   setSearchValue(value);
//                   setTimeout(() => {
//                     scrollAreaRef.current
//                       ?.querySelector("[data-radix-scroll-area-viewport]")
//                       ?.scrollTo(0, 0);
//                   }, 0);
//                 }}
//                 placeholder="Search country..."
//               />
//
//               <CommandList>
//                 <ScrollArea ref={scrollAreaRef} className="h-72">
//                   <CommandEmpty>No country found.</CommandEmpty>
//                   <CommandGroup>
//                     {defaultCountries.map((c) => {
//                       const parsed = parseCountry(c);
//                       return (
//                         <CommandItem
//                           key={parsed.iso2}
//                           onSelect={() => {
//                             setCountry(parsed.iso2);
//                             setIsOpen(false);
//                           }}
//                           className="gap-2"
//                         >
//                           <FlagImage iso2={parsed.iso2} className="size-5" />
//                           <span className="flex-1 text-sm">{parsed.name}</span>
//                           <span className="text-sm text-muted-foreground">
//                             +{parsed.dialCode}
//                           </span>
//                           <Check
//                             className={cn(
//                               "ml-auto size-4",
//                               parsed.iso2 === country.iso2
//                                 ? "opacity-100"
//                                 : "opacity-0",
//                             )}
//                           />
//                         </CommandItem>
//                       );
//                     })}
//                   </CommandGroup>
//                 </ScrollArea>
//               </CommandList>
//             </Command>
//           </PopoverContent>
//         </Popover>
//
//         {/* --- Phone Input --- */}
//         <Input
//           ref={(node) => {
//             inputRef.current = node;
//             if (typeof ref === "function") ref(node);
//             else if (ref) ref.current = node;
//           }}
//           value={inputValue}
//           onChange={handlePhoneValueChange}
//           className="rounded-s-none"
//           disabled={disabled}
//           placeholder="Enter phone number"
//           type="tel"
//         />
//       </div>
//     );
//   },
// );
//
// PhoneInput.displayName = "PhoneInput";

// export const PhoneInput = () => {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="outline">Open popover</Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-80">
//         <div className="grid gap-4">
//           <div className="space-y-2">
//             <h4 className="leading-none font-medium">Dimensions</h4>
//             <p className="text-muted-foreground text-sm">
//               Set the dimensions for the layer.
//             </p>
//           </div>
//           <div className="grid gap-2">
//             <div className="grid grid-cols-3 items-center gap-4">
//               <Label htmlFor="width">Width</Label>
//               <Input
//                 id="width"
//                 defaultValue="100%"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <Label htmlFor="maxWidth">Max. width</Label>
//               <Input
//                 id="maxWidth"
//                 defaultValue="300px"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <Label htmlFor="height">Height</Label>
//               <Input
//                 id="height"
//                 defaultValue="25px"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <Label htmlFor="maxHeight">Max. height</Label>
//               <Input
//                 id="maxHeight"
//                 defaultValue="none"
//                 className="col-span-2 h-8"
//               />
//             </div>
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// };
