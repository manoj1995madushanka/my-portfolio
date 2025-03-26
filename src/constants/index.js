import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  hospital,
  jobit,
  tripguide,
  threejs, unimanage, mailer, cqrs, arbook, datascience,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "AI Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "MadMobile",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023 - Now",
    points: [
      "Implement migration tool to migrate existing customers to MadMobile new menu platform",
      "Work with L3 support team to fix customer issues",
      "Implement front end logic to stock 86ing feature",
      "Implement front end functionality for provide activity logs feature to track changes done by users",
      "Implement tool for bulk import customers to our platform loyalty program from different loyalty program",
      "Implement Email marketing feature with schedule marketing campaign functionality with integrating sendgrid",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "HCL",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2023",
    points: [
      "Developed dashboard for bulk package tracking to FedEx",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Codegen",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2020 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Codegen",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2020 - September 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer - Intern",
    company_name: "Codegen",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2019 - February 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scheduled Mail Sender",
    description:
      "A node js script that can deploy as lambda function and trigger mail at given time",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "green-text-gradient",
      }
    ],
    image: mailer,
    source_code_link: "https://github.com/manoj1995madushanka/email-automator/tree/main",
  },
  {
    name: "Data Science Playground",
    description:
      "A course based tutorials done as learn machine learning algorithms and how those are implemented",
    tags: [
      {
        name: "jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    image: datascience,
    source_code_link: "https://github.com/manoj1995madushanka/pyton_for_data_science",
  },
  {
    name: "CQRS demo with kafka",
    description:
      "A course based project that demonstrate how to implement CQRS microservice with apache kafka",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "yellow-text-gradient",
      }
    ],
    image: cqrs,
    source_code_link: "https://github.com/manoj1995madushanka/kafka-cqrs-microservice",
  },
  {
    name: "Augmented Reality Book",
    description:
      "A book that tells story while scanning images developed using unity and vuforia plugin",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Vuforia",
        color: "yellow-text-gradient",
      }
    ],
    image: arbook,
    source_code_link: "https://github.com/manoj1995madushanka/ARBook",
  },
  {
    name: "Hospital Management System",
    description:
      "Web-based platform that allows doctor,admin and patient users to get information and manage hospital.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/manoj1995madushanka/hospital-management-system",
  },
  {
    name: "University Management System",
    description:
      "A simple university management system did as a university assignment",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Java Swing",
        color: "pink-text-gradient",
      },
    ],
    image: unimanage,
    source_code_link: "https://github.com/manoj1995madushanka/java-university-management-system/tree/master",
  },
];

export { services, technologies, experiences, testimonials, projects };
