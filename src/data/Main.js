import { GiTakeMyMoney } from "react-icons/gi";
import { GiRoad } from "react-icons/gi";
import { MdOutlineEngineering } from "react-icons/md";
import { MdFireTruck } from "react-icons/md";

export const navbar = {
  logo: "/images/file (2).png",
  // text: "GAWAR",
  // smText: "Construction Limited",
  navLink: [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Project", path: "/project" },
    { text: "Board of Directors", path: "/BoardOfDirectors" },
  ],
};

// main section

export const mainSection = {
  hading: "Welcome to KMR Building Dreams, Crafting Futures",
  paragraph:
    "A leading force in the development of expressways, bridges, and tunnels across India.",
  image: "images/main1.jpg",
  video: "/video/Sequence-01_1.mp4",
  btnText: "Know more",
};
export const overResult = {
  MainHading: "Our achievements, measured in numbers.",
  image: "/images/road-4.jpeg",
  hading: "HAM Projects",
  val: "25+",
  statsData: [
    { title: "Order book", value: 16000, icon: <GiTakeMyMoney /> },
    { title: "Lane Km", value: 12000, icon: <GiRoad /> },
    { title: "Employee's", value: 2000, icon: <MdOutlineEngineering /> },
    { title: "Fleet size", value: 2000, icon: <MdFireTruck /> },
  ],
};

/* clients component data*/
export const clients = [
  { image: "images/logo1.jpg" },
  { image: "images/logo2.jpg" },
  { image: "images/logo3.jpg" },
  { image: "images/logo4.jpg" },
];

// project component Data
export const projectsDetails = {
  paragraph: `Roadway Planning or Modifications: Are you designing or modifying an interchange or similar infrastructure?`,
  moreProject: "See more projects coming to the portfolio",
  btn: "Pipeline",
  title: "Modern Office Building",
  location: "Hisar Haryana India",
  client: "Real Estate ltd.",
  completionDate: "January 2025",
  image: "/images/aboutLast1.jpg",
  description: `Are you integrating housing, commercial areas, or recreational spaces?
Feasibility Study: Is this for traffic flow optimization or land use assessment?`,
  features: [
    "Upgrading roads or bridges for modern traffic demands.",
    "Smart Building Technology",
    "Sustainable Materials Used",
    "Over 100,000 sq ft of Space",
  ],
};
export const projects = {
  firstOne: {
    image: "/images/img6.webp",
    text: "Dulte - Kwalkulh Road (International Corridor) of NH-6",
  },
  firstTwo: {
    image: "/images/img7.png",
    text: "Bikaner Suratgarh National Highway-15",
  },
  SecondOne: {
    image: "/images/img10.avif",
    text: "Four lane Badarpur Bypass National Highway-6",
  },
  SecondTwo: {
    image: "/images/img9.png",
    text: "Gawar Kiratpur Nerchowk Highway Pvt Ltd",
  },
  SecondThree: {
    image: "/images/img8.png",
    text: "Dewas Ujjain Highway Pvt Ltd",
  },
  thirdOne: {
    image: "/images/img11.png",
    text: "Bikaner Suratgarh National Highway-15",
  },
  thirdTwo: {
    image: "/images/img12.png",
    text: "Four lane Badarpur Bypass National Highway-6",
  },
  fourthOne: {
    image: "/images/img13.png",
    text: " Hardiya Hasanpur Highway Pvt Ltd",
  },
  fourthTwo: {
    image: "/images/img14.png",
    text: "Dulte - Kwalkulh Road (International Corridor) of NH-6",
  },
  fourthThree: {
    image: "/images/img15.png",
    text: "  Dewas Ujjain Highway Pvt Ltd",
  },
};

export const BoardOfDirectors = [
  {
    src: "images/CEO.jpg",
    text: `Alexandra Alex Morgan  CEO & Founder`,
    alt: "Alexandra Morgan is a visionary leader and the CEO of Morgan & Co. Construction. With over 20 years of experience in the industry, she founded the company with a commitment to transforming the way buildings are designed and built. Her keen eye for innovation, coupled with her deep understanding of structural integrity, has propelled the company into new markets. Under Alex’s leadership, Morgan & Co. has consistently delivered high-quality projects, from residential complexes to large-scale commercial properties. Her passion for sustainable construction practices and her dedication to community-building make her a respected figure in the industry.",
  },
  {
    src: "images/2nd.jpg",
    text: `David Tran – Chief Operations Officer (COO)`,
    alt: "David Tran is the Chief Operations Officer at Tran Construction Group and has been with the company for over 15 years. Known for his exceptional leadership skills and hands-on approach, David oversees the day-to-day operations of the company. He ensures that every project is executed on time, within budget, and up to the highest standards. David’s background in engineering and logistics has allowed him to implement cutting-edge technologies to streamline construction processes. His ability to manage large teams and multiple projects simultaneously has earned him a reputation as a strategic and effective leader.",
  },
  {
    src: "images/3rd.jpg",
    text: ` Sophie Lopez – Director of Project Development`,
    alt: " Sophie Lopez is the Director of Project Development at Lopez Builders. With a background in architecture and urban planning, Sophie brings a creative and detail-oriented approach to every project. She specializes in large-scale residential developments and commercial spaces that combine functionality with aesthetic appeal. Sophie’s commitment to delivering projects that meet both client expectations and environmental standards has helped position Lopez Builders as a leader in sustainable construction practices. Her innovative mindset and hands-on experience have contributed to the company’s rapid growth and success in competitive markets.",
  },
  {
    src: "images/4th.jpg",
    text: `James "Jim" Carter – Chief Financial Officer (CFO)`,
    alt: "James Carter is the Chief Financial Officer at Carter & Sons Construction, where he has been an integral part of the leadership team for over a decade. With a background in corporate finance and construction management, Jim ensures the financial health and sustainability of the company. He oversees budgeting, forecasting, and financial strategy to support the company’s growth and long-term goals. Jim’s ability to analyze market trends, manage risks, and optimize resource allocation has been crucial in maintaining profitability while expanding the company’s reach. His no-nonsense approach to financial planning and his ability to navigate the complexities of the construction industry make him a key player in the company's success.",
  },
];

export const ContactUsData = {
  img: "images/Isolation_Mode-1.png",
  text: "Contact Us",
  coffee: " Coffee with our experts?",
  address: [
    {
      text: "Email Us",
      address: "kmrbuildcon40@gmail.com",
      icon: "fas fa-envelope",
    },
    {
      text: "Call Us",
      address: "9813538000 , 8930829000",
      icon: "fas fa-phone",
    },
    {
      text: "Registered office",
      address:
        "Shop no. 102, New Auto Market, Phase-3, Near Gate no. 3, Hisar-125001, Haryana",
      icon: "fas fa-map-marker-alt",
    },
    {
      text: "Corporate Identification Number",
      address: "CIN - U45309HR2022PTC100609",
      icon: "fa-solid fa-passport",
    },
  ],
  image: "/images/file.png",
  formHading:
    "Add your information here, and our team will get in touch with you",
};

export const aboutData = {
  sectionFirst: {
    img: "images/about1.jpg",
    title: "ABOUT US",
    hading: "Reliable Construction Solutions for Every Need",
  },
  sectionSecond: {
    img: "images/about2.jpg",
    hading: "A Legacy of Excellence",
    title: `Kmr Buildcon Private Limited is a Private company incorporated on 18 January 2022. It is classified as Non-government company and is registered at Registrar of Companies, Delhi. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 900,670.`,
  },
  sectionThird: [
    {
      img: "/images/employee1.jpg",
      title: "Marco Jansen",
      desc: "Structural modeling and analysis.",
    },
    {
      img: "/images/employee2.jpg",
      title: "Hanaya Maries",
      desc: "Project scheduling (e.g., Gantt charts).",
    },
    {
      img: "/images/employee3.jpg",
      title: "Jashan Deep",
      desc: "BIM (Building Information Modeling) integration.",
    },
    {
      img: "/images/employee4.jpg",
      title: "Michel Wann",
      desc: "Cost estimation and budget tracking.",
    },
  ],
  sectionFourth: {
    img: "images/aboutLast1.jpg",
    title: "About KMR Construction",
    hading:
      "KMR Construction is a trusted name in the construction industry, known for delivering excellence in every project. With years of experience and a commitment to innovation, KMR Construction specializes in providing high-quality residential, commercial, and industrial construction services.",
  },
};

export const footerData = {
  company: "KMR Corp.",
  subscribe: "Subscribe To Our Newsletter :",
  paragraph: "Improving people's futures through building infrastructure",
  footer: "KMR | Copyright © 2025 | All Rights reserved",
  icon: [
    "fas fa-globe",
    "fab fa-linkedin",
    "fab fa-instagram",
    "fab fa-facebook",
  ],
};
