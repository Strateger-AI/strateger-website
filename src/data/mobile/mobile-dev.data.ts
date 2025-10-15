import { BsDeviceSsd } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { FaApple, FaMedal } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { SiBlockchaindotcom } from "react-icons/si";
import FlutterIcon from "@/data/mobile/icons/FlutterIcon";
import { AppleIcon } from "lucide-react";
import AndroidIcon from "@/data/mobile/icons/AndroidIcon";
import KotlinIcon from "@/data/mobile/icons/KotlinIcon";
import ReactNativeIcon from "@/data/mobile/icons/ReactNativeIcon";
import IonicIcon from "@/data/mobile/icons/IonicIcon";
import GoogleIcon from "@/data/mobile/icons/GoogleIcon";
import oracleIcon from "@/data/mobile/icons/OracleIcon";
import { Ri24HoursFill } from "react-icons/ri";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";

export const HERO_SECTION = {
  headingParts: [
    {
      text: "Mobile App Development  ",
      className: " text-primary  font-extrabold",
    },
    {
      text: "Service in ",
      className: "font-bold",
    },
    {
      text: "USA",
      className: "text-primary font-extrabold",
    },
  ],

  content:
    "At Strateger.ai, we deliver quality-driven mobile app development services designed to help businesses of all sizes grow and scale. With decades of combined experience and a team of skilled developers, we’ve successfully built hundreds of apps across diverse industries. From iOS to Android, our custom mobile app development approach ensures every product is tailored to your vision and backed by strong technical expertise.\n" +
    "",
  stats: [
    {
      stat: 20,
      symbol: "+",
      desc: "Years of Experience",
    },
    {
      stat: 400,
      symbol: "+",
      desc: "Skilled App Developers",
    },
    {
      stat: 39,
      symbol: "+",
      desc: "Industeries Catered",
    },
    {
      stat: 20,
      symbol: "+",
      desc: "Project Delivered",
    },
  ],
  clientSectionHeading:
    "Trusted by 1000+ Happy Clients, Including Enterprises & Fortune 500 Companies",
  clientsImages: [],
  CTABtnLink: "/",
  CTAButton: "Let’s Create Your Next Big App",
  bannerImg: "/services/mobile/mobile.png",
};

export const TRANSFORMING_IDEA_SECTION = {
  headingParts: [
    {
      text: "Transforming Ideas ",
      className: "text-primary font-extrabold",
    },
    {
      text: "into Impactful ",
      className: " font-bold",
    },
    {
      text: "Mobile Apps",
      className: "text-primary font-extrabold",
    },
  ],

  content:
    "As a leading mobile application company, we specialize in creating innovative and scalable digital products tailored to your business needs. At Strateger.ai, our focus is on delivering mobile apps solutions that combine creativity, technology, and functionality. From startups to global enterprises, we help businesses build apps that perform flawlessly, engage users, and drive measurable growth.",
  CTAButtonText: "Get a free consultant",
  CTABtnLink: "/",
  img: "/services/mobile/mobile-transformation.png",
};

export const MOBILE_DEV_SERVICES_DATA = {
  headingParts: [
    {
      text: "Comprehensive Mobile App Services \n ",
      className: "text-black font-bold",
    },
    {
      text: "Tailored to Your Business",
      className: "text-primary font-extrabold",
    },
  ],

  description:
    "As a trusted app development firm, we specialize in building high-performance mobile applications for both iOS and Android. Our mobile app development services USA are designed to match your business goals and industry demands, ensuring every app is feature-rich, scalable, and user-friendly. Whether you’re launching a new product or upgrading an existing app, our full-stack developers deliver solutions that help your business thrive in the digital space.",
  SERVICES: [
    {
      heading: "UI/UX Design Services",
      desc: "A great app isn’t just about functionality, it’s about how it feels to use. With 88% of users abandoning an app after a poor experience, intuitive UI/UX design becomes critical for success. We craft sleek, user-friendly interfaces that improve retention and keep users engaged.",
      icon: BsDeviceSsd, // Replace with your icon component or class
    },
    {
      heading: "Progressive Web App Development",
      desc: "Our progressive web app development services are designed to give businesses a seamless digital presence across all devices. With mobile traffic accounting for over 60% of web usage, PWAs offer a responsive and cost-effective way to expand reach while ensuring consistent performance.",
      icon: MdWeb, // Replace with your icon component or class
    },
    {
      heading: "iOS App Development",
      desc: "Looking to capture the Apple audience? Our iOS app development services focus on building high-performance apps for iPhones, iPads, and even Apple Watch. With the iOS market projected to surpass $407 billion by 2026, this is the right time to create impactful apps for Apple users.",
      icon: FaApple, // Replace with your icon component or class
    },
    {
      heading: "Android App Development",
      desc: "As a trusted Android development company, we help brands connect with a global audience, with Android owning more than 70% of the market share. Our apps are designed to be fast, scalable, and responsive, ensuring your business stands out in a competitive space.",
      icon: ImAndroid, // Replace with your icon component or class
    },
    {
      heading: "Blockchain Development",
      desc: "Security and transparency are at the heart of our blockchain development services. We build decentralized applications that safeguard user data and streamline transactions. With the blockchain market expected to hit $163.83 billion by 2029, investing in this technology is a step toward the future.",
      icon: SiBlockchaindotcom, // Replace with your icon component or class
    },
  ],
};

export const MOBILE_DEV_CTA_DATA = {
  headingParts: [
    {
      text: "Proven Excellence in \n ",
      className: "text-white font-bold",
    },
    {
      text: "Mobile App Development",
      className: "text-white font-extrabold",
    },
  ],

  desc: "Explore our mobile app development agency’s portfolio to see how we’ve helped businesses \n thrive through innovative mobile apps developments. With over years of experience, we’ve delivered impactful solutions that drive growth, enhance user experiences, and create success stories across multiple industries.",
  CTABtnText: "Book A Demo",
  CTABtnLink: "/",
};

export const MOBILE_TECHNOLOGIES_DATA = {
  headingParts: [
    {
      text: "Driving Growth with Advanced ",
      className: "text-black font-bold",
    },
    {
      text: "Mobile App Development USA",
      className: "text-primary font-extrabold",
    },
  ],

  desc: "As a leading provider of mobile app development USA, we combine agile practices with the latest technologies to deliver apps that are scalable, secure, and future-ready. From concept to launch and ongoing support, our team ensures every step is smooth and transparent. We leverage powerful tools like React Native, Flutter, Kotlin, and Swift to build innovative solutions that drive results. Along with robust development, we also specialize in mobile app integration, ensuring seamless connectivity with existing systems and platforms. Our focus is on delivering applications that are reliable, user-friendly, and built to generate real business growth.",
  CTAButtonText: "Connect with us",
  bannerImg: "/services/mobile/mobile-banner.png",
  CTABtnLink: "/",
  technologies: [
    {
      technology: "Flutter",
      icon: FlutterIcon,
    },
    {
      technology: "Apple",
      icon: AppleIcon,
    },
    {
      technology: "Android",
      icon: AndroidIcon,
    },
    {
      technology: "Kotlin",
      icon: KotlinIcon,
    },
    {
      technology: "ReactNative",
      icon: ReactNativeIcon,
    },
    {
      technology: "Ionic",
      icon: IonicIcon,
    },
  ],
};

export const CTA_SECTION_2 = {
  heading: "Unlock Growth with Our Custom App Development Solutions in USA",
  desc: "Turn your vision into a reality with our end-to-end mobile app development solutions. At Strateger.ai, we bring together skilled business analysts, expert mobile developers, and forward-thinking growth strategists to help businesses design, build, and scale apps that truly make an impact.",
  CTABtnText: "Schedule a consultation",
  img: "/common/cta-img.png",
  CTABtnLink: "/",
};

export const ACHIEVEMENT_SECTION_DATA = {
  headingParts: [
    { text: "Recognized for", className: "" },
    { text: "Excellence", className: "text-primary font-extrabold" },
    { text: "in", className: "" },
    {
      text: "Mobile App Development",
      className: "text-primary font-extrabold",
    },
  ],

  desc: "Our mobile app development service is trusted by businesses worldwide for creating practical and innovative solutions that solve real-world challenges. By combining creativity, technical expertise, and a strategic approach, our mobile app consultants help design, develop, and scale applications that deliver measurable results. With decades of experience across multiple industries, we create apps that consistently perform, delight users, and earn industry recognition for their quality and innovation.",
  achievements: [
    {
      img: "/award.webp",
      title: "AWS Certified Partner",
      rating: 4.8,
    },
    {
      img: "/award.webp",
      title: "Google Cloud Integration",
      rating: 4.9,
    },
    {
      img: "/award.webp",
      title: "Microsoft Azure Solutions Provider",
      rating: 4.7,
    },
    {
      img: "/award.webp",
      title: "Firebase App Excellence",
      rating: 4.9,
    },
  ],
};

export const TECH_PARTNERSHIP_SECTION = {
  headingParts: [
    { text: "Strategic Technology", className: "" },
    { text: "Partnerships", className: "text-primary font-extrabold" },
    { text: "Driving Exceptional", className: "" },
    { text: "Mobile Apps", className: "text-primary font-extrabold" },
  ],
  desc: "At Strateger.ai, we deliver outstanding mobile app development services by collaborating with some of the most respected technology firms in the industry. These strategic partnerships allow our mobile app development agency to combine deep expertise with cutting-edge tools and platforms, creating high-quality, scalable digital solutions for our clients. Our team of skilled mobile app developers has crafted innovative applications that address unique business challenges, helping brands achieve measurable growth and user engagement.",
  industries: [
    GoogleIcon,
    oracleIcon,
    GoogleIcon,
    oracleIcon,

    // Add or replace with your actual image paths
  ],
};
export const WHY_TOP_CHOICE_SECTION = {
  headingParts: [
    { text: "Why", className: "" },
    { text: "Strateger.ai", className: "text-primary font-extrabold" },
    { text: "is a Top Choice for", className: "" },
    {
      text: "Mobile App Development Services",
      className: "text-primary font-extrabold",
    },
    { text: "in the USA", className: "" },
  ],
  desc: "Strateger.ai believes in a user-centric approach to software development, putting the end-user at the heart of every project. As a trusted mobile app development agency, we are committed to delivering innovative mobile app development services USA businesses can rely on. Our custom solutions empower companies to thrive, stay competitive, and achieve long-term growth.",

  reasons: [
    {
      title: "24/7 Support",
      reason:
        "We provide round-the-clock support to resolve any issues or queries promptly, ensuring smooth app performance and optimal ROI.",
      icon: Ri24HoursFill, // Replace with your actual icon component or name
    },
    {
      title: "Quality Assurance",
      reason:
        "Our apps are designed to achieve high ratings and deliver measurable results across app stores.",
      icon: FaMedal,
    },
    {
      title: "Tailored Solutions",
      reason:
        "Our custom app development services are designed to align with client requirements and business objectives, helping them succeed.",
      icon: FaHandHoldingDroplet,
    },
    {
      title: "Industry Knowledge",
      reason:
        "Our dedicated team of 200+ skilled professionals brings deep expertise across sectors, ensuring excellence in every project.",
      icon: FaIndustry,
    },
  ],
};

export const CTA_SECTION_3 = {
  heading:
    "Trusted by leading brands around the globe, we deliver innovative app development solutions that empower businesses. Let’s collaborate to build a future-ready mobile app designed for performance, engagement, and growth",
  CTABtnText: "Connect With us",
  img: "/discover.webp",
};

export const CONTACTS_SECTION = {
  headingParts: [
    { text: "Let’s", className: "" },
    { text: "Build the Brand", className: "text-primary font-extrabold" },
    { text: "the", className: "" },
    { text: "Future Demands .", className: "text-primary font-extrabold" },
  ],
  img: "/contact/contact-us-form.jpg",
};

export const QUESTION_SECTION_DATA = {
  headingParts: [
    { text: "Ask", className: "text-primary font-extrabold" },
    { text: "Any", className: "" },
    { text: "Questions", className: "" },
  ],
  faqs: [
    {
      question: "What Factors Influence the Cost of Developing a Mobile App?",
      answer:
        "The cost of developing a mobile app depends on features, design complexity, target platforms (iOS, Android, or both), and third-party integrations. Advanced elements like AI, AR/VR, or custom security also increase pricing. At Strateger.ai, we provide clear cost breakdowns and tailored solutions. Our approach ensures you get a secure, scalable, and high-performing mobile application that aligns with your business goals and delivers measurable value.",
    },
    {
      question:
        "How Long Does It Typically Take to Launch a Mobile Application?",
      answer:
        "The timeline for developing and launching a mobile app ranges from three to nine months, depending on functionality, features, and integration requirements. Simple apps may go live sooner, while advanced applications take more time. Strateger.ai follows agile methodologies to accelerate delivery without sacrificing quality. We ensure your app is fully tested, secure, and optimized for performance before launch, helping businesses achieve their digital goals on time.",
    },
    {
      question:
        "How Can Strateger.ai Support Your Mobile App Development Goals?",
      answer:
        "Strateger.ai supports your mobile app development goals with end-to-end services, covering strategy, design, coding, testing, and deployment. We specialize in custom mobile app development, ensuring apps are secure, scalable, and user-focused. By leveraging advanced technologies like AI, AR/VR, and cloud integration, we build solutions that drive engagement and growth. Whether for startups or enterprises, Strateger.ai creates apps that align with business objectives and deliver long-term success.",
    },
    {
      question:
        "Which Company Offers the Best Mobile App Development Services?",
      answer:
        "The best mobile app development company combines creativity, technical expertise, and business insight. Strateger.ai is recognized for delivering world-class mobile app development services, including Android game development, iOS app solutions, and enterprise-level applications. Our focus is on usability, performance, and security, ensuring apps achieve business impact. With a proven track record across industries, Strateger.ai positions itself as a trusted partner for companies seeking digital innovation.",
    },
    {
      question:
        "What Hiring Models Are Available for Mobile App Development Projects?",
      answer:
        "Businesses can choose from flexible hiring models based on project size and budget. Common options include dedicated teams, fixed-cost projects, or hourly engagements. At Strateger.ai, we tailor hiring models to match client needs, offering cost efficiency and transparency. Whether you require ongoing support or a one-time project team, our hiring structures ensure agility, scalability, and quality delivery for all mobile app development projects.",
    },
    {
      question: "What Advantages Come from Outsourcing Mobile App Development?",
      answer:
        "Outsourcing mobile app development helps businesses save costs, speed up time-to-market, and access skilled experts. It allows companies to focus on core operations while professionals handle development, testing, and deployment. Strateger.ai provides secure and innovative outsourcing solutions as a trusted mobile game development company and custom app development provider. With scalable models and robust cybersecurity measures, we deliver reliable apps that reduce risks and maximize ROI.",
    },
    {
      question:
        "Is It Beneficial to Hire a Professional Mobile App Development Agency?",
      answer:
        "Yes. Hiring a professional mobile app development agency ensures your project is backed by skilled developers, designers, and strategists. Strateger.ai delivers complete custom mobile app development services, aligning apps with user expectations and business goals. We emphasize security, scalability, and performance, reducing risks and ensuring faster delivery. Our professional approach helps businesses launch apps that not only engage users but also create measurable long-term value.",
    },
    {
      question:
        "Which Technologies and Tools Do Mobile App Development Firms Commonly Use?",
      answer:
        "Mobile app development companies use advanced frameworks and tools like Flutter, React Native, and Swift for building native and cross-platform apps. Back-end technologies often include Node.js, .NET, and cloud services. As a leading company, Strateger.ai enhances apps with AI, AR/VR, and advanced cybersecurity to ensure innovation and safety. By combining modern tools with strategic expertise, we deliver high-performing apps that keep businesses ahead in competitive digital markets.",
    },
  ],
};
