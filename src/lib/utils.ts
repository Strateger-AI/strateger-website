import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const scrollToId = (id: string = "contact-form") => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

export function unslugify(slug: string) {
  // Replace hyphens with spaces
  const words = slug.replace(/-/g, " ").split(" ");

  // Capitalize first letter of each word
  const capitalized = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  return capitalized.join(" ");
}
