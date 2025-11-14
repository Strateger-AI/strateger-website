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

  desc: "At Strateger.ai, we specialize in creating immersive and engaging experiences as a trusted game development agency. Our expert team crafts high-quality mobile games for both Android and iOS, combining stunning visuals, smooth gameplay mechanics, and captivating storylines that keep players coming back for more.\n \n Level up your ideas with us, where creativity meets technology. From concept to launch, we bring your vision to life through innovative design, advanced development tools, and user-centric experiences. Partner with us to build games that engage, inspire, and deliver lasting entertainment across every platform. ",
  CTABtnText: "Get started",

  bannerImg: "/services/game/game-banner.png",
  bannerImgAltText:
    "Mobile app featuring Fortpug Gaming with 3D characters, highlighting advanced game development, immersive design, and interactive gaming experiences.",
  CTaBtnLink: "/contact",
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
    { text: "Mobile Game Development Services", className: "font-bold" },
  ],
  desc: "We turn innovative game development ideas into captivating and high-quality mobile experiences. As a leading video game development company, we combine the creative vision of our clients with the technical expertise of our skilled developers to craft games that entertain, engage, and retain players.\n \n Our comprehensive game development agency covers every stage of the process from concept and design to development, testing, and launch. Our team of strategists, UI/UX designers, developers, and QA specialists collaborates seamlessly to deliver games with stunning visuals, smooth gameplay, and immersive storyline.\n \m Excellence is our standard. We build games that not only delight players but also create lasting impact in the competitive mobile gaming market.",
  img: "/services/game/game-banner-2.png",
  imgAltText:
    "Game development app interface displaying 3D animated characters, showcasing cutting-edge mobile gaming technology and interactive gameplay design.",
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
  img: "/services/game/inovative-gaming-solutions(1).png",
  imgAltText:
    "Colorful bubble game app interface showcasing engaging gameplay and creative design, representing fun and interactive mobile game development services.",
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
  CTaBtnLink: "/contact",
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
      img: "/services/game/unreal.png",
      imAltText:
        "High-quality Unreal Engine game interface with cinematic visuals and immersive gameplay, highlighting next-gen game development technology.",
      desc: "We build games with Unreal Engine for clients with high-end graphic requirements and expansive enterprise-grade scopes. This game development framework empowers our team to deliver photoreal visuals and advanced rendering. Our clients include both B2C and B2B brands, and Unreal’s architecture scales as their needs grow. Moreover, Unreal underpins our NFT and VR game development services through its robust toolset and immersive capabilities.",
    },
    {
      name: "Unity Engine",
      svg: unityIcon,
      img: "/services/game/unity.png",
      imAltText:
        "3D mobile game interface built with Unity engine, showcasing realistic graphics, smooth performance, and advanced game development features.",
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
        "We use the latest frameworks and tools to build future-ready, scalable, and sustainable games.",
      icon: BsStack,
    },
    {
      title: "Transparent Collaboration",
      reason:
        "Stay involved at every stage with real-time progress tracking and open communication.",
      icon: FaUsersLine,
    },
    {
      title: "Industry-Specific Experience",
      reason:
        "Our cross-genre experience helps us deliver games tailored to the unique demands of each market.",
      icon: FaMedal,
    },
    {
      title: "Technical Expertise",
      reason:
        "Skilled in Unity, Unreal, and more—our team creates visually stunning and technically solid games.",
      icon: GrUserSettings,
    },
    {
      title: "Full-Cycle Development Services",
      reason:
        "From concept to launch, we handle every stage of game development for consistency and efficiency.",
      icon: FaRecycle,
    },
    {
      title: "Monetization Strategies That Work",
      reason:
        "We design monetization systems—ads, in-app purchases, or premium features—that maximize revenue.",
      icon: FaHandHoldingUsd,
    },
    {
      title: "Player-Focused User Experience",
      reason:
        "Data-driven design keeps players engaged through balanced gameplay and continuous feedback.",
      icon: SiNextui,
    },
    {
      title: "Scalable Architecture",
      reason:
        "We build with growth in mind, ensuring your game scales smoothly from launch to enterprise level.",
      icon: FaHammer,
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
      question: "What is game app development?",
      answer:
        "Game app development is the process of designing, coding, and launching interactive games for different platforms. It covers everything from concept creation and visuals to programming, testing, and publishing.",
    },
    {
      question: "What are the stages of game development?",
      answer:
        "The journey usually includes planning, concept design, prototyping, development, testing, release, and ongoing support, each step ensuring the final product is engaging and market-ready.",
    },
    {
      question: "How much does game development cost?",
      answer:
        "Costs depend on the type of game, its complexity, graphics quality, and chosen platform. A simple 2D project may require a modest budget, while 3D, multiplayer, or cross-platform titles demand higher investment.",
    },
    {
      question: "How long does it take to develop a mobile game app?",
      answer:
        "Timelines vary with scope; basic mobile games may take a few weeks, while larger projects with advanced features can stretch over several months.",
    },
    {
      question:
        "What factors should I consider before hiring a game development company?",
      answer:
        "It’s important to review their portfolio, technical expertise, and industry experience. Clear communication, project transparency, and proven results also play a key role in choosing the right partner.",
    },
    {
      question: "Why should I outsource mobile game development services?",
      answer:
        "Outsourcing gives you access to skilled talent, advanced tools, and faster development cycles often at a lower cost than building an in-house team. It’s an efficient way to bring your game idea to life.",
    },
  ],
};

export const CTA_SECTION_DATA_GAME = {
  ctaText:
    " Turn your game idea into a playable reality let’s build it together.",
  ctaBtnText: " Get Started",
  CtaLink: "/contact",
};
