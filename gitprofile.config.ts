// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Ameenuddin612', // Your GitHub org/user name. (Required)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Keeper App',
          description:
            'Developed the front-end of a note-taking web application using React.',
        },
        {
          title: 'PhonePe Website',
          description:
            'Created a visually stunning and responsive webpage for PhonePe, most loved UPI app.',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ameenuddin',
    description: 'Full Stack Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'ameenuddin612',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://ameenuddin612.github.io',
    phone: '',
    email: 'ameenuddin7009@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1nYQfqv6xs0cNxoDOTL8tA4p8iJrXiUmy/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'HTML',
    'CSS',
    'React',
    'Node',
    'Python',
    'Bootstrap',
    'jQuery',
    'JavaScript',
    'Git',
  ],
  experiences: [
    {
      company: 'Rejolt Edtech Pvt Ltd.',
      position: 'Web Developer - Internship',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://www.rejoltedtech.com',
    },
    
  ],
   certifications: [
     {
       name: 'Full Stack Web Development MERN Stack',
       body: 'prepInsta',
       year: 'May 2024',
       link: 'https://drive.google.com/file/d/1haMgMfa8KpTOdMzvFD90a5kBqfxjxUJv/view?usp=sharing',
     },
     {
       name: 'The Complete 2024 Web Development Bootcamp',
       body: 'Udemy',
       year: 'February 2024',
       link: 'https://drive.google.com/file/d/1j7uLJQPCXdnTV40c_LrpE7___8-F0j-l/view?usp=sharing',
     },
   ],
  educations: [
    {
      institution: 'Lords Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering - Information Technology',
      from: 'August 2019',
      to: 'July 2023',
    },
    {
      institution: 'Noesis Junior College',
      degree: 'Intermediate',
      from: 'October 2017',
      to: 'May 2019',
    },
    {
      institution: 'International Indian School Jeddah',
      degree: 'Xth',
      from: 'April 2015',
      to: 'May 2016',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mdmohsin7', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
