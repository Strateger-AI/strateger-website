import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4 text-center">
      {/* 404 Illustration */}
      <div className=" relative h-[250px] w-[250px]    sm:h-[400px] sm:w-[400px]   md:h-[600px] md:w-[600px]  mx-auto">
        <Image
          src="/not-found.webp" // 👉 put your image here: /public/images/404.png
          alt="Page not found"
          fill
          className="object-contain !absolute"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="mt-8 text-4xl font-bold text-primary sm:text-5xl">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="mt-3 text-muted-foreground sm:text-lg">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Button to Home */}
      <div className="mt-6">
        <Link href="/">
          <Button className="bg-primary text-primary-foreground hover:opacity-90  px-6 py-2">
            Go Back Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
