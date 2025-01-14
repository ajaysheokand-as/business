import { GiTakeMyMoney } from "react-icons/gi";
import { GiRoad } from "react-icons/gi";
import { MdOutlineEngineering } from "react-icons/md";
import { MdFireTruck } from "react-icons/md";

export const navbar = {
  logo: "/logo/mainLogo.png",
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
  hading: "Welcome to Design Line Dreams, Crafting Futures",
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
  { image: "project-photos/clients/clientOne.png" },
  { image: "project-photos/clients/clientTwo.png" },
  { image: "project-photos/clients/clientThree.png" },
  { image: "project-photos/clients/clientFour.png" },
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
  image: "/images/aboutLast1-min.jpg",
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
    text: "SDE , Prov. Sub Div. No. 4, PWD B&R Sonipat",
  },
  firstTwo: {
    image: "/images/img7.png",
    text: "SDE, Prov. Sub Div. No. 5 , Karnal",
  },
  SecondOne: {
    image: "/images/img10.avif",
    text: "Ex. Eng. Prov. Div.  PWD B&R Ch. Dadri",
  },
  SecondTwo: {
    image: "/images/img9.png",
    text: "sde, Provi. Sub. Divi.no II ,PWD B&R Br. Beri",
  },
  SecondThree: {
    image: "/images/img8.png",
    text: "SDE. Prov. Div. PWD B&R Mahendragarh",
  },
  thirdOne: {
    image: "/images/img11.png",
    text: "SDE. Prov. Div. PWD B&R Narnaul",
  },
  thirdTwo: {
    image: "/images/img12.png",
    text: "Ex. En. Provi. Div. PWD B&R Fatehabad",
  },
  fourthOne: {
    image: "/images/img13.png",
    text: "SDE. Prov. Div. PWD B&R Mahendragarh",
  },
  fourthTwo: {
    image: "/images/img14.png",
    text: "SDE. Prov. Div. PWD B&R Assandh",
  },
  fourthThree: {
    image: "/images/img15.png",
    text: "SDE, Provi, ub Div. no. 4, PWD B&R Branch , HISAR",
  },
};

export const BoardOfDirectors = [
  {
    src: "/project-photos/DirectorOne.png",
    text: `MANAGING DIRECTOR OF THE FIRM Mr. Ajay Kundu`,
    alt: `Road Safety Certificate: Mualana Azad National Institute of Technology,
Bhopal.
Ajay kundu is registered as an Engineer in HSVP for the purpose of
undertaking the work of designing of any private building in the urban
estates of Haryana.
He has professional experience in the field of Civil Engineering in the
execution of major highway projects of international standards including
various other infrastructure projects, Public Health Engineering, Building
and Roads. Excellent experience in the planning and execution of
earthwork in embankment and sub grade, granular sub-base, wet mix
macadam and bituminous courses. Well conversant with IRC standards,
FIDIC guide-lines, MORTH specifications and all technical specifications
involved in the construction of highways & Structures and testing of
materials in accordance with IRC/ MOST standards.`,
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
      address: "info@dlcsgroup.in",
      icon: "fas fa-envelope",
    },
    {
      text: "Call Us",
      address: "7015511801",
      icon: "fas fa-phone",
    },
    {
      text: "Registered office",
      address: `DSS71, Huda Market, Sector 15A, Hisar (125001)`,
      icon: "fas fa-map-marker-alt",
    },
    {
      text: "Corporate Identification Number",
      address: "www.dlcs.org.in",
      icon: "fa-solid fa-passport",
    },
  ],
  image: "/images/file.png",
  formHading:
    "Add your information here, and our team will get in touch with you",
};

export const aboutData = {
  sectionFirst: {
    img: "images/about1-min.jpg",
    title: "ABOUT US",
    hading: "Reliable Construction Solutions for Every Need",
  },
  sectionSecond: {
    img: "images/about2-min.jpg",
    hading: "A Legacy of Excellence",
    title: `Design Line Private Limited is a Private company incorporated on 18 January 2022. It is classified as Non-government company and is registered at Registrar of Companies, Delhi. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 900,670.`,
  },
  sectionThird: [
    {
      img: "/images/employee1-min.jpg",
      title: "Marco Jansen",
      desc: "Structural modeling and analysis.",
    },
    {
      img: "/images/employee2-min.jpg",
      title: "Hanaya Maries",
      desc: "Project scheduling (e.g., Gantt charts).",
    },
    {
      img: "/images/employee3-min.jpg",
      title: "Jashan Deep",
      desc: "BIM (Building Information Modeling) integration.",
    },
    {
      img: "/images/employee4-min.jpg",
      title: "Michel Wann",
      desc: "Cost estimation and budget tracking.",
    },
  ],
  sectionFourth: {
    img: "images/aboutLast1-min.jpg",
    title: "About Design Line Construction",
    hading:
      "Design Line Construction is a trusted name in the construction industry, known for delivering excellence in every project. With years of experience and a commitment to innovation, KMR Construction specializes in providing high-quality residential, commercial, and industrial construction services.",
  },
};

export const footerData = {
  company: "Design Line",
  subscribe: "Subscribe To Our Newsletter :",
  paragraph: "Improving people's futures through building infrastructure",
  footer: "Design Line | Copyright © 2025 | All Rights reserved",
  icon: [
    "fas fa-globe",
    "fab fa-linkedin",
    "fab fa-instagram",
    "fab fa-facebook",
  ],
};
