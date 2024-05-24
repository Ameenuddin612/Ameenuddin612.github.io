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
          title: 'Papersy',
          description:
            'A platform that simplifies the process of sharing notes and question papers among OU affiliated colleges.',
          imageUrl: 'https://play-lh.googleusercontent.com/xpChoLNgOIJr-1lsxQSztFjNzGEttUrHVCtqyH50CHmlq9bUdm0b0DZ0tMCG2CKZdJc=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.thedumbcoders.papersy',
        },
        {
          title: 'Keeper App',
          description:
            'Serverless functions written in GO for the Pi6 Wallet application',
          imageUrl: 'https://via.placeholder.com/250x250',
          link: 'https://github.com/mdmohsin/pi6_functions',
        },
        {
          title: 'PhonePe Website',
          description:
            'A platform for users to write articles and generate revenue by sharing them',
          imageUrl: 'https://raw.githubusercontent.com/mdmohsin7/bloggie/master/screenshots/Vector-Galaxy-s20-Mockup.png',
          link: 'https://github.com/mdmohsin/bloggie',
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
    'C/C++',
    'HTML/CSS',
    'React',
    'Node',
    'Python',
    'JavaScript',
    'Git',
  ],
  experiences: [
    {
      company: 'Cattle GURU (Cattleguru Pvt. Ltd.)',
      position: 'Software Engineer - Full time',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://cattleguru.in',
    },
    
  ],
   certifications: [
     {
       name: 'Lorem ipsum',
       body: 'Lorem ipsum dolor sit amet',
       year: 'March 2022',
       link: 'https://example.com',
     },
   ],
  educations: [
    {
      institution: 'Nawab Shah Alam Khan College of Engg. and Tech.',
      degree: 'Bachelor of Engineering - Information Technology',
      from: 'August 2019',
      to: 'June 2023',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
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
