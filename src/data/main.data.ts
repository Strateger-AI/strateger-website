import { CiMobile1 } from "react-icons/ci";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa6";
import { Clock, Star, TrendingUp, Smartphone } from "lucide-react";
import {
  FaMobileAlt,
  FaGamepad,
  FaVrCardboard,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";
import { MdBusiness } from "react-icons/md";

// export const NAV_ITEMS = [
//   {
//     title: "Services",
//     href: "/",
//     heading: "We are Offering",
//     categories: [
//       {
//         title: "Mobile App Development",
//         href: "/services/mobile-app-development",
//         // subcategories: [
//         //   { title: "UI/UX Design Services", href: "/services/ui-ux-design" },
//         //   {
//         //     title: "Progressive Web App Development",
//         //     href: "/services/pwa-development",
//         //   },
//         //   {
//         //     title: "iOS App Development",
//         //     href: "/services/ios-app-development",
//         //   },
//         //   {
//         //     title: "Android App Development",
//         //     href: "/services/android-app-development",
//         //   },
//         //   {
//         //     title: "Blockchain Development",
//         //     href: "/services/blockchain-development",
//         //   },
//         // ],
//       },
//       {
//         title: "Game Development Services",
//         href: "/services/game-development",
//         // subcategories: [
//         //   {
//         //     title: "Mobile Game Development",
//         //     href: "/services/game-development/mobile",
//         //   },
//         //   {
//         //     title: "Android Game Development",
//         //     href: "/services/game-development/android",
//         //   },
//         //   {
//         //     title: "iOS Game Development",
//         //     href: "/services/game-development/ios",
//         //   },
//         //   {
//         //     title: "PC Game Development",
//         //     href: "/services/game-development/pc",
//         //   },
//         //   {
//         //     title: "Unity3D Game Development",
//         //     href: "/services/game-development/unity3d",
//         //   },
//         //   {
//         //     title: "Unreal Game Development",
//         //     href: "/services/game-development/unreal",
//         //   },
//         //   {
//         //     title: "Web3 and NFT Game Development",
//         //     href: "/services/game-development/web3-nft",
//         //   },
//         //   {
//         //     title: "Multiplayer Game Development",
//         //     href: "/services/game-development/multiplayer",
//         //   },
//         // ],
//       },
//       {
//         title: "AR/VR Development",
//         href: "/services/ar-vr-development",
//         // subcategories: [
//         //   {
//         //     title: "VR & AR Gaming Development",
//         //     href: "/services/ar-vr/gaming",
//         //   },
//         //   { title: "Custom AR VR Development", href: "/services/ar-vr/custom" },
//         //   { title: "AR App Integration", href: "/services/ar-vr/integration" },
//         // ],
//       },
//       {
//         title: "Cybersecurity Services",
//         href: "/services/cybersecurity",
//         subcategories: [],
//       },
//       {
//         title: "Deep Learning Services",
//         href: "/services/deep-learning",
//         subcategories: [],
//       },
//       {
//         title: "ERP Implementation Services",
//         href: "/services/erp-implementation",
//         subcategories: [],
//       },
//     ],
//   },
//   // {
//   //   title: "Industries",
//   //   href: "/",
//   //   heading: "We are Transforming",
//   //   categories: [
//   //     {
//   //       title: "Education & E-Learning",
//   //       href: "https://strateger.ai/industries/education-e-learning",
//   //     },
//   //     {
//   //       title: "Gaming & Entertainment",
//   //       href: "https://strateger.ai/industries/gaming-entertainment",
//   //     },
//   //     {
//   //       title: "Healthcare & Life Sciences",
//   //       href: "https://strateger.ai/industries/healthcare-life-sciences",
//   //     },
//   //     {
//   //       title: "Retail & E-Commerce",
//   //       href: "https://strateger.ai/industries/retail-ecommerce",
//   //     },
//   //     {
//   //       title: "Enterprise & Corporate",
//   //       href: "https://strateger.ai/industries/enterprise-corporate",
//   //     },
//   //     {
//   //       title: "Finance & Banking",
//   //       href: "https://strateger.ai/industries/finance-banking",
//   //     },
//   //     {
//   //       title: "Real Estate & Construction",
//   //       href: "https://strateger.ai/industries/real-estate-construction",
//   //     },
//   //     {
//   //       title: "Automotive & Manufacturing",
//   //       href: "https://strateger.ai/industries/automotive-manufacturing",
//   //     },
//   //   ],
//   // },
//   {
//     title: "About Us",
//     href: "/about-us",
//   },
//   {
//     title: "Contact Us",
//     href: "/contact",
//   },
//   {
//     title: "Blog",
//     href: "/blog",
//   },
// ];

export const NAV_ITEMS = [
  {
    title: "Services",
    href: "/services",
    heading: "We are Offering",
    categories: [
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
        icon: FaMobileAlt,
        subcategories: [],
      },
      {
        title: "Game Development Services",
        href: "/services/game-development",
        icon: FaGamepad,
        subcategories: [],
      },
      {
        title: "AR/VR Development",
        href: "/services/ar-vr-development",
        icon: FaVrCardboard,
        subcategories: [],
      },
      {
        title: "Cybersecurity Services",
        href: "/services/cybersecurity",
        icon: FaShieldAlt,
        subcategories: [],
      },
      {
        title: "Deep Learning Services",
        href: "/services/deep-learning",
        icon: FaBrain,
        subcategories: [],
      },
      {
        title: "ERP Implementation Services",
        href: "/services/erp-implementation",
        icon: MdBusiness,
        subcategories: [],
      },
    ],
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const heroSection = {
  heroContent: "Where Vision \n  Meets Innovation.",
  ctaButton: "Explore Now ",
  working: [
    {
      heading: "Mobile App Development",
      desc:
        "\n" +
        "We are a mobile app development company dedicated to delivering end-to-end mobile application development services tailored to your digital needs. From concept to launch, we build apps that combine innovation, performance, and user centric design to help your business grow.\n",
    },
    {
      heading: "Game Development Services\n",
      desc:
        "\n" +
        "We provide game development services that blend creativity, technology, and storytelling turning your vision into engaging gameplay experiences players love.",
    },
    {
      heading: "Custom AR VR Development\n",
      desc:
        "\n" +
        "At Strateger.ai, we bring your vision to life through advanced AR VR development services and AI-powered solutions. By blending creativity with technology, we design immersive experiences that transform the way people interact with digital worlds.",
    },
    {
      heading: "Cybersecurity Service\n",
      desc:
        "\n" +
        "We are a trusted cyber security solutions provider, helping businesses safeguard their digital assets with innovative protection strategies. Our tailored cyber security solutions ensure resilience against evolving threats.",
    },
    {
      heading: "Deep Learning Service\n",
      desc:
        "\n" +
        "Through our deep learning development service, we harness the power of machine learning to solve real business challenges. From analyzing data to predicting outcomes, we deliver solutions that are practical, intelligent, and built for impact.",
    },
    {
      heading: "ERP Implementation Services\n",
      desc:
        "\n" +
        "Optimize your operations with our ERP implementation services. We make it easier to manage processes, reduce complexity, and drive business success.",
    },
  ],
};

export type FooterCategory = {
  title: string;
  href?: string; // optional because "Location" has no link
  icon?: string; // optional because only social links have it
};

export type FooterLinkGroup = {
  heading: string;
  categories: FooterCategory[];
};

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    heading: "Services",
    categories: [
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        title: "Game Development services",
        href: "/services/game-development",
      },
      { title: "Custom AR VR Development", href: "/services/ar-vr" },
      { title: "Cybersecurity service", href: "/services/cybersecurity" },
      { title: "Deep Learning service", href: "/services/deep-learning" },
      {
        title: "ERP Implementation Services",
        href: "/services/erp-implementation",
      },
    ],
  },
  {
    heading: "Industries",
    categories: [
      { title: "Education & E-Learning", href: "/industries/education" },
      { title: "Gaming & Entertainment", href: "/industries/gaming" },
      { title: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { title: "Retail & E-Commerce", href: "/industries/retail" },
      { title: "Enterprise & Corporate", href: "/industries/enterprise" },
      { title: "Finance & Banking", href: "/industries/finance" },
      { title: "Real Estate & Construction", href: "/industries/real-estate" },
      { title: "Automotive & Manufacturing", href: "/industries/automotive" },
    ],
  },
  {
    heading: "Location",
    categories: [
      { title: "Lahore, USA" }, // No link needed
    ],
  },
  {
    heading: "Quick Links",
    categories: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    categories: [
      { title: "Contact Us", href: "/contact" },
      { title: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    heading: "Connect With Us",
    categories: [
      { title: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { title: "Twitter", href: "https://twitter.com", icon: "twitter" },
      { title: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { title: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
  },
];

export const PORTFOLIO_SECTION = {
  portfolioHeading:
    "Strateger.ai partners with businesses to bring ideas to life, building digital products that are innovative, practical, and results-driven. Our focus is on creating solutions that make a real difference.",
};

export type PortfolioItem = {
  companyName: string;
  description: string;
  platform: string;
  industry: string;
  image: string;
  companyLogo?: string;
};

export const PORTFOLIO_SECTION_PRODUCTION: PortfolioItem[] = [
  {
    companyName: "Strateger",
    image: "/img.webp",
    description:
      "An ecommerce solution built with React Native, allowing seamless shopping experiences across platforms.",
    platform: "React Native",
    industry: "Ecommerce",
    companyLogo: "/companyIcon.webp",
  },
  {
    companyName: "Healthify",
    image: "/img.webp",
    description:
      "A mobile healthcare tracking app that helps users monitor fitness, diet, and consultations.",
    platform: "Flutter",
    industry: "Healthcare",
    companyLogo: "/companyIcon.webp",
  },
  {
    companyName: "EduVerse",
    image: "/img.webp",
    description:
      "An AI-powered learning management system that offers personalized learning paths.",
    platform: "Next.js",
    industry: "Education",
    companyLogo: "/companyIcon.webp",
  },
  {
    companyName: "FinTrack",
    image: "/img.webp",
    description:
      "A secure finance management and analytics dashboard for small businesses.",
    platform: "Angular",
    industry: "Finance",
    companyLogo: "/companyIcon.webp",
  },
  {
    companyName: "GameOn",
    image: "/img.webp",
    description:
      "A multiplayer online game platform with real-time chat and leaderboard features.",
    platform: "Unity",
    industry: "Gaming",
    companyLogo: "/companyIcon.webp",
  },
];

export const TESTIMONIAL_IMAGES = [
  "dummyTm.webp",
  "dummyTm.webp",
  "dummyTm.webp",
];

export const TESTIMONIALS = [
  {
    name: "Gameverse Studios",
    designation: "CTO",
    testimonial:
      "Partnering with Stratger.ai completely transformed our development cycle. Their AI-driven insights helped us optimize in-game experiences and reduce testing time by nearly 40%. Their expertise in generative technology has truly elevated our creative process.",
    rating: 4.0,
  },
  {
    name: "Infinity Games Studio",
    designation: "Creative Director",
    testimonial:
      "Stratger.ai elevated our entire game design process. Their AI-powered tools streamlined character creation, improved storytelling depth, and cut production time in half. The team’s technical mastery and creative vision helped us deliver our best title yet.",
    rating: 5.0,
  },
  {
    name: "BrightPath Technologies",
    designation: "Product Manager",
    testimonial:
      "Stratger.ai turned our app concept into a powerful business tool. Their team combined creativity with precision, delivering an intuitive and high-performing mobile app that exceeded our user engagement goals. A truly seamless experience from start to finish.",
    rating: 4.5,
  },
  {
    name: "SecureWave Systems",
    designation: "IT Director",
    testimonial:
      "Partnering with Stratger.ai gave us peace of mind. Their proactive cybersecurity approach identified vulnerabilities before they became risks. Their continuous monitoring and smart automation tools strengthened our entire digital ecosystem.",
    rating: 5.0,
  },
  {
    name: "Axis Manufacturing",
    designation: "COO",
    testimonial:
      "Implementing ERP with Stratger.ai was one of our smartest business moves. Their team handled complex integrations effortlessly, streamlining our operations and giving us real-time control over every department. Professional, transparent, and highly efficient.",
    rating: 4.5,
  },
];

export const WHAT_WE_DO_DATA = [
  {
    service: "Mobile App Development",
    serviceIcon: CiMobile1,
    mapping: {
      subDescription:
        "We are a mobile app development company dedicated to delivering end-to-end mobile application development services tailored to your digital needs. From concept to launch, we build apps that combine innovation, performance, and user centric design to help your business grow.",
      subPoints: [
        "Cross-platform & native app development",
        "Performance-focused architecture",
        "UI/UX optimized for user engagement",
      ],
      // technologies: [CiMobile1, CiMobile1, CiMobile1, CiMobile1],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "React Native & Flutter expertise",
        "API integration & authentication",
        "App Store & Play Store deployment",
        "Post-launch analytics & maintenance",
      ],
    },
  },
  {
    service: "Game Development Services",
    serviceIcon: IoGameController,
    mapping: {
      subDescription:
        "We provide game development services that blend creativity, technology, and storytelling turning your vision into engaging gameplay experiences players love.",
      subPoints: [
        "2D/3D game design & development",
        "Unity & Unreal engine expertise",
        "Multi-platform game deployment",
      ],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "Character & environment design",
        "AI-powered NPCs and behaviors",
        "Networked multiplayer integration",
        "Game monetization strategy",
      ],
    },
  },
  {
    service: "Custom AR/VR Development",
    serviceIcon: BsHeadsetVr,
    mapping: {
      subDescription:
        "At Strateger.ai, we bring your vision to life through advanced AR VR development services and AI-powered solutions. By blending creativity with technology, we design immersive experiences that transform the way people interact with digital worlds.",
      subPoints: [
        "Mixed Reality Environments",
        "3D modeling & real-time interaction",
        "Custom headset & platform integration",
      ],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "Interactive training simulations",
        "Spatial tracking & gesture control",
        "Integration with WebXR & Unity",
        "Headset-specific optimization (e.g., Oculus, HoloLens)",
      ],
    },
  },
  {
    service: "Cybersecurity Service",
    serviceIcon: MdOutlineSecurity,
    mapping: {
      subDescription:
        "We are a trusted cyber security solutions provider, helping businesses safeguard their digital assets with innovative protection strategies. Our tailored cyber security solutions ensure resilience against evolving threats.",
      subPoints: [
        "Threat assessment and mitigation",
        "Compliance & data protection",
        "Real-time monitoring tools",
      ],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "Security audits & vulnerability scanning",
        "Firewall & network configuration",
        "Incident response planning",
        "SOC integration & alerting",
      ],
    },
  },
  {
    service: "Deep Learning Service",
    serviceIcon: IoIosSettings,
    mapping: {
      subDescription:
        "We are a trusted cyber security solutions provider, helping businesses safeguard their digital assets with innovative protection strategies. Our tailored cyber security solutions ensure resilience against evolving threats.",
      subPoints: [
        "Neural network model building",
        "Prediction and classification systems",
        "AI integration with real-time data",
      ],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "TensorFlow & PyTorch development",
        "Model training on large datasets",
        "Data cleaning & preprocessing",
        "Deployment on cloud (e.g., AWS, Azure ML)",
      ],
    },
  },
  {
    service: "ERP Implementation Services",
    serviceIcon: FaBusinessTime,
    mapping: {
      subDescription:
        "Optimize your operations with our ERP implementation services. We make it easier to manage processes, reduce complexity, and drive business success.",
      subPoints: [
        "Business process automation",
        "ERP data migration & integration",
        "Custom dashboard & analytics",
      ],
      technologies: [
        {
          title: "Cross Platform",
          description: "Build apps for iOS and Android with one codebase",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Performance",
          description: "Optimized for speed and responsiveness",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "User Experience",
          description: "Designed with modern UI/UX patterns",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
        {
          title: "Security",
          description: "Enterprise-level app protection",
          icon: CiMobile1,
          color: { light: "#000000", dark: "#ffffff" },
        },
      ],
      relatedPoints: [
        "SAP, Oracle, and Odoo ERP support",
        "Cross-departmental workflow mapping",
        "Role-based access control setup",
        "KPI tracking & report generation",
      ],
    },
  },
];

export type IndustryItem = {
  industry: string;
  description: string;
  image: string; // image path or URL
};

export const INDUSTRY_DATA: IndustryItem[] = [
  {
    industry: "Education & E-Learning",
    description:
      "Strateger.ai empowers the education sector with AI-driven e-learning platforms, personalized learning paths, and immersive AR/VR classroom experiences, making education more engaging and accessible.",
    image: "/img.webp",
  },
  {
    industry: "Gaming & Entertainment",
    description:
      "From AI-based game logic to real-time graphics and immersive AR/VR, Strateger.ai brings innovation to gaming and entertainment experiences across platforms.",
    image: `/img.webp`,
  },
  {
    industry: "Healthcare & Life Sciences",
    description:
      "Strateger.ai supports healthcare providers with deep learning diagnostics, patient data analytics, and AR-assisted training or surgeries, transforming patient care and operations.",
    image: "/img.webp",
  },
  {
    industry: "Retail & E-Commerce",
    description:
      "We help retail and e-commerce brands personalize customer journeys, predict buying behavior, and optimize operations through AI insights and real-time dashboards.",
    image: "/img.webp",
  },
  {
    industry: "Enterprise & Corporate",
    description:
      "Strateger.ai streamlines enterprise workflows with ERP integration, process automation, intelligent dashboards, and custom AI tools for better decision-making.",
    image: "/img.webp",
  },
  {
    industry: "Finance & Banking",
    description:
      "We enable banks and fintech companies with fraud detection, automated document processing, and smart risk analysis solutions powered by machine learning.",
    image: "/img.webp",
  },
  {
    industry: "Real Estate & Construction",
    description:
      "From property analytics to AR-based virtual tours and project management automation, Strateger.ai transforms real estate and construction operations with tech.",
    image: "/img.webp",
  },
  {
    industry: "Automotive & Manufacturing",
    description:
      "Strateger.ai brings automation, predictive maintenance, and intelligent robotics to manufacturing and automotive industries, improving efficiency and safety.",
    image: "/img.webp",
  },
];

export const PARTNERS_DATA = [
  {
    type: "customer",
    name: "Customer",
    images: ["/img.webp", "/img.webp", "/img.webp"],
  },
  {
    type: "partner",
    name: "Partner ",
    images: ["/img.webp", "/img.webp", "/img.webp", "/img.webp", "/img.webp"],
  },
  {
    type: "technologies",
    name: "Technology",
    images: [
      "/img.webp",
      "/img.webp",
      "/img.webp",
      "/img.webp",
      "/img.webp",
      "/img.webp",
    ],
  },
];

export const BUSINESS_SECTION_DATA = {
  heading: " Helping Business Grow Beyond Limits",
  description:
    "Strateger AI helps businesses transform by taking their idea and nurturing it into a physical product that offers measurable and noticeable results.",
  stats: [
    {
      icon: Clock,
      stat: 99,
      type: "%",
      description: "Projects Developed on Time and Within the Budget Decided",
    },
    {
      icon: Star,
      stat: 95,
      type: "%",
      description: "Our Apps Are Rated 4 Star or Higher",
    },
    {
      icon: TrendingUp,
      stat: 3,
      type: "X",
      description: "Business Growth Achieved",
    },
    {
      icon: Smartphone,
      stat: 200,
      type: "X",
      description: "Enterprise Level Apps & eCommerce Projects Delivered",
    },
  ],
  CTABtnText: "Get Started",
  CTABtnLink: "/",
};

export const QUESTION_SECTION_DATA = {
  headingParts: [
    { text: "Ask", className: "text-primary font-extrabold" },
    { text: "Any", className: "" },
    { text: "Questions", className: "" },
  ],
  faqs: [
    {
      question:
        "What kind of game development services does Strateger.ai provide?",
      answer:
        "Strateger.ai provides full-spectrum game development services to help businesses and studios build engaging, scalable, and immersive gaming experiences. As a trusted mobile game development company, we specialize in iOS game development services, Android game development, and Unreal Engine game development. Our expertise spans from concept design and prototyping to coding, testing, and launch across multiple platforms. We also deliver AR game development solutions that enhance interactivity and user engagement. Whether you’re developing casual mobile titles or enterprise-level games, Strateger.ai ensures high-quality execution and long-term success.",
    },
    {
      question:
        "Do you offer AR, VR, and AI development solutions for businesses?",
      answer:
        "Yes. Strateger.ai delivers innovative AR game development solutions, VR experiences, and AI-powered applications designed to transform how businesses engage customers, train employees, and streamline processes. From interactive AR apps to immersive VR training environments, our team ensures seamless integration into your business model. Leveraging advanced AI, we personalize user experiences, automate workflows, and provide data-driven insights. Whether you’re in gaming, education, or enterprise, Strateger.ai combines creativity with technology to deliver mobile app development solutions and immersive tools that drive measurable business growth and competitive advantage.",
    },
    {
      question: "How can Strateger.ai help with mobile app development?",
      answer:
        "Strateger.ai provides professional mobile development services that go beyond standard app design. We specialize in custom mobile app development, offering tailored app development services for iOS and Android. Our mobile app development solutions focus on intuitive design, secure performance, and seamless integration with your existing systems. We also embed emerging technologies such as AI, AR/VR, and cloud to enhance functionality and engagement. From ideation to launch, our team ensures your mobile apps are user-friendly, scalable, and designed to generate tangible business value and long-term customer loyalty.",
    },
    {
      question:
        "Does Strateger.ai provide end-to-end product development, from idea to launch?",
      answer:
        "Yes. Strateger.ai provides complete end-to-end mobile development services to transform ideas into successful products. From initial ideation and prototyping to full development, testing, and deployment, we manage the entire lifecycle with precision. Our expertise covers custom mobile app development, Android game development, and iOS game development services, ensuring seamless performance across platforms. We also integrate advanced features like AI, AR/VR, and real-time analytics to maximize engagement and scalability. Beyond launch, we offer continuous support, upgrades, and security, positioning Strateger.ai as your long-term technology growth partner.",
    },
    {
      question:
        "Why choose Strateger.ai as your mobile game development company?",
      answer:
        "Strateger.ai stands out as a leading mobile game development company because we combine creativity, technology, and business strategy to deliver engaging and profitable gaming experiences. Our team excels in iOS game development services, Android game development, and Unreal Engine game development, ensuring compatibility across all platforms. We also provide AR game development solutions that redefine interactivity and boost player engagement. By offering scalable, secure, and performance-driven solutions, we help businesses and studios not only launch successful games but also achieve long-term growth in the competitive gaming market.",
    },
    {
      question: "Does Strateger.ai provide secure app development services?",
      answer:
        "Yes. At Strateger.ai, we prioritize security in all our app development services. As a trusted cybersecurity service provider, we integrate advanced security protocols and compliance frameworks into every project. From custom mobile app development to large-scale enterprise applications, we ensure data protection, secure architecture, and safe user interactions. Our security-first approach minimizes risks and enhances trust, enabling businesses to confidently scale their digital products. By combining innovation with robust cybersecurity practices, Strateger.ai delivers not only feature-rich applications but also peace of mind for your organization.",
    },
  ],
};

export const CTA_SECTION_DATA = {
  ctaText: " Partner With Us to Bring Your Vision to Reality.",
  ctaBtnText: "Lets Connect",
};
