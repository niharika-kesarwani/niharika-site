/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Niharika Kesarwani",
  title: "Hi all, I'm Niharika",
  subTitle: emoji(
    "A web developer, learning and applying the latest technologies and best practices in web development, such as ReactJS, NodeJS, Redux.js, and Back-End Web Development. Aim to become a leader in the tech industry who can create innovative and impactful solutions for society."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12mg5amkM36zkqWyyEbEonshpSwjDb6hi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/niharika-kesarwani",
  linkedin: "https://www.linkedin.com/in/niharika-kesarwani/",
  twitter: "https://twitter.com/Niharika_twt",
  gmail: "kesarwani.neha9@gmail.com",
  gitlab: "https://gitlab.com/niharikakesarwani",
  facebook: "https://www.facebook.com/niharika.kesarwani.3975",
  medium: "https://medium.com/@niharikakesarwani",
  stackoverflow: "https://stackoverflow.com/users/19453102/niharika-kesarwani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal Institute of Technology, Manipal",
      logo: require("./assets/images/manipalLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - November 2022",
      desc: "CGPA - 9.09",
      descBullets: [
        "Participated in Adventurer 3.0 Kudremukh, a 250km biking expedition program to Kudremukh, the second highest peak in Karnataka"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Student",
      company: "neoG Camp",
      companylogo: require("./assets/images/neogLogo.jpg"),
      date: "Feb 2023 – Present",
      desc: "A part of web development (MERN stack) bootcamp",
      descBullets: [
        "Made major projects like e-commerce, social media using ReactJS.",
        "Learnt various technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJS, TypeScript and Redux."
      ]
    },
    {
      role: "Software Development Engineer - I",
      company: "OYO Rooms",
      companylogo: require("./assets/images/oyoLogo.png"),
      date: "July 2022 – Nov 2022",
      desc: "Worked under Technology - Consumer Apps Android team",
      descBullets: [
        "Improved the UI of Booking Confirmation, Hotel Description, Feedback, and Home pages of the app.",
        "Used Android, Kotlin and Postman technologies."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "OYO Rooms",
      companylogo: require("./assets/images/oyoLogo.png"),
      date: "Jan 2022 – June 2022",
      desc: "Won Best in Completion and Production Readiness award during TechnoDisruptors Code Challenge.",
      descBullets: [
        "Worked under Technology - Consumer Apps Android team.",
        "Used Android, Kotlin and Postman technologies."
      ]
    },
    {
      role: "Application Development Intern",
      company: "MissionEd",
      companylogo: require("./assets/images/missionedLogo.jpg"),
      date: "Oct 2020 – Nov 2020",
      desc: "Worked under Community feature of the app",
      descBullets: [
        "Supported and contributed to App Development team.",
        "Used Flutter technology."
      ]
    },
    {
      role: "Technology Teacher Intern",
      company: "Qin1",
      companylogo: require("./assets/images/qin1Logo.jpg"),
      date: "Apr 2020 – July 2020",
      desc: "Worked as an intern in Technology Teaching Department",
      descBullets: [
        "Conducted 100+ classes by teaching programming language in Scratch and MIT App Inventor."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "42Gears",
      companylogo: require("./assets/images/42gearsLogo.jpg"),
      date: "May 2020 – June 2020",
      desc: "Exposed to various activities in Software Development Department",
      descBullets: [
        "Worked using Graphana, Elastic Search, Logstach, Filebeat technologies."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/sociohaven.png"),
      projectName: "SocioHaven",
      projectDesc:
        "A social media website where you can connect with your friends!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sociohaven.netlify.app/"
        },
        {
          name: "View Source Code",
          url: "https://github.com/niharika-kesarwani/sociohaven"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/readhaven.png"),
      projectName: "ReadHaven",
      projectDesc: "A books e-commerce website for all book lovers!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://readhaven.netlify.app/"
        },
        {
          name: "View Source Code",
          url: "https://github.com/niharika-kesarwani/readhaven"
        }
      ]
    },
    {
      image: require("./assets/images/componentlibrary.png"),
      projectName: "CSS Component Library",
      projectDesc:
        "A small app containing different components with their documentation in React JS.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://component-library-niharika.netlify.app/"
        },
        {
          name: "View Source Code",
          url: "https://github.com/niharika-kesarwani/component-library"
        }
      ]
    },
    {
      image: require("./assets/images/readersretreat.png"),
      projectName: "Reader's Retreat",
      projectDesc:
        "A college library group project built during AFOURATHON 2023",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://readers-retreat.vercel.app/"
        },
        {
          name: "View Source Code",
          url: "https://github.com/niharika-kesarwani/readers-retreat"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  achievementsCards: [
    {
      title: "AFourathon 3.0 (Hackathon)",
      subtitle:
        "Participated in AFourathon 3.0 hackathon hosted by AFour Technologies.",
      image: require("./assets/images/afour.jpg"),
      imageAlt: "AFour Technologies Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1626Qxe5v3qehIdETYug8Lw2ENdb0ZuI1/view?usp=sharing"
        }
      ]
    },
    {
      title: "TechnoDisruptors Code Challenge",
      subtitle: "Won Best in Completion and Production Readiness award.",
      image: require("./assets/images/oyoLogo.png"),
      imageAlt: "OYO Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OExjXw1xX_KqkAMC2ar5frggjNrgfH1R/view?usp=sharing"
        }
      ]
    },
    {
      title: "Manipal Hackathon 2020",
      subtitle:
        "The Shubchintak App was developed during Manipal Hackathon 2020 with the problem statement on Domestic Violence. Made it up to the final round of 20 out of 150 teams.",
      image: require("./assets/images/manipalhackathon.png"),
      imageAlt: "Manipal Hackathon 2020 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wcA4OOoJHdLbk42OIKFSxA6-UanaCWv-/view"
        },
        {
          name: "Final Project Source Code",
          url: "https://github.com/MH-2-0-Round-3/1116_CodeBrewers"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and teach others what I have learnt and experienced.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://niharikakesarwani.hashnode.dev/why-does-consolelog-return-undefined",
      title: "Why does console.log() return 'undefined'?",
      description:
        "Ever wondered what happens when your browser's console returns undefined upon execution? Read on to find out about it..."
    },
    {
      url: "https://niharikakesarwani.hashnode.dev/unravelling-the-beauty-of-kudremukh",
      title: "Unravelling the beauty of Kudremukh",
      description:
        "My journey to finding my daring self amongst the verdant mountains..."
    },
    {
      url: "https://niharikakesarwani.hashnode.dev/the-gateway-to-financial-freedom",
      title: "The Gateway to Financial Freedom",
      description:
        "A guide for beginners to get started with personal finance..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8975751438",
  email_address: "kesarwani.neha9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Niharika_twt", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
