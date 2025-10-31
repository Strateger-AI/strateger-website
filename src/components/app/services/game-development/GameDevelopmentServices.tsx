import { GAME_DEV_SERVICES } from "@/data/services/game-dev.data";

export function GameDevelopmentServices() {
  return (
    <div
      style={{
        backgroundImage: `url(${GAME_DEV_SERVICES.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center justify-center space-y-8 p-5 px-5 py-10 md:p-20"
    >
      <h1 className="text-center text-3xl leading-snug font-bold text-white md:text-start md:text-5xl">
        {GAME_DEV_SERVICES.heading}
      </h1>
      <p className="whitespace-pre-line text-white text-center text-sm sm:text-xl">
        {GAME_DEV_SERVICES.desc}
      </p>
      <div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-20">
        {GAME_DEV_SERVICES.services.map((service, index: number) => {
          return (
            <div
              key={index}
              className="group hover:bg-primary/50 border-primary/50 relative w-full overflow-hidden rounded-xl border-[1px] p-6 px-5 md:px-10 transition-colors duration-500 hover:border-white/20 hover:text-white"
            >
              {/* Aspect square container */}
              {/*<div className="absolute inset-0 aspect-square" />*/}

              {/* Content wrapper to center and control layout */}
              <div className="relative text-center z-10 flex h-full flex-col md:text-start items-center gap-4 md:items-start">
                <h1 className=" text-xl font-bold text-white sm:text-2xl ">
                  {service.heading}
                </h1>
                <p className="text-sm text-white sm:text-base">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
