// import { CONNECT_WITH_US_SECTION } from "@/data/contact/contact.data";
// import TiltCard from "@/components/common/TiltCard";
// import Link from "next/link";
//
// export function ConnectWithUs() {
//   return (
//     <div
//       className={
//         "flex flex-col items-center justify-center gap-5 px-5 pb-10 md:px-20 md:pb-20 lg:gap-8"
//       }
//     >
//       <h1 className="text-center text-3xl leading-snug md:text-4xl md:text-start lg:text-6xl">
//         {CONNECT_WITH_US_SECTION.headingParts.map((part, i) => (
//           <span key={i} className={part.className}>
//             {part.text}{" "}
//           </span>
//         ))}
//       </h1>
//       <div className={"flex flex-wrap items-center justify-center gap-10"}>
//         {CONNECT_WITH_US_SECTION.emails.map((email, i) => (
//           <TiltCard key={i}>
//             <div
//               className={
//                 "border-primary group hover:bg-primary flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white px-10 py-5 shadow-xl transition-all duration-300"
//               }
//             >
//               <h1
//                 className={
//                   "text-primary text-3xl font-bold group-hover:text-white"
//                 }
//               >
//                 {email.title}
//               </h1>
//               <Link
//                 href={`mailto:${email.mail}`}
//                 className={"text-xl group-hover:text-white"}
//               >
//                 {email.mail}
//               </Link>
//             </div>
//           </TiltCard>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { CONNECT_WITH_US_SECTION } from "@/data/contact/contact.data";
import TiltCard from "@/components/common/TiltCard";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export function ConnectWithUs() {
  return (
    <section className="flex flex-col items-center justify-center px-5 pb-16 md:px-20 md:pb-24">
      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold leading-snug md:text-4xl lg:text-6xl mb-10">
        {CONNECT_WITH_US_SECTION.headingParts.map((part, i) => (
          <span key={i} className={`${part.className}`}>
            {part.text}{" "}
          </span>
        ))}
      </h1>

      {/* Cards Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 w-full">
        {CONNECT_WITH_US_SECTION.emails.map((email, i) => (
          <TiltCard key={i}>
            <div className="group relative flex flex-col items-center justify-center rounded-2xl border-2 border-primary bg-white p-8 text-center shadow-md transition-all duration-300 hover:bg-primary hover:shadow-xl hover:-translate-y-1">
              {/* Floating Icon */}
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-primary">
                <MdEmail size={24} />
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-white">
                {email.title}
              </h2>

              {/* Email Link */}
              <Link
                href={`mailto:${email.mail}`}
                className="mt-3 text-lg font-medium text-gray-600 transition-colors duration-300 group-hover:text-white"
              >
                {email.mail}
              </Link>

              {/* Decorative line */}
              <div className="mt-4 h-[2px] w-12 bg-primary opacity-60 transition-all duration-300 group-hover:bg-white group-hover:opacity-80" />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
