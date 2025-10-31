import Image from "next/image";
import { COMPANY_REVIEWS } from "@/data/services/game-dev.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CompanyReviewsSection() {
  return (
    <div className="bg-white px-4 py-8 sm:px-8 md:px-20 lg:px-30">
      <Carousel
        opts={{
          loop: false,
          align: "start",
        }}
        style={{ cursor: "grab" }}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="!ml-0">
          {COMPANY_REVIEWS.map((review, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "px-2 sm:px-4",
                // Override small screens to full width
                "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
              )}
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                <div className="relative aspect-video max-h-48 w-full sm:max-h-56">
                  <Image
                    src={review} // or review.img if that's correct
                    alt={`Review ${i}`}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
