export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinod Mali",
  jobTitle: "Software Engineer Intern",
  url: "https://yourportfolio.com",
  sameAs: [
    "https://www.linkedin.com/in/vinodmali01/",
    "https://github.com/vm21242124",
  ],
  worksFor: {
    "@type": "Organization",
    name: "BBD Software",
  },
  knowsAbout: ["React", "Node", "JavaScript", "Microservices", "AWS"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Your University",
  },
};
export const resumeUrl =
  "https://drive.google.com/file/d/1j4Y6LB62Jk01kO3aO6Y52yNZzwCI6XKV/view?usp=sharing";

export const gridItems = [
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "smart EV Charging System",
    des: "EV charging system for charging station and EV Owner.",
    img: "/smartev.png",
    skillused: ["HTML/CSS", "JavaScript", "MySql", "SpringBoot"],
    link: "https://github.com/vinodmalibbd",
    buttons: [
      {
        name: "github",
        link: "https://github.com/vinodmalibbd",
      },
      // {
      //   name:"live",
      //   link: "https://charge-ev.bbdgrad.projects.com",
      // },
      {
        name: "demo",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7094546597606248450/",
      },
    ],
  },
  {
    id: 2,
    title: "ReadMe - generator App",
    des: "Readme generator and downloader React app",
    img: "/readme.png",
    skillused: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/vinodmalibbd",
    buttons: [
      {
        name: "github",
        link: "https://github.com/vm21242124/ReadMeGenerator",
      },
      {
        name: "live",
        link: "https://yourreadme.vercel.app",
      },
      // {
      //   name:"demo",
      //   link: "https://github.com/vm21242124/ReadMeGenerator",
      // }
    ],
  },
  {
    id: 3,
    title: "NeetCode - Coding platform",
    des: "created neetcode platform to solve dsa problem and create problems.",
    img: "/neetcode.png",
    skillused: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/vinodmalibbd",
    buttons: [
      {
        name: "github",
        link: "https://github.com/vm21242124/neetcode-frontend",
      },
      {
        name: "demo",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7094546597606248450/",
      },
    ],
  },
  {
    id: 4,
    title: "Vercel - react app deployer",
    des: "created a app to deploy and run your production ready react app",
    img: "/p4.svg",
    skillused: ["React", "Node", "Express", "MongoDB", "AWS"],
    link: "https://github.com/vinodmalibbd",
    buttons: [
      {
        name: "github",
        link: "https://github.com/vm21242124/vercel",
      },
      // {
      //   name:"live",
      //   link: "https://github.com/vinodmalibbd",
      // },
      // {
      //   name:"demo",
      //   link: "https://github.com/vinodmalibbd",
      // }
    ],
  },
];

export const testimonials = [
  {
    quote:
      "I have had the pleasure of working with Vinod, a passionate software engineer who consistently goes above and beyond to deliver high-quality work. His dedication to his craft is evident in the way he tackles complex challenges and diligently completes every task he takes on. Vinod's ability to quickly learn new technologies and concepts is impressive, and his curiosity drives him to constantly expand his skill set.\n One of Vinod's standout qualities is his openness to feedback. He listens attentively and seamlessly integrates suggestions into his work, continuously improving and refining his skills. Beyond his technical abilities, Vinod is a humble and down-to-earth individual. He communicates effectively, ensuring that everyone on the team is on the same page.",
    name: "Akshay Deole",
    img: "/akshay.png",
    title: "Tech Lead at BBD Software",
  },
  {
    quote:
      "Vinod is a passionate software engineer who often goes to great lengths to deliver tickets. He is also a fast learner and a curious person who has a skill for listening and adapting feedback into his work. He is also a humble person, a good communicator and a time conscious developer, making him a wonderful teammate to work with.",
    name: "Benedict Dube",
    img: "/benedict.png",
    title: "Software Engineer at BBD Software",
  },
  {
    quote:
      "Vinod is an exception developer and goes an extra mile to reach his goals. He's committed, willing to learn and a Team player. I recommend him to any Team.\nContinue being exceptional Vinod…",
    name: "Arthur Sibanyoni",
    img: "/arthur.png",
    title: "Scrum Master at Vodacom",
  },
  {
    quote:
      "I had the pleasure of leading Vinod during his six-month internship with our team. He quickly became a valuable contributor, showcasing strong skills in React.js, Node.js, and AWS.\n Vinod was proactive in taking on challenging tasks, delivering high-quality work, and effectively collaborating with the team.\n His eagerness to learn and ability to adapt made a significant impact on our projects.\n I am confident he will excel in any future role he takes on.",
    name: "Krunal Parmar",
    img: "/krunal.png",
    title: "Tech Lead at BBD Software",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
   {
    id: 1,
    title: "Software Developement Engineer 1",
    desc: "• Developed Vigilhawklabs to manage critical cybersecurity tasks, including incident tracking, ticketing system like Jira, and compliance management system.\n • Designed and implemented a compliance module in Node.js from scratch and migrated to Spring Boot for security purposes, onboarded regulatory frameworks such as RBI, SEBI, ISO, and IRDA.\n • Built and integrated an incident tracking module with CrowdStrike to monitor incidents on networks and endpoints using API keys.\n • Added email notifications and user notifications for incident assignments and SLA breaches to ensure timely updates.\n • Implemented a Pub/Sub architecture with Valky (Redis) for caching, notification emails, and syncing databases, ensuring efficient communication and consistency across systems.\n • Migrated the codebase from Node.js to Spring Boot to enhance security and system robustness.\n • Implemented cron jobs to automate and efficiently manage premium services.\n • Utilized PostgreSQL and MongoDB for reliable data storage, incorporating features such as auditing, logging, and API key management to support secure and seamless incident creation.\n • Implemented the deployment process from scratch for on-premises setup for clients with Docker and Nginx.\n • Integrated tools like Prometheus, Kibana, Swagger, and Grafana for live monitoring, timely alerts, visualizing system performance, and enhancing observability and management.",
    className: "md:col-span-1",
    thumbnail: "/amazure.png",
  },
    {
    id: 2,
    title: "Software Engineer",
    desc: "• Contracted by Vodacom to collaborate on the Business Portal team, I contributed to microservices built with React, Node.js, and Spring Boot, while learning CI/CD processes and tools for efficient deployment and integration.\n • Troubleshot and monitored Kubernetes clusters with Prometheus, Grafana, and Kibana.\n • Hands-on experience working with CI/CD pipelines using TeamCity, UrbanCode, and GitLab CI.\n • Developed frontend applications with React and styled-components, enhancing UI/UX.\n • Migrated one whole frontend journey from Angular to React.\n • Contributed to core libraries for frontend repositories, improving code reuse.",
    className: "md:col-span-1",
    thumbnail: "/vodacom.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    desc: "Joined as intern to learn full stack skills",
    className: "md:col-span-1",
    thumbnail: "/bbd.svg",
  }

 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/vm21242124",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.linkedin.com/in/vinodmali01/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vinodmali01/",
  },
];
