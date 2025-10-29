import { BANNER_SECTION } from "@/data/blog/blog.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function BlogBannerSection() {
  return (
    <div
      className="relative flex min-h-[80vh] flex-col items-center justify-center gap-10 px-5 text-white md:px-20"
      style={{
        backgroundImage: `url(${BANNER_SECTION.bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-primary absolute inset-0 z-0 h-full w-full opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        <h1 className="text-center text-2xl sm:text-3xl leading-snug font-bold whitespace-pre-line md:text-5xl">
          {BANNER_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>
        {/*input*/}
        <div className="border-primary w-full px-2 flex sm:min-w-3/5 items-center rounded-xl border-2 bg-white p-2">
          <input
            className="flex-1 rounded-xl px-3 py-2 sm:px-6 sm:py-5 sm:text-xl text-black outline-none focus:border-transparent focus:ring-0 focus:outline-none"
            placeholder="Enter your Email Address"
          />
          <button className="bg-primary rounded-md px-3 py-2  sm:px-6 sm:py-5 font-extrabold text-white">
            Subscribe
          </button>
        </div>
        <CTAButton2 href={"/contact"} version={2} label={"Contact Us"} />
      </div>
    </div>
  );
}
