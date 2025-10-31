export const ENTERPRISE_HERO_SECTION = {
  headingParts: [
    {
      text: "Top-Tier ",
      className: "text-primary font-extrabold",
    },
    {
      text: "Enterprise App ",
      className: "font-bold",
    },
    {
      text: "Development Company",
      className: "text-primary font-extrabold",
    },
  ],

  content:
    "With over two decades of expertise, we craft intelligent, scalable, and secure enterprise applications that drive digital transformation.\n\n" +
    "Our team specializes in building custom solutions powered by AI, IoT, and cloud technologies, helping businesses enhance efficiency, streamline operations, and achieve measurable growth.\n\n" +
    "Having delivered 240+ successful projects across 40+ industries, we’re your trusted partner for creating everything from employee productivity tools to customer engagement platforms and mission-critical enterprise systems.",

  stats: [
    {
      stat: 90,
      symbol: "%",
      desc: "Boost Operational Efficiency",
    },
    {
      stat: 60,
      symbol: "%",
      desc: "Reduce IT Costs",
    },
    {
      stat: 99.9,
      symbol: "%",
      desc: "Uptime Achieved",
    },
    {
      stat: 4.9,
      symbol: "/5",
      desc: "Average Client Rating",
    },
  ],

  // CTABtnLink: "/",
  CTAButton: "Let’s Build Your Enterprise App",
  bannerImg: "/industries/enterprise/enterprice.webp", // You can replace this with an enterprise-specific banner if needed
};

import {
  FaUserTie,
  FaCogs,
  FaLock,
  FaRegSmile,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";

export const ENTERPRISE_SERVICES_SECTION = {
  headingParts: [
    {
      text: "Why Choose Our ",
      className: "text-primary font-extrabold",
    },
    {
      text: "Enterprise Mobile App ",
      className: "font-bold",
    },
    {
      text: "Development Service?",
      className: "text-primary font-extrabold",
    },
  ],
  description:
    "Selecting the right enterprise app development partner is key to driving innovation and long-term digital success. As a trusted enterprise mobile app development company, we build secure, scalable, and intelligent applications that help organizations streamline operations, boost productivity, and accelerate business growth.",
  services: [
    {
      icon: FaUserTie,
      title: "Proven Enterprise Expertise",
      desc: "Our experienced team collaborates closely with CIOs, CTOs, and business leaders to understand your unique challenges and goals. We design custom enterprise app solutions that align with your digital strategy, improve workflows, and deliver measurable ROI.",
    },
    {
      icon: FaCogs,
      title: "Tailored Digital Solutions",
      desc: "No two enterprises are the same. That’s why we focus on developing custom enterprise mobile apps designed to fit your specific business ecosystem. From automating operations to empowering employees, our solutions are built to enhance performance and eliminate inefficiencies.",
    },
    {
      icon: FaLock,
      title: "Security You Can Trust",
      desc: "We integrate enterprise-grade security at every stage of development. With advanced encryption, multi-factor authentication, and compliance with GDPR, HIPAA, and ISO standards, your data and reputation remain fully protected.",
    },
    {
      icon: FaRegSmile,
      title: "Seamless User Experience (UI/UX)",
      desc: "We believe enterprise software should be powerful yet effortless to use. Our design-first approach ensures every app delivers a simple, intuitive experience—making it easy for teams to stay productive and engaged.",
    },
    {
      icon: FaSyncAlt,
      title: "Agile & Impact-Driven Development",
      desc: "Our iterative development process focuses on outcomes that drive real business value. Through every sprint and release, we ensure your enterprise apps are scalable, efficient, and aligned with evolving market needs.",
    },
    {
      icon: FaTools,
      title: "Reliable Support & Performance",
      desc: "We don’t just build apps—we help you maintain excellence. Our proactive maintenance and support ensure your applications run smoothly, delivering high performance and uptime, even during demanding enterprise operations.",
    },
  ],
  CTABtnText: "Get free consultancy",
  CTABtnLink: "/",
};

export const CTA_ENTERPRISE_SECTION = {
  heading:
    "Transform your enterprise with intelligent, secure, and scalable app solutions.",
  description: "",
  CTABtnText: "Get free consultancy",
  // CTABtnLink: "/",
  stats: [
    {
      stat: 55,
      symbol: "%",
      desc: "Boost operational efficiency",
    },
    {
      stat: 37,
      symbol: "%",
      desc: "Reduce IT costs",
    },
    {
      stat: 99.9,
      symbol: "%",
      desc: "Uptime Achieved",
    },
    {
      stat: 4.9,
      desc: "Average Client Rating",
    },
  ],
};

import { FaIndustry, FaHandshake, FaGraduationCap } from "react-icons/fa";

export const ENTERPRISE_APPS_SECTION = {
  headingParts: [
    {
      text: "Types of Enterprise & Corporate ",
      className: "text-primary font-extrabold",
    },
    { text: "Apps We Develop", className: "font-bold" },
  ],
  description:
    "As a leading enterprise app development company, we deliver tailored digital solutions that help organizations innovate, automate, and scale. Our enterprise app development services focus on building intelligent, secure, and performance-driven apps that enhance decision-making, productivity, and long-term business growth.",
  apps: [
    {
      icon: FaIndustry,
      title: "ERP Applications",
      desc: "Our custom ERP software solutions act as a centralized system for managing your core business operations, finance, procurement, inventory, and supply chain. By streamlining workflows and providing real-time data insights, we help enterprises reduce costs, eliminate manual errors, and improve operational efficiency.",
      img: "/services/mobile/mobile.png",
    },
    {
      icon: FaHandshake,
      title: "CRM Applications",
      desc: "We design enterprise-grade CRM applications that empower businesses to manage customer relationships seamlessly. From lead tracking and workflow automation to performance analytics, our CRM systems improve collaboration between sales and support teams, resulting in stronger engagement and higher conversions.",
      img: "/services/mobile/mobile.png",
    },
    {
      icon: FaGraduationCap,
      title: "Learning Management Systems (LMS)",
      desc: "Our corporate learning management systems simplify employee training and professional development. With built-in features for content creation, progress tracking, and certification management, we enable enterprises to upskill their teams, increase productivity, and foster a culture of continuous learning.",
      img: "/services/mobile/mobile.png",
    },
    {
      icon: FaUserTie,
      title: "HR Management Applications",
      desc: "Through our custom HR app development services, we create comprehensive solutions to manage recruitment, onboarding, payroll, and performance evaluation, all in one place. These intelligent systems streamline HR operations, improve employee engagement, and ensure data accuracy across your workforce ecosystem.",
      img: "/services/mobile/mobile.png",
    },
  ],
};

export const ENTERPRISE_APP_FAQ_SECTION = {
  headingParts: [
    { text: "Enterprise ", className: "text-primary font-extrabold" },
    { text: "App Development ", className: "font-bold" },
    { text: "FAQs", className: "text-primary font-extrabold" },
  ],
  faqs: [
    {
      question: "How Long Does It Take to Build an Enterprise Application?",
      answer:
        "Depending on complexity and features, enterprise app development can take 3–6 weeks for simple solutions and up to 12 months for complex ones. Our agile approach ensures faster delivery, continuous improvements, and on-time launches.",
    },
    {
      question: "What Are the Four Major Types of Enterprise Applications?",
      answer:
        "The main types include ERP, CRM, SCM, and BI systems, each designed to streamline operations, enhance decision-making, and boost overall business efficiency.",
    },
    {
      question:
        "What Are the Challenges of Enterprise Application Development?",
      answer:
        "Key challenges include data security, scalability, and legacy system integration. Our experts address these with strategic planning, modern architecture, and enterprise-grade security.",
    },
    {
      question:
        "What Sets Us Apart from Other Enterprise Mobile App Development Companies?",
      answer:
        "We go beyond coding, offering consultative strategy, scalability, and secure solutions tailored to your business goals, ensuring long-term value and digital success.",
    },
  ],
};
