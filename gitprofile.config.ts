// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Ameenuddin612', // Your GitHub org/user name. (This is the only required config)
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
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:'',
          imageUrl:'',
          link: '',
        },
        {
          title: '',
          description:'',
          imageUrl:'',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ameenuddin',
    description: 'Full Stack Developer | React.js| Node.js| JavaScript',
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
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ameenuddin612.github.io/',
    phone: '',
    email: 'ameenuddin7009@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1nYQfqv6xs0cNxoDOTL8tA4p8iJrXiUmy/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML',
    'CSS',
    'PostgreSQL',
    'Git',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'The Complete 2023 Web Development Bootcamp',
      body: 'Udemy',
      year: 'February 2024',
      link: 'https://drive.google.com/file/d/1j7uLJQPCXdnTV40c_LrpE7___8-F0j-l/view?usp=sharing',
    },
    {
      name: 'Full Stack Web Development MERN Stack',
      body: 'PrepInsta',
      year: 'May 2024',
      link: 'https://drive.google.com/file/d/1haMgMfa8KpTOdMzvFD90a5kBqfxjxUJv/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Lords Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Noesis Junior College',
      degree: 'Intermediate',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'International Indian School Jeddah',
      degree: 'Xth',
      from: '2015',
      to: '2016',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        ' minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  

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
