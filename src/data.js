import leafifyImage from "./assets/leafify.png";
import cashflowImage from "./assets/cashflow.png";
import cleanImage from "./assets/clean.png";
import pathFinderImage from "./assets/path_finder.png";
import hydroImage from "./assets/hydro.png";

export const portfolioData = {
  site: {
    name: "Abdullah Al Nahian",
    brand: "A.A. NAHIAN",
    title: "Abdullah Al Nahian",
    location: "Dhaka, Bangladesh",
    role: "Computer science undergraduate working across mobile apps, IoT, and robotics.",
    bio: "I like taking a system apart to see how it actually works, then rebuilding it cleaner — whether that's a Flutter app's architecture or a hydroponic rig's control loop. Most of what I ship sits at the point where software meets hardware.",
    resumeUrl: "./assets/resume_v1.1.0.pdf",
    email: "nahianbusi@gmail.com",
    github: "https://github.com/naahian",
    linkedin: "https://www.linkedin.com/in/abdullah-al-nahian-3286841b1/",
<<<<<<< HEAD
    version: "v2.0.0",
=======
    version: "v2.0.2",
>>>>>>> 3b10aad (updated skills and porject links)
    copyright: "© 2026 Abdullah Al Nahian"
  },
  profile: [
    ["Coding since", "2016"],
    ["Projects shipped", "6+"],
    ["Primary stack", "Flutter · Supabase", "copper"],
    ["Also builds with", "Arduino · ESP32"],
    ["Architecture", "Clean / MVVM"]
  ],
  skills: [
    {
      tier: "tier-1",
      name: "Core toolkit ",
      description: "— reaches for daily",
      skills: ["Flutter", "Provider", "Riverpod", "Supabase", "FastAPI", "MySQL", "Firebase", "CI/CD(Github Action)", "Arduino", "ESP32"]
    },
    {
      tier: "tier-2",
      name: "Comfortable with",
      description: "— solid working knowledge",
      skills: ["React", "Flask", "SQLite", "Raspberry Pi", "Control Systems", "Postman", "Figma", "Bootstrap5"]
    },
    {
      tier: "tier-3",
      name: "Others",
      description: "— learning in progress",
      skills: ["RTOS", "ROS2", "PyTorch", "Docker", "Fusion360"]
    }
  ],
  projects: [
    {
      id: "P.01", className: "proj-tall",
      image: leafifyImage,  // Use the imported variable
      alt: "Leafify app screens", title: "Leafify",
      description: "An AI-powered plant companion app — care guides, a shop, garden collection tracking, and disease detection from a photo.",
      tags: ["Flutter", "Riverpod", "Firebase", "FastAPI", "SSLCommerz"], url: "https://github.com/Naahian/Leafify"
    },
    {
      id: "P.05", className: "proj-tall",
      image: cashflowImage,
      alt: "CashFlow app screens", title: "CashFlow",
      description: "A local first finance tracker app with smart analytics, recurring transaction, budget allocation and muchmore. All userdata are encrypted and never leaves app.",
      tags: ["Flutter", "Riverpod", "Hive", "RevenueCat"], url: "https://github.com/Naahian/CashFlow"
    },
    {
      id: "P.05", className: "proj-tall",
      image: cleanImage,
      alt: "Clean Commerce app screens", title: "Clean Commerce",
      description: "A regular e-commerce app with an atypical goal: proving out Clean Architecture, MVVM, and SOLID in a real Flutter codebase.",
      tags: ["Flutter", "Riverpod", "Supabase"], url: "https://github.com/Naahian/clean_commerce"
    },
    {
      id: "P.04", className: "proj-tall",
      image: pathFinderImage,
      alt: "Path visualizer grid", title: "Path Visualizer",
      description: "An interactive tool for shortest-path algorithms — Dijkstra, A*, custom grids, and real-time animation.",
      tags: ["Algorithms", "Pygame", "Python"], url: "https://github.com/Naahian/Shortest-Path-Visualizer"
    },
    {
      id: "P.03", className: "proj-tall",
      image: hydroImage,
      alt: "Circuit board detail", title: "Hydroponic Automation",
      description: "An IoT hydroponic system that monitors and controls nutrient dosing, pH, and lighting in real time.",
      tags: ["IoT", "Arduino", "Automation"], url: "https://github.com/Naahian/hydro_project"
    },
    {
      id: "P.06", className: "proj-tall",
      image: "https://img.itch.zone/aW1nLzI0NTk3ODc1LnBuZw==/original/cvDa9n.png",  // Or import when you have the image
      alt: "Pixel art game character", title: "Reborn",
      description: "A hobby 2D RPG platformer built in Godot. A king is revived and has to reclaim his kingdom, one level at a time.",
      tags: ["Godot", "Game Dev", "Platformer"], url: "https://github.com/Naahian/Reborn"
    }
  ],
  experience: [
    {
      role: "Senior Executive", organization: "Robotics Club of Brac University",
      type: "Full-time", period: "Jan 2022 – Jan 2025",
      description: [
        "Built and led the Smart Hydroponic Farming IoT project",
        "Built a line-following robot for competition entries",
        "Ran robotics workshops and mentored newcomers",
        "Helped plan and prepare workshop curriculum"
      ],
      tags: ["Arduino", "ESP", "Control Systems", "IoT", "Robotics"]
    },
    {
      role: "Flutter Developer Intern", organization: "Sugary LLC",
      type: "Part-time", period: "Feb 2023 – May 2023",
      description: [
        "Learned and applied Clean Architecture in production code",
        "Helped build an internal admin panel app",
        "Integrated and consumed REST APIs"
      ],
      tags: ["Flutter", "Clean Architecture", "GetX", "Figma"]
    }
  ]
};
