const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];
const projects = [
  {
    id: 1,
    title: 'Cosmic Navigator - Explore the Galaxy',
    des: 'Embark on an interstellar journey and explore planets, stars, and galaxies with an interactive 3D experience powered by Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.cosmicnav.com',
  },
  {
    id: 2,
    title: 'ConnectX - Video Collaboration Platform',
    des: 'Revolutionize your video meetings with ConnectX, a powerful platform designed for seamless communication and collaboration.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.connectx.com',
  },
  {
    id: 3,
    title: 'Artify - AI-Powered Design Tool',
    des: 'Unleash your creativity with Artify, an advanced design platform featuring AI-enhanced tools and a dynamic credit-based system.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.artify.com',
  },
  {
    id: 4,
    title: '3D Interactive iPhone Showcase',
    des: 'Experience the next level of web animations with this 3D interactive showcase of the iPhone 15 Pro, combining smooth GSAP and Three.js effects.',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.iphoneshowcase.com',
  },
];

const testimonials = [
  {
    quote:
      "Working with Yusuf was a transformative experience. His attention to detail, technical expertise, and creative vision helped turn our ideas into a stunning, high-performing website. We couldn't have asked for a better partner in bringing our digital vision to life.",
    name: 'Sarah Williams',
    title: 'CEO of InnovateX Solutions',
  },
  {
    quote:
      'Yusuf exceeded our expectations. His ability to quickly grasp our business needs and translate them into a user-friendly and visually appealing website was impressive. His technical knowledge and commitment to delivering on time were truly commendable.',
    name: 'David Brown',
    title: 'Founder of Nexa Digital',
  },
  {
    quote:
      'Yusuf’s expertise in modern web development is unparalleled. His creative solutions, especially in optimizing performance and UI/UX design, set him apart. Thanks to his efforts, our site has seen a significant increase in user engagement.',
    name: 'Emily Clark',
    title: 'Marketing Director at Horizon Ventures',
  },
  {
    quote:
      "We loved Yusuf's approach to problem-solving. His responsiveness, passion for quality, and seamless execution have been pivotal in revamping our web presence. The results speak for themselves with improved site performance and a sleek design.",
    name: 'John Taylor',
    title: 'CTO of ClearSky Tech',
  },
  {
    quote:
      'Yusuf is a rare blend of creativity and technical prowess. His work on our eCommerce platform helped increase conversions significantly. His understanding of user experience, combined with his ability to implement complex features, was invaluable to our success.',
    name: 'Laura Martin',
    title: 'Head of Product at Nova Retail',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Backend Go Developer - JSM Tech',
    desc: 'Led the development of backend services and APIs using Go, ensuring high performance and scalability for web and mobile applications.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];

export { navItems, gridItems, projects, testimonials, socialMedia };
