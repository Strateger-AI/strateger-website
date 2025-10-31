"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Optional: Tailwind helper for merging classes

export function CustomSearchbar({
  placeholder = "Type your Questions Here!",
  onSearchAction,
  className,
}: {
  placeholder?: string;
  onSearchAction?: (value: string) => void;
  className?: string;
}) {
  const [value, setValue] = useState("");

  const handleClear = () => setValue("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearchAction) {
      onSearchAction(value.trim());
    }
  };

  return (
    <div
      className={cn(
        "border-input bg-background focus-within:ring-primary flex w-full items-center gap-2 rounded-md border px-4 py-2 shadow-sm transition focus-within:ring-2 md:w-1/3",
        className,
      )}
    >
      <SearchIcon className="text-muted-foreground h-5 w-5" />

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 border-none bg-transparent px-0 py-1 text-sm shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none"
      />

      {value && (
        <button
          onClick={handleClear}
          className="text-muted-foreground hover:text-primary transition"
          aria-label="Clear search"
        >
          <XIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
