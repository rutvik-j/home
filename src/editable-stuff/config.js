// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rutvik",
  middleName: "",
  lastName: "Joshi",
  message: `Find me at an intersection between Data, Design and Development 🌱`,
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RutvikJ77",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/Rutvikstwt/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rutvikjoshi/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rutvik_dev.desg/",
    },
    // {
    //   image: "fa-kaggle",
    //   url: "https://www.kaggle.com/rutvikj77",
    // },
    {
      image: "fa-dev",
      url: "https://dev.to/rutvikj",
    },
    {
      image: "fa-behance",
      url: "https://www.behance.net/Rutvikj",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCAfn8QoFhmSDhMYApwG6YnA/videos",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "link",

const about = {
  show: true,
  heading: "About Me",
  //profilePictureLink:"rutvik_dev.desg",
  imageLink: "https://avatars.githubusercontent.com/u/45565999?v=4",  //require("../editable-stuff/profile.png"),
  imageSize: 275,
  resume: "https://rutvik-j.github.io/resume/",
  message:
    `👋 Hello there! I'm Rutvik, a senior year Computer Engineering student from 🇮🇳.
    Data, Design and Software Development excite me the most and I am intrigued with the power when 3️⃣ of them are combined. 
    I'm passionate about communities and give my utmost knowledge back to them. 
    `
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RutvikJ77", //i.e."johnDoe12Gh"
  specificRepos: ["Resume-aid", "Inspiquote", "DesignSundays", "Citi-Bike-Analysis"],
  reposLength: 0,
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/rutvik-j.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/rutvik-j.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "R", value: 85 },
    { name: "Java", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "Streamlit", value: 65 },
    { name: "Numpy", value: 55 },
    { name: "Pandas", value: 80 },
    { name: "Tensorflow", value: 80 },
    { name: "Scikit-Learn", value: 80 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "TeamWork", value: 75 },
    { name: "StoryTelling", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Management", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    `Always glad & curious to connect and learn from people!
    Feel free to send me an email 📧  `,
  email: "rutvikj77@outlook.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: ture,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
