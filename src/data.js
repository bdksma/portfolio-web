import HeroImage from "/assets/hero-img.webp";
import BudiImage from "/assets/budi-img.jpg";

const Image = {
  HeroImage,
  BudiImage,
};

export default Image;


import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Laravel.jpg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/c.png";
import Tools13 from "/assets/tools/php.png";
import Tools14 from "/assets/tools/mySQL.png";
import Tools15 from "/assets/tools/postgreSQL.png";
import Tools16 from "/assets/tools/postman.png";
import Tools17 from "/assets/tools/talend.png";
import Tools18 from "/assets/tools/xampp.png";
import Tools19 from "/assets/tools/matlab.png";
import Tools20 from "/assets/tools/cst.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Programming Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "C",
    ket: "Programming Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "PHP",
    ket: "Programming Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "mySQL",
    ket: "SQL Database",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "PostgreSQL",
    ket: "SQL Database",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Postman",
    ket: "API Testing",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Talend",
    ket: "Data Integration",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "XAMPP",
    ket: "Local Server",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Matlab",
    ket: "Mathematical Computing",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "CST Studio",
    ket: "Electromagnetic Simulation",
    dad: "2000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/Cisco Project.jpg";
import Proyek5 from "/assets/proyek/Recreating Kermadikti Website.jpg";
import Proyek6 from "/assets/proyek/C project.png";
import Proyek7 from "/assets/proyek/CST Studio Project.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Portfolio",
    desk: "This is my first portfolio website, built with HTML, CSS, and Javascript. It showcases my skills and projects.",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "Vite"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "HPS Website",
    desk: "This internship project is a website for HPS (Harga Perkiraan Sendiri) that I developed using Laravel and Bootstrap. It features a clean design and user-friendly interface.",
    tools: ["HTML", "CSS", "Javascript", "SQL", "Laravel", "Bootstrap"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "MITA Apps",
    desk: "This apps is a project for final exam of Bangkit Academy. It is a simple apps that can be used to prediction ASD for Children and becoming Top 50 Best Product Capstone.",
    tools: ["Machine Learning", "Python"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Cisco Packet Tracer Project",
    desk: "This is a project for final exam of Computer Network on semester 5. Make it with Cisco Packet Tracer and looking for the network topology and configuration.",
    tools: ["Cisco Packet Tracer", "Computer Network", "LAN", "WAN"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Recreating Kermadikti Website",
    desk: "This is a project for final exam of Web Programming and Database Managing on semester 4. Make it with HTML, CSS, PHP and Laravel and recreating Kermadikti website.",
    tools: ["HTML", "CSS", "Laravel", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Simple ATM Machine C Project",
    desk: "This is a simple ATM machine project made with C programming language. It allows users to perform basic banking operations like checking balance, withdrawing, and depositing money.",
    tools: ["C", "Visual Studio Code", "Programming"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "CST Studio Project",
    desk: "This is a project for final exam of Antena and Propagation on semester 5. Make it with CST STUDIO and looking for the desain and result VSWR and S-parameters.",
    tools: ["CST Studio"],
    dad: "800",
  },
];
