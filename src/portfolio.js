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
  username: "Jamiu Akinyemi",
  title: "Hi all, I'm Jamiu",
  subTitle: emoji(
    "Enthusiastic Mobile App Developer 🚀 having an experience of building Mobile applications with Java / Kotlin / Flutter and some other cool libraries and SDKs."
  ),
  resumeLink: "https://cdn.jsdelivr.net/gh/blackorbs-dev/files@main/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/blackorbs-dev",
  linkedin: "https://www.linkedin.com/in/blackorbs",
  gmail: "blackorbs.dev@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/7904082/akinyemi-jamiu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about leveraging technology to connect people and businesses, I am eager to contribute to innovative projects in a dynamic and collaborative environment using below tech stacks",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive User Interfaces for your mobile applications"
    ),
    emoji("⚡ Cross-platform development with Flutter framework"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ RESTFul API / Admob and other Ads Monetisation SDKs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fab fa-dart-lang"
    },
    {
      skillName: "play console",
      fontAwesomeClassname: "fab fa-google-play"
    },
    {
      skillName: "amazon app store",
      fontAwesomeClassname: "fab fa-amazon"
    },
    {
      skillName: "sqlite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "android studio",
      fontAwesomeClassname: "fas fa-laptop"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "First Technical University",
      logo: require("./assets/images/techuLogo.jpg"),
      subHeader: "Bachelors Degree in Petroleum Engineering",
      duration: "December 2019 - August 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/fpeLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Native Android Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Cross-platform Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Testing and Debugging",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Freelance (Upwork, Fiverr)",
      companylogo: require("./assets/images/upworkLogo.jpg"),
      date: "April 2022 – Present",
      // desc: "Developed and uploaded numerous apps to the Google Play Store.",
      descBullets: [
        "Developed and uploaded numerous apps to the Google Play Store achieving 20,000+ installs in first month and over 500 Daily Active Users (DAU)",
        "Managed app listings, updates, and user feedback, ensuring compliance with Google Play Store guidelines for smooth app launches",
        "Generated $1000+ Monthly revenue through effective implementation of monetization strategies using Google AdMob and other Ads SDKs to maximize revenue potential while maintaining a positive user experience",
        "Integrated a variety of SDKs such as Firebase Cloud Messaging, Firestore, and Cloud Storage to enhance app capabilities and user engagement"
      ]
    },
    {
      role: "Computer Engineer Intern",
      company: "Qaslat Programming and Engineering House",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Oct 2017 – Feb 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Gained hands-on experience in software installation and system testing",
        "Performed upgrade/new installation of Windows OS and other software programs (Microsoft package, Avast Security) on various systems (HP, Dell, Asus, Lenovo)",
        "Provided technical support and performed computer repairs",
        "Collaborated with the engineering team to ensure smooth operation of various systems",
        "⁠Enhanced technical skills and practical problem-solving abilities within a professional environment"
      ]
    },
    {
      role: "Blog Writer",
      company: "Kefblog",
      companylogo: require("./assets/images/kefblogLogo.png"),
      date: "May 2017 – Sep 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Created and published over a hundred engaging and informative contents to boost visibility and readership",
        "⁠Optimized content for search engines (SEO) to enhance website traffic achieving 14,000+ monthly website visits",
        "⁠Enhanced website functionality and improved user experience",
        "Maintained the website's technical aspects to ensure seamless performance"
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
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON SHOWCASING MY EXPERTISE",
  projects: [
    {
      images: [
        require("./assets/images/ecomm1.png"),
        require("./assets/images/ecomm2.png"),
        require("./assets/images/ecomm3.png"),
        require("./assets/images/ecomm4.png")
      ],
      // image: require("./assets/images/appshow.gif"),
      projectName: "E-commerce App",
      projectDesc: "App built with Java. Utilises Firebase Firestore and Cloud Storage",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      images: [
        require("./assets/images/seller1.png"),
        require("./assets/images/seller2.png"),
        require("./assets/images/seller3.gif")
      ],
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Seller App",
      projectDesc: "App built with Kotlin and Jetpack Compose for UI",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      images: [
        require("./assets/images/gpa1.png"),
        require("./assets/images/gpa2.png"),
        require("./assets/images/gpa3.png"),
        require("./assets/images/gpa4.png")
      ],
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "GPA Calculator",
      projectDesc: "App developed with Flutter for compatibility with Andoid and iOS devices.",
      footerLink: [
        {
          name: "View Video",
          url: "https://www.youtube.com/@blackorbs"
        }
      ]
    },
    {
      images: [
        require("./assets/images/movie1.png"),
        require("./assets/images/movie2.png")
      ],
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Movies Finder App",
      projectDesc: "App built with Kotlin. Utiilises Coroutines, Retrofit, Hilt, JUnit and some Jetpack Libraries",
      footerLink: [
        {
          name: "View Project on Github",
          url: "https://github.com/blackorbs-dev/MovieFinder"
        }
      ]
    },
    {
      images: [
        require("./assets/images/web1.png"),
        require("./assets/images/web2.png"),
        require("./assets/images/web3.png"),
        require("./assets/images/web4.png"),
        require("./assets/images/web5.png")
      ],
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Web Browser and File Downloader App",
      projectDesc: "App built with Java. Utilises OkHttp for network calls",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Sololearn Programming Courses Certificate of Completion",
      subtitle:
        "Certificate in Java, Python and Kotlin showcasing my theoretical and practical understanding of the programming languages.",
      image: require("./assets/images/sololearn.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Java",
          url: "https://api2.sololearn.com/v2/certificates/CT-FF67R1OH/image/png"
        },
        {
          name: "Python",
          url: "https://api2.sololearn.com/v2/certificates/CT-UGLLOU55/image/png"
        },
        {
          name: "Kotlin",
          url: "https://api2.sololearn.com/v2/certificates/CT-3VHPMS23/image/png"
        }
      ]
    },
    {
      title: "Society of Petroleum Engineering Tech-U Chapter Certificate of Appreciation",
      subtitle:
        "Award for being a valued member and program advisor. Also nominated for Python Bootcamp Instructor role.",
      image: require("./assets/images/speLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    },

    {
      title: "Multi-platform Coiled Tubing Fatigue Life Estimation Software",
      subtitle: "Developed a software that can be used by Oil and Gas companies to estimate the fatigue life of Coiled Tubing Equipment and ensure timely retirement of the equipment to prevent unexpected failure and ensure personnel safety. This software was developed with Flutter and can run on macOS, Windows, Linux, Android and iOS",
      image: require("./assets/images/coilTubing.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Final Year Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm eager to connect with like-minded professionals, share insights, and explore opportunities that enable me to drive innovation and create positive change, both locally and globally.",
  number: "+2348168156922",
  email_address: "blackorbs.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
