import {
  FaTools,
  FaUsersCog,
  FaUserSecret,
  FaUserShield,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiRadarDish } from "react-icons/gi";
import { BsClipboardCheck } from "react-icons/bs";
import { RiSchoolLine } from "react-icons/ri";
import { AiOutlineLock } from "react-icons/ai";
import { MdCloudDone } from "react-icons/md";

export const CYBERSECURITY_BANNER_SECTION = {
  headingParts: [
    { text: "Stay Ahead", className: "text-primary font-extrabold" },
    { text: "of Cybercrime", className: "text-primary font-extrabold" },
    { text: "—Secure Your Business Today!", className: "font-bold" },
  ],
  content:
    "As a trusted cyber security solution provider, we help businesses safeguard their most valuable asset—data. Our team of certified experts delivers tailored cybersecurity IT services designed to protect you from evolving digital threats.\n\nNo matter where your business expands or who you collaborate with, we proactively identify vulnerabilities, deploy strategic defense mechanisms, and predict potential risks before they strike. From risk mitigation to asset protection, we ensure your operations remain secure, compliant, and uninterrupted.\n\nPartner with us to build resilience against cybercrime and grow with confidence in the digital age.",
  CTABtnText: "Let's Connect",
  CTABtnLink: "/",
  bannerImg: "", // add image path when available
  img: "",
};

export const CYBERSECURITY_SERVICES_SECTION = {
  headingParts: [
    { text: "Stay Ahead", className: "text-primary font-extrabold" },
    { text: "of Cybercrime", className: "text-primary font-extrabold" },
    { text: "—Secure Your Business Today!", className: "font-bold" },
  ],
  desc: "At Strateger AI, we go beyond traditional protection by delivering intelligent, adaptive defenses that evolve with today’s digital threats. Trusted by businesses across the USA, UK, Canada, the Middle East, and Australia, we empower organizations to safeguard sensitive data, secure operations, and maintain customer trust. Our Zero-Trust framework, combined with AI-driven technologies and expert oversight, ensures that every endpoint, network, and cloud environment stays protected.",
  services: [
    {
      icon: FaUserSecret, // FontAwesome – Ethical Hacking
      iconLib: "react-icons/fa",
      title: "Penetration Testing",
      desc: "We simulate real-world cyberattacks to uncover vulnerabilities before hackers do. Our experts provide detailed remediation strategies to strengthen your security posture.",
    },
    {
      icon: MdCloudDone, // Material Design – Cloud Security
      iconLib: "react-icons/md",
      title: "Cloud Security",
      desc: "Strateger AI secures your cloud infrastructure with advanced monitoring, encryption, and compliance controls. We ensure your data and applications stay protected across multi-cloud environments.",
    },
    {
      icon: AiOutlineLock, // Ant Design – Data Security
      iconLib: "react-icons/ai",
      title: "Data Security",
      desc: "We safeguard sensitive business data through encryption, access control, and continuous monitoring. Our solutions protect your information from leaks, theft, and unauthorized access.",
    },
    {
      icon: RiSchoolLine, // Remix Icons – Training
      iconLib: "react-icons/ri",
      title: "Training Services",
      desc: "Our cybersecurity training programs empower your team with the knowledge to detect, prevent, and respond to threats. We provide practical, role-based learning tailored to your organization.",
    },
    {
      icon: BsClipboardCheck, // Bootstrap Icons – Audit
      iconLib: "react-icons/bs",
      title: "Audit Services",
      desc: "We conduct comprehensive cybersecurity audits to assess risks, compliance gaps, and system vulnerabilities. Our reports guide you toward stronger defenses and regulatory alignment.",
    },
    {
      icon: GiRadarDish, // Game Icons – Monitoring/Detection
      iconLib: "react-icons/gi",
      title: "Managed Security Services Provider",
      desc: "As your MSSP partner, Strateger AI delivers 24/7 monitoring, threat detection, and incident response. We act as your extended security team, ensuring nonstop protection.",
    },
    {
      icon: HiOutlineLightBulb, // HeroIcons – Consulting/Strategy
      iconLib: "react-icons/hi",
      title: "Cybersecurity Consulting",
      desc: "We provide strategic cybersecurity consulting to align technology with business goals. From policy design to risk management, our experts help you build a resilient security framework.",
    },
  ],
  CTABtnText: "Get Your Tailored Services Today ",
  CTABtnLink: "/",
};

import { FaTags } from "react-icons/fa";
import { GiLockedChest } from "react-icons/gi";
import { MdGavel } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const WHAT_MATTER_MOST_SECTION = {
  headingParts: [
    { text: "Strateger AI", className: "text-primary font-extrabold" },
    { text: "Protects", className: "text-primary font-extrabold" },
    { text: "What Matters Most", className: "font-bold" },
  ],
  desc: "At Strateger AI, we don’t just defend against cyber threats, we enable businesses to grow with confidence. Our proven expertise, innovative mindset, and people-first culture make us a reliable partner in building a secure digital future.",
  services: [
    {
      icon: FaTags,
      title: "Save Up to 50%",
      desc: "Secure your business before a cyber threat strikes. Take advantage of our limited-time offer and save up to 50% on all IT and cybersecurity solutions, while experiencing 8x faster incident response and uninterrupted protection for your digital assets.",
    },
    {
      icon: GiLockedChest,
      title: "Zero-Trust Security Framework",
      desc: "With our Zero-Trust Security model, every access request to your systems is verified, authenticated, and authorized—ensuring no internal or external breach goes unchecked. Stay ahead of cybercriminals with a security-first approach built for modern enterprises.",
    },
    {
      icon: MdGavel,
      title: "Compliance with Global Security Standards",
      desc: "We strictly follow OWASP Top 10 and leading cybersecurity compliance standards to deliver proactive, industry-aligned protection. Our experts identify vulnerabilities early and implement strategic defense measures to keep your organization secure and compliant.",
    },
    {
      icon: RiShieldUserLine,
      title: "Proactive Cyber Defense Team",
      desc: "Our cyber defense specialists provide continuous monitoring, threat mitigation, and risk management for individuals and businesses alike. We build resilient infrastructures that detect and neutralize threats before they impact your operations.",
    },
    {
      icon: AiOutlineThunderbolt,
      title: "Advanced & Dynamic Security Technologies",
      desc: "Empowered by next-gen tools like OWASP® Zed Attack Proxy (ZAP) and automated penetration testing, we strengthen your IT ecosystem against evolving cyber threats—ensuring round-the-clock network security and peace of mind.",
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
      question:
        "What Types of Cybersecurity Services Does Strateger AI Provide?",
      answer:
        "Strateger AI offers end-to-end cybersecurity services including penetration testing, cloud security, data protection, managed security (MSSP), consulting, training, and compliance audits. Our solutions are customized to fit your business needs, no matter the industry.",
    },
    {
      question:
        "Why Should I Outsource Cybersecurity Services Instead of Building an In-House Team?",
      answer:
        "Outsourcing to Strateger AI gives you access to certified experts, advanced tools, and 24/7 monitoring without the overhead costs of maintaining an in-house team. This allows you to focus on growth while we handle your security.",
    },
    {
      question:
        "How Does Strateger AI Protect My Business from Emerging Cyber Threats?",
      answer:
        "We adopt a Zero-Trust security model, leverage AI-driven threat intelligence, and provide proactive monitoring. Our team not only identifies and mitigates risks but also anticipates new attack vectors to keep your business ahead of hackers.",
    },
    {
      question:
        "Can Strateger AI Help My Company Meet Compliance Requirements?",
      answer:
        "Yes. Our cybersecurity consulting and audit services ensure that your business complies with global standards such as GDPR, HIPAA, ISO 27001, and more. We help you stay compliant while reducing the risk of penalties.",
    },
    {
      question: "Is Cybersecurity Only Necessary for Large Enterprises?",
      answer:
        "Not at all. Small and medium-sized businesses are just as vulnerable, often even more targeted because of limited defenses. Strateger AI provides scalable cybersecurity solutions designed to protect businesses of all sizes.",
    },
  ],
};

export const HOW_TO_COLLAB_DATA = {
  headingParts: [
    {
      text: "Experienced a Security Alert?  \n",
      className: " font-extrabold tex",
    },
    { text: "Hire Us to Build", className: "font-bold" },
    { text: "Your Defense", className: "font-extrabold" },
  ],
  definition:
    "We offer flexible cybersecurity collaboration models tailored to your business goals.",
  models: [
    {
      title: "Staff Augmentation",
      description:
        "Scale your security capabilities with our certified experts who integrate directly with your internal teams. Ideal for short-term or specialized needs.",
      icon: FaUserShield, // FontAwesome icon (react-icons/fa)
    },
    {
      title: "Dedicated Security Team",
      description:
        "A fully managed security team that works exclusively on your infrastructure, providing 24/7 monitoring, incident response, and threat hunting.",
      icon: FaUsersCog, // FontAwesome icon (react-icons/fa)
    },
    {
      title: "Product Development",
      description:
        "From secure architecture to threat modeling, we design and build cybersecurity products or secure features tailored to your solution.",
      icon: FaTools, // FontAwesome icon (react-icons/fa)
    },
  ],
  CTABtnLink: "/",
  CTABtnText: "Get Started",
};
