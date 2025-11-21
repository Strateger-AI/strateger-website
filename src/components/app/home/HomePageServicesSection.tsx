import { DUMMY_SERVICES_DATA } from "@/data/main.data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GradientTextHeading from "@/components/common/GradientTextHeading";
import Link from "next/link";
import Container from "@/components/common/Container";

const services = DUMMY_SERVICES_DATA.services;

export function HomePageServicesSection() {
  return (
    <Container className="  ">
      {/* Heading */}
      <GradientTextHeading
        className={""}
        headingParts={DUMMY_SERVICES_DATA.headingParts}
      />

      <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"></p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.typeIcon;
          // const technologyIcon = service.\;
          return (
            // <div
            //   className="rounded-2xl p-[2px] bg-gradient-to-r from-primary to-accent"
            // >

            <Link href={service.btnLink} key={service.type}>
              <Card className="group px-4 shadow-md hover:shadow-2xl group transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center md:items-start   p-0 text-primary gap-4 ">
                  {Icon && (
                    <Icon
                      className={
                        "text-5xl hover:drop-shadow-2xl text-amber-500    transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110   group-hover:drop-shadow-2xl  "
                      }
                    />
                  )}
                  <h3 className="text-2xl text-black font-bold uppercase  ">
                    {service.type}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-1 items-center md:items-start flex-col gap-4">
                  {/* Description */}
                  <p className="font-medium text-center md:text-start">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-5">
                    {service.technologies.map((tech, index) => {
                      const Icon = tech.icon;
                      return <Icon key={index} className="w-8 h-8" />;
                    })}
                  </div>

                  {/* Button / Link */}
                  {/*<Link*/}
                  {/*  href={service.btnLink}*/}
                  {/*  className={clsx(*/}
                  {/*    "mt-4  inline-block px-4 py-2 rounded-lg text-white bg-primary font-medium text-sm text-center hover:bg-primary/90 transition-colors duration-300",*/}
                  {/*  )}*/}
                  {/*>*/}
                  {/*  Learn More*/}
                  {/*</Link>*/}
                </CardContent>
              </Card>
            </Link>

            // {/*</div>*/}
          );
        })}
      </div>
    </Container>
  );
}
