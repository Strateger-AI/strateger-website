import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PARTNERS_DATA } from "@/data/main.data";
import { cn } from "@/lib/utils";

export function PartnersSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-3xl font-bold md:text-5xl">
        Trusted <span className={"text-primary"}>Customers</span> and{" "}
        <span className={"text-primary"}>Partners</span>
      </h1>

      <Tabs className="w-full" defaultValue={PARTNERS_DATA[0].type}>
        {/* Tabs List */}
        <TabsList className="flex justify-center gap-2 bg-transparent md:flex-row md:gap-4">
          {PARTNERS_DATA.map((item) => (
            <TabsTrigger
              key={item.type}
              value={item.type}
              className={cn(
                "gap-2 rounded-full border-2 p-3 text-lg font-medium shadow-md transition-all duration-300 sm:text-xl md:p-6",

                // ✅ Active tab styling
                "!dark:data-[state=active]:border-primary !dark:data-[state=active]:text-white",
              )}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        {PARTNERS_DATA.map((item) => (
          <TabsContent key={item.type} value={item.type} className="w-full">
            <Card className="w-full !border-none !bg-transparent !shadow-none">
              <CardContent className="flex flex-wrap justify-center gap-6 p-6">
                {item.images.map((src, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center overflow-hidden rounded-md shadow"
                  >
                    <Image
                      src={src}
                      alt={`${item.name}-${i}`}
                      width={250}
                      height={1000}
                      objectFit={"fill"}
                      className="h-25 w-50 object-contain p-3"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
