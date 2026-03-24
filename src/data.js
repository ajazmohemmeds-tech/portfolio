export const personalInfo = {
  name: "Ajaz Mohemmed S",
  tagline: "AI ENGINEER",
  email: "ajazmohemmeds@gmail.com",
  phone: "+91 7306587895",
  location: "Kerala",
  linkedin: "https://www.linkedin.com/in/ajaz-mohemmed-s-12581727a",
  github: "https://github.com/ajazmohemmeds-tech",
  education: [
    {
      institution: "CHRIST (Deemed to be University), Bangalore",
      degree: "B.Tech in Artificial Intelligence Machine Learning",
      year: "2022 - 2026"
    },
    {
      institution: "Puliyaparamb Higher Secondary School, Palakkad",
      degree: "Higher Secondary",
      year: ""
    }
  ]
};

export const skills = {
  row1: [
    { name: "Google Gemini", icon: "Brain" },
    { name: "LangChain", icon: "Link" },
    { name: "Python", icon: "Terminal" },
    { name: "PyTorch", icon: "Zap" },
    { name: "TensorFlow", icon: "Cpu" },
    { name: "OpenCV", icon: "Camera" },
    { name: "Scikit-Learn", icon: "Database" },
    { name: "Pandas", icon: "BarChart" }
  ],
  row2: [
    { name: "React.js", icon: "Layout" },
    { name: "Node.js", icon: "Server" },
    { name: "Framer Motion", icon: "Wind" },
    { name: "MongoDB", icon: "Database" },
    { name: "SQL", icon: "Table" },
    { name: "Git", icon: "GitBranch" },
    { name: "Anthropic API", icon: "Sparkles" },
    { name: "Docker", icon: "Container" }
  ]
};

export const experience = [
  {
    company: "Cognifyz",
    role: "Python Intern",
    period: "04/2025 – 05/2025",
    type: "Remote",
    description: [
      "Designed and implemented a machine learning system to predict restaurant ratings using real-world food-tech datasets, enhancing recommendation accuracy by 35%.",
      "Incorporated end-to-end preprocessing which improved model accuracy by 20% and reduced data errors by 15%.",
      "Developed and optimized regression and classification models using scikit-learn, Pandas, and NumPy.",
      "Automated 95% of the ML pipeline, resulting in a 28% boost in model performance."
    ]
  },
  {
    company: "TrizLabs",
    role: "Research Intern",
    period: "06/2024 – 09/2024",
    type: "On-site",
    description: [
      "Designed an infrared monocular depth estimation system for real-time use.",
      "Explored single-camera techniques and infrared-based depth perception.",
      "Applied theoretical knowledge to system design for robotics and surveillance applications."
    ]
  }
];

export const projects = [
  {
    title: "ATELIER – Luxury Gifting E-Commerce Platform",
    description: "A premium gifting website offering curated hampers, bespoke frames, and floral arrangements through a refined and elegant interface designed for a high-end shopping experience.",
    tech: ["UI/UX", "E-Commerce", "Frontend", "Responsive Design", "Animations"],
    role: "Developer",
    outcome: "Delivered a visually rich, smooth, and immersive shopping experience with premium aesthetics and seamless user interaction",
    image: "images/atelier.png",
    demoLink: "https://atelier-com.vercel.app/",
    githubLink: "https://github.com/ajazmohemmeds-tech/ATELIER.COM.git",
  },

  {
    title: "Personal Voice Assistant",
    description: "AI-powered voice assistant application integrating a Hugging Face chatbot for natural, context-aware conversations.",
    tech: ["NLP", "Hugging Face", "Python", "Speech-to-Text"],
    role: "AI Engineer",
    outcome: "Improved contextual accuracy and faster response times.",
    image: "images/voice-assistant.png"
  },
  {
    title: "Business Intelligence Agent",
    description: "AI agent that can answer founder-level business intelligence queries by integrating with monday.com boards containing work orders and deals data.",
    tech: ["AI Agent", "monday.com API", "NLP", "Python", "Data Integration"],
    role: "Developer",
    outcome: "Streamlined business intelligence querying for immediate data insights.",
    image: "images/bi-agent.png",
    demoLink: "https://monday-bi-agent-nlp9.onrender.com",
    githubLink: "#"
  }
];

export const research = [
  {
    title: "Decision Flow Tracing and Word Impact Analysis in Hybrid Transformer-Conditioned Diffusion Models",
    conference: "2nd International Conference on Sustainable Computing and Intelligent Systems (SCIS 2025)",
    publisher: "Springer",
    date: "11/2025",
    description: "Research focused on improving text-to-image generation using hybrid Transformer-diffusion architecture.",
    authors: ["Ajaz Mohemmed S", "Aldrin P Thomas", "Shiju George", "N Anand Raj", "Mdhun Shaju", "Akil Nasim"]
  }
];

export const volunteering = [
  {
    organization: "CUESTIC (Christ University)",
    role: "Media Vice Head",
    description: "Progressed from media volunteer to Vice Head. Contributed to photography, videography, and content creation for university events."
  },
  {
    organization: "National Service Scheme (NSS)",
    role: "Volunteer",
    period: "2020 - 2022",
    description: "Participated in cleanliness drives, awareness campaigns, and environmental projects."
  }
];

export const certifications = [
  {
    name: "Data Science for Engineers-NPTEL",
    issuer: "IIT Madras",
    date: "12/2025 – Present" // As per resume
  },
  {
    name: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Service Training and Certification",
    date: ""
  },
  {
    name: "Cybersecurity Training",
    issuer: "CISCO",
    date: ""
  }
];
