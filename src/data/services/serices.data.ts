import {
  FaMobileAlt,
  FaGamepad,
  FaVrCardboard,
  FaShieldAlt,
  FaBrain,
  FaNetworkWired,
} from "react-icons/fa";

export const SERVICES_BANNER_SECTION = {
  heading: "Comprehensive Technology Services for a Smarter Future",
  description:
    "At Stratger.ai, we deliver end-to-end technology solutions that help businesses innovate, scale, and stay ahead in the digital era. Our services are built around understanding your unique challenges and turning them into opportunities for growth. From advanced AI and machine learning to custom software, web and mobile app development, and game design, we provide solutions that combine strategy, creativity, and technology. Whether you’re looking to modernize your digital presence or build intelligent systems that drive efficiency, Stratger.ai is your trusted partner in achieving lasting business transformation.",
  points: [
    {
      title: "Technology That Drives Success",
      description:
        "Delivering cutting-edge digital solutions designed to accelerate your business growth.",
    },
    {
      title: "Innovation at Every Step",
      description:
        "We blend creativity and technology to build smarter, future-ready services.",
    },
    {
      title: "Built for Every Industry",
      description:
        "From startups to enterprises, our tailored solutions fit your unique business needs.",
    },
    {
      title: "Your Trusted Digital Partner",
      description:
        "Empowering brands worldwide with reliable, scalable, and results-driven services.",
    },
  ],
  backgroundImg: "/contact.webp",
};
export const SERVICES_SECTION = {
  headingParts: [
    {
      text: "End-to-End Digital Solutions ",
      className: "text-black font-bold",
    },
    {
      text: "That Drive Impact",
      className: "text-primary font-extrabold",
    },
  ],
  description:
    "At Stratger.ai, we help businesses bring their ideas to life through technology that makes a difference. Our approach is simple—we listen, plan, and build solutions that truly work for your goals. Whether it’s developing intelligent systems, modern software, or seamless digital experiences, we focus on creating value at every step. With a team that understands innovation and execution, we turn complex challenges into practical, high-performing solutions that help your business grow and stay ahead.",

  services: [
    {
      title: "Mobile App Development",
      icon: FaMobileAlt, // FontAwesome Icon (can be mapped later in component)
      description:
        "We design and develop mobile applications that are fast, scalable, and built to perform flawlessly across platforms. Our focus is on delivering intuitive user experiences that drive engagement and growth.",
    },
    {
      title: "Game Development Services",
      icon: FaGamepad,
      description:
        "From concept to launch, we create immersive, high-quality games that blend creativity with technology. Our team ensures every game delivers engaging gameplay, rich visuals, and seamless performance.",
    },
    {
      title: "AR/VR Development",
      icon: FaVrCardboard,
      description:
        "Bring ideas to life with immersive Augmented and Virtual Reality experiences. We craft interactive environments that captivate audiences and redefine how users connect with digital content.",
    },
    {
      title: "Cybersecurity Services",
      icon: FaShieldAlt,
      description:
        "Protect your digital assets with our advanced cybersecurity solutions. We provide robust defense strategies that safeguard your business from evolving cyber threats.",
    },
    {
      title: "Deep Learning Services",
      icon: FaBrain,
      description:
        "Unlock the power of AI with our deep learning expertise. We build intelligent models that help automate processes, enhance decision-making, and drive business efficiency.",
    },
    {
      title: "ERP Implementation Services",
      icon: FaNetworkWired,
      description:
        "Streamline your operations with our end-to-end ERP implementation services. We design and integrate customized systems that improve visibility, collaboration, and productivity across your organization.",
    },
  ],

  CTABtnText: "Get Started",
  CTABtnLink: "/contact", // Update as needed
};

export const SERVICES_CTA_SECTION = {
  heading:
    "Transform your vision into a future-ready solution with Stratger.ai.\n Together, we’ll shape what’s next.",
  CTABtnText: "Start Your Project",
  CTABtnLink: "/contact", // Update if different
};

export const SERVICES_ACHIEVEMENT_SECTION_DATA = {
  headingParts: [
    {
      text: "Recognitions That ",
      className: "font-bold ",
    },
    {
      text: "Reflect Our Commitment ",
      className: "text-primary font-extrabold",
    },
    {
      text: "to Excellence",
      className: "font-bold ",
    },
  ],

  desc: "At Stratger.ai, every recognition we earn is a reflection of our dedication to innovation, quality, and client success. These awards celebrate our continuous efforts to deliver impactful digital solutions that inspire growth and transformation. We’re grateful to our clients and partners who drive us to set higher standards and achieve new milestones in the world of technology.",
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

export const achievements = [
  {
    img: "/main/awards/best-game-dev.png",
    title: "Best Mobile App",
    rating: 4.8,
  },
  {
    img: "/main/awards/bma.png",
    title: "Best Game development award",
    rating: 4.9,
  },
  {
    img: "/main/awards/certificate-of-excellence.png",
    title: "Top 20 ERP APP development award",
    rating: 4.7,
  },
  {
    img: "/main/awards/erp-dev-award.png",
    title: "Certificate of Excellence",
    rating: 4.9,
  },
];
