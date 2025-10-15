import UnrealIcon from "@/data/mobile/icons/UnrealIcon";
import unityIcon from "@/data/mobile/icons/UnityIcon";
import { BsStack } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { FaHammer, FaHandHoldingUsd, FaMedal, FaRecycle } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { SiNextui } from "react-icons/si";

export const BANNER_SECTION = {
  headingParts: [
    { text: "Game Development ", className: "font-extrabold text-primary" },
    { text: "Services", className: "font-bold " },
  ],
  content:
    "At Strateger.ai, we specialize in creating immersive and engaging experiences as a trusted game development agency. Our expert team crafts high-quality mobile games for both Android and iOS, combining stunning visuals, smooth gameplay mechanics, and captivating storylines that keep players coming back for more.",
  CTABtnText: "Get started",

  bannerImg: "",
  CTaBtnLink: "/",
};

export const COMPANY_REVIEWS = [
  "/img_1.png",
  "/img_1.png",
  "/img_1.png",
  "/img_1.png",
  "/img_1.png",
  "/img_1.png",
];

export const TOP_TIER_SECTION = {
  headingParts: [
    { text: "Top-Tier  ", className: "text-primary font-extrabold" },
    { text: "Mobile Game Development Services", className: "" },
  ],
  desc:
    "We turn innovative game development ideas into captivating and high-quality mobile experiences. As a leading video game development company, we combine the creative vision of our clients with the technical expertise of our skilled developers to craft games that entertain, engage, and retain players.\n \n" +
    "Our comprehensive game development agency covers every stage of the process from concept and design to development, testing, and launch. Our team of strategists, UI/UX designers, developers, and QA specialists collaborates seamlessly to deliver games with stunning visuals, smooth gameplay, and immersive storylines.\n \n" +
    "Excellence is our standard. We build games that not only delight players but also create lasting impact in the competitive mobile gaming market.",
  img: "/img_1.png",
  CTABtnText: "Get started",
  CTABtnLink: "/",
};

export const GAME_DEV_SERVICES = {
  heading: "Our Game Development Services",
  desc: "We provide end-to-end solutions for startups, indie creators, and enterprises, offering a wide range of mobile game development expertise tailored to different platforms and audiences. Our team transforms ideas into immersive gameplay experiences by combining creativity, technology, and proven development practices.",
  services: [
    {
      heading: "2D Game Development",
      desc: "From casual puzzles to retro-inspired adventures, our 2D games combine visually appealing two-dimensional graphics with smooth gameplay mechanics. Every project is designed to captivate players and keep them engaged.",
    },
    {
      heading: "Unity3D Mobile Game Development",
      desc: "As a specialized Unity game development agency, we harness the full power of Unity to create visually stunning and performance‑driven games. Our Unity3D mobile game development services deliver cross‑platform titles that offer rich experiences across devices.",
    },
    {
      heading: "Unreal Engine Game Development Services",
      desc: "We leverage Unreal Engine for game development to build photorealistic environments, dynamic gameplay, and immersive storytelling. Whether for mobile, PC, or VR, our Unreal Engine game development services ensure players get a cinematic and interactive experience.",
    },
    {
      heading: "iOS Game Development",
      desc: "With expertise in iOS game development, we craft engaging 2D and 3D titles optimized for Apple devices. Our iOS game dev approach focuses on leveraging the latest tools and trends to ensure smooth performance and an exceptional user experience.",
    },
    {
      heading: "Android Game Development Service",
      desc: "We are passionate about developing Android games that stand out in the crowded marketplace. Our Android game development service covers everything from initial concept and prototyping to launch and monetization, ensuring engaging and scalable solutions.",
    },
    {
      heading: "Web/HTML5 Game Development",
      desc: "We offer Web/HTML5 game development for browser-based games that are responsive, lightweight, and accessible. Perfect for social, casual, or indie games that reach users without installations.",
    },
  ],
  backgroundImg: "/game-dev-bg.webp",
};

export const CTA_SECTION = {
  heading:
    "Bring your game ideas to life with our expert mobile game development services",
  CTABtnText: "Let's Connect",
};

export const GAME_PLATFORM_SOLUTIONS = {
  headingParts: [
    { text: "Innovative  ", className: "" },
    {
      text: " Mobile Game Development",
      className: "text-primary font-extrabold",
    },
    { text: " for Every Platform", className: "" },
  ],
  img: "/game-mobile.webp",
  desc: "Creating games that capture attention starts with a strong idea—and we bring the expertise to make that idea a reality. With a dedicated team specializing in Android and iOS, we deliver gaming solutions that combine creativity, performance, and seamless user experiences.",
  solutions: [
    {
      heading: "Android Game Development",
      desc: "With billions of active users worldwide, Android offers unmatched potential for reaching players. Our team specializes in Android game design and Android game development, building everything from casual titles to complex mobile experiences that run smoothly across devices.",
    },
    {
      heading: "iPhone Game Development",
      desc: "Apple’s App Store continues to dominate the gaming space, and our team delivers cutting-edge iPhone game development solutions tailored for this platform. By leveraging advanced tools and iOS game programming techniques, we create engaging and competitive titles that stand out in the marketplace.",
    },
    {
      heading: "Cross-Platform Game Development",
      desc: "To maximize reach, we also build cross-platform games that function flawlessly on multiple devices with a single codebase. This approach ensures efficiency, consistency, and a strong foundation for building a loyal player base.",
    },
  ],
  ctaText: "Book A Demo",
  CTaBtnLink: "/",
};

export const GAME_DEV_TECHNOLOGIES = {
  headingParts: [
    { text: "Sustainable & Scalable ", className: "" },
    {
      text: "Mobile Game Development",
      className: "text-primary font-extrabold",
    },
    { text: " Technologies", className: "" },
  ],
  desc: "At Strateger.ai, we combine innovative technologies with scalable solutions to create visually striking, high-performance games that grow with your audience.",
  technologies: [
    {
      name: "Unreal Engine",
      svg: UnrealIcon, // or your SVG component / path
      img: "/unreal-engine-1.webp",
      desc: "We build games with Unreal Engine for clients with high-end graphic requirements and expansive enterprise-grade scopes. This game development framework empowers our team to deliver photoreal visuals and advanced rendering. Our clients include both B2C and B2B brands, and Unreal’s architecture scales as their needs grow. Moreover, Unreal underpins our NFT and VR game development services through its robust toolset and immersive capabilities.",
    },
    {
      name: "Unity Engine",
      svg: unityIcon,
      img: "/unity-1-1.webp",
      desc: "We utilize the Unity game development engine for its native plus cross-platform flexibility. Unity covers Android, iOS, consoles, and PCs with just about two codebases. Its rich Asset Store of plugins, tools, and APIs accelerates development, making it cost-effective without compromising power. Unity’s versatility makes it ideal for both 2D and 3D games, offering budget-friendly, scalable solutions for our clients.",
    },
    // You can add more technologies similarly (e.g. Godot, Cocos, etc.)
  ],
};

export const GAME_DEV_PROCESS = {
  headingParts: [
    { text: "Our ", className: "" },
    { text: "6-Step ", className: "text-primary font-extrabold" },
    { text: "Game Development Process ", className: "" },
    { text: "at Strateger.ai", className: "text-primary font-extrabold" },
  ],
  desc: "At Strateger.ai, we follow a clear and collaborative process for delivering world-class mobile game development services. Our streamlined approach keeps clients engaged at every stage, ensuring transparency, creativity, and high-quality results from concept to launch",
  processSteps: [
    {
      step: 1,
      heading: "Planning",
      description:
        "We start with in-depth research to understand your target audience, current market trends, and competitors. This allows us to map out a clear development strategy with defined milestones, timelines, and resource allocation.",
    },
    {
      step: 2,
      heading: "Conceptualization",
      description:
        "Once the foundation is set, we collaborate closely with you to refine the core idea. From storyline and characters to gameplay mechanics, every detail is shaped with your vision in mind. At this stage, we also create an initial prototype to validate the concept.",
    },
    {
      step: 3,
      heading: "Design",
      description:
        "Our creative design team brings your vision to life with detailed visual assets, including characters, environments, and animations. Alongside the visuals, we design intuitive UI elements, menus, and navigation flows to ensure a seamless player experience.",
    },
    {
      step: 4,
      heading: "Development",
      description:
        "With the designs finalized, our developers build the game using the right frameworks and technology stacks. This is where creativity meets code—transforming concepts into a functional, engaging, and visually striking game.",
    },
    {
      step: 5,
      heading: "Deployment",
      description:
        "Before launch, our QA specialists thoroughly test the game to ensure flawless performance across devices. Once polished, we handle deployment to the appropriate app stores, making your game ready for the world.",
    },
    {
      step: 6,
      heading: "Maintenance",
      description:
        "The journey doesn’t end at launch. We continuously monitor performance, roll out updates, and implement strategies to boost player engagement and retention. Our team also provides ongoing support to keep your game competitive and evolving.",
    },
  ],
};

export const WHY_CHOOSE_STRATEGER_SECTION = {
  headingParts: [
    { text: "Why", className: "" },
    { text: "Strateger.ai", className: "text-primary font-extrabold" },
    { text: "is Your Mobile Game", className: "" },
    {
      text: "Development Partner",
      className: "text-primary font-extrabold",
    },
  ],
  desc: "As a trusted name in mobile gaming, we focus on building scalable, sustainable, and revenue-driven games. Here’s what makes us the preferred choice for game creators and enterprises.",

  reasons: [
    {
      title: "Modern Technology Stack",
      reason:
        "We leverage the latest development frameworks and tools to ensure every game is future-ready. By building with robust technologies, we create titles that are not only sustainable today but also scalable for tomorrow’s challenges.",
      icon: BsStack, // Replace with actual icon name or component string
    },
    {
      title: "Transparent Collaboration",
      reason:
        "We believe in keeping clients involved at every stage. With real-time progress tracking and open communication, you’ll always know exactly where your game stands in the development lifecycle.",
      icon: FaUsersLine, // Replace with actual icon
    },
    {
      title: "Industry-Specific Experience",
      reason:
        "Having worked across multiple genres, our team understands the unique demands of different markets. This sector-driven knowledge allows us to deliver games that connect with the right audience.",
      icon: FaMedal, // Replace with actual icon
    },
    {
      title: "Technical Expertise",
      reason:
        "Our developers are skilled in leading technologies like Unity and Unreal Engine. This diverse expertise allows us to build visually stunning and technically sound games.",
      icon: GrUserSettings, // Replace with actual icon
    },
    {
      title: "Full-Cycle Development Services",
      reason:
        "From concept design to development, testing, and launch, we provide a complete range of game development services under one roof, ensuring efficiency and consistency throughout.",
      icon: FaRecycle, // Replace with actual icon
    },
    {
      title: "Monetization Strategies That Work",
      reason:
        "Beyond building games, we design monetization frameworks that help you maximize revenue. Whether through in-app purchases, ads, or premium features, we make sure your game achieves financial success.",
      icon: FaHandHoldingUsd, // Replace with actual icon
    },
    {
      title: "Player-Focused User Experience",
      reason:
        "We analyze user behavior, gather feedback, and create engaging gameplay loops that keep players hooked. With data-driven design, our games offer lasting entertainment and stronger retention.",
      icon: SiNextui, // Replace with actual icon
    },
    {
      title: "Scalable Architecture",
      reason:
        "Every game we develop is built with long-term growth in mind. Our scalable architectures ensure your title can evolve from a small launch into an enterprise-grade success.",
      icon: FaHammer, // Replace with actual icon
    },
  ],
};

export const QUESTION_SECTION_DATA = {
  headingParts: [
    { text: "Ask", className: "text-primary font-extrabold" },
    { text: "Any", className: "" },
    { text: "Questions", className: "" },
  ],
  faqs: [
    {
      question: "How Much Does It Cost to Build a Custom Mobile App?",
      answer:
        "The cost of building a mobile app varies based on factors such as complexity, platform (iOS, Android, or both), UI/UX design, backend services, and integrations. Features like real-time chat, GPS, or AI increase the budget. At Strateger.ai, we offer transparent cost estimates tailored to your business goals, ensuring you receive a secure, scalable, and high-performance app.",
    },
    {
      question: "What’s the Average Timeline for Mobile App Development?",
      answer:
        "Mobile app development typically takes 3–9 months depending on app scope, number of features, and review cycles. At Strateger.ai, we use agile methodologies to speed up development while maintaining code quality and robust testing, helping you launch your app on time and within budget.",
    },
    {
      question: "Why Should You Choose Strateger.ai for App Development?",
      answer:
        "Strateger.ai provides end-to-end mobile app development—from ideation and wireframing to development, QA, and deployment. Our solutions are custom-built to fit your business strategy and user expectations. We prioritize security, scalability, and speed, offering an unparalleled experience for startups and enterprises alike.",
    },
    {
      question: "How Do We Ensure Mobile App Success Post-Launch?",
      answer:
        "We don’t stop at launch. Strateger.ai offers continuous monitoring, performance optimization, and support services. We gather real-time user feedback, run updates, and ensure your app evolves with your users' needs and tech trends.",
    },
    {
      question: "What Engagement Models Do You Offer for Development Projects?",
      answer:
        "We provide flexible engagement models including fixed-price, hourly, and dedicated team structures. This allows businesses to scale up or down as needed and ensures cost control and timely delivery, regardless of project size.",
    },
    {
      question: "Why Outsource Mobile App Development to Strateger.ai?",
      answer:
        "Outsourcing to Strateger.ai brings you cost savings, faster development cycles, and access to a global talent pool. Our team handles design, development, testing, and deployment, allowing you to focus on core business functions while we bring your app to life.",
    },
    {
      question: "What Are the Benefits of Working With a Mobile App Agency?",
      answer:
        "Partnering with a dedicated mobile app agency like Strateger.ai gives you access to specialized talent, structured processes, and advanced tools. We bring strategic thinking, industry insights, and design thinking to ensure your app performs well and delights users.",
    },
    {
      question: "Which Technologies Power Your Mobile App Projects?",
      answer:
        "We use cutting-edge tools and frameworks like React Native, Flutter, Swift, Kotlin, Node.js, Firebase, and AWS. For advanced features, we integrate AI/ML, AR/VR, and real-time analytics to ensure innovation, performance, and scalability in every project.",
    },
  ],
};

export const CTA_SECTION_DATA_GAME = {
  ctaText:
    " Turn your game idea into a playable reality let’s build it together.",
  ctaBtnText: " Get Started",
  CtaLink: "/",
};
