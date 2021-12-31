const resumeData = {
  hero: {
    title: "Frontend Engineering",
    subtitle: "Because clean code matters...",
  },
  aboutme:
    "I'm a Front-End developer looking to improve in a challenging environment that requires team-work effort to research, learn and develop sustainable innovative projects/technologies that make the world a better and easier place to live in.",
  contacts: {
    name: "Pedro Gritter",
    website: "http://pedrogritter.github.io/portfolio/",
    email: "pedro12345g@gmail.com",
    github: "https://github.com/pedrogritter",
    linkedin: "https://www.linkedin.com/in/pedro-gritter/",
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pedro-gritter/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "https://github.com/pedrogritter",
        className: "fa fa-github",
      },
    ],
  },
  details: {
    education: [
      {
        name: "Faculty of Sciences of the University of Lisbon",
        description: "Bsc in Computer Science",
        specialization: "Minor in Geographical Information",
        year: 2021,
        achievements:
          "Design of content and applications. \n Design or web administration systems.\n Technical computing functions. \n Analyst / Programming.",
      },
      {
        name: "Restart - Instituto de Criatividade, Artes e Novas Tecnologias",
        description: "Audiovisuals & Multimedia",
        specialization: "Focused on Video Editing",
        year: 2013,
        achievements:
          "Create and edit multimedia content for films and TV. \n Audivisual Language. \n Camera & Sound. \n Video & Post-Production.",
      },
    ],
    work: [
      {
        name: "Aptoide",
        description: "Frontend Developer",
        achievements:
          "Maintain the company’s user and corporate websites used by millions of users. Implement responsive and adaptive designs with reusable, modular, testable code that is compliant with modern UX/UI and SEO principles.",
        year: 2018,
      },
      {
        name: "ESL Gaming",
        description: "Frontend Developer",
        achievements: "Maintain the CS:GO hub. A platform to improve",
        year: 2022,
      },
    ],
    skills: [
      { name: "HTML5", value: 90 },
      { name: "CSS", value: 78 },
      { name: "Javascript", value: 70 },
      { name: "React", value: 65 },
    ],
  },
  projects: [
    {
      name: "Token QR Flyer",
      description: "Token QR Flyer",
      imgurl: "images/portfolio/phone.jpg",
      url: "http://token-qr.herokuapp.com/",
    },
    {
      name: "PyDownloader",
      description: "Terminal tool written in python",
      imgurl: "images/portfolio/project.jpg",
    },
    {
      name: "Travel Budget Tracker",
      description: "mobileapp",
      imgurl: "images/portfolio/project2.png",
    },
    {
      name: "Portfolio Project",
      description: "mobileapp",
      imgurl: "images/portfolio/phone.jpg",
    },
    {
      name: "Limitless Anchorage",
      description: "A guide with resources about freediving and spearfishing",
      imgurl: "images/portfolio/phone.jpg",
      url: "http://limitless-anchorage-80811.herokuapp.com/",
    },
    {
       name: "Drexciya React",
      description: "A simple project built to experiment with React - displays tracks from Drexciya",
      imgurl: "images/portfolio/phone.jpg",
      url: "http://limitless-anchorage-80811.herokuapp.com/",
    }
  ],
};

export default resumeData;
