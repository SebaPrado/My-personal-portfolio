/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
  {
    imgSrc: 'img/fibras naturales.jpg',
    title: 'La importadora',
    skills: ['php', 'JavaScript', 'Html', 'CSS'],
    descripcion:
      'This project was developed using Wordpress, Php  and CSS.',
    demoURL: 'https://laimportadora.com.ar/',
    anim: 'fade-up',
   
   },
  
  {
    imgSrc: '/img/music.png',
    title: 'E-commerce : Front-end',
    skills: ['JavaScript', 'Html', 'CSS', 'React', 'Bootstrap', 'Tailwind'],
    descripcion:
      'E-commerce site featuring a public-facing section for buyers built with React-Redux. The backend API is a RESTful service built with Node.js, Express, Supabase and SQL.',
    demoURL: 'https://equalvision.vercel.app/',
    repoURL: 'https://github.com/SebaPrado',
    anim: 'fade-up',
    
  },
  {
    imgSrc:'/img/dashboard.jpg',
    title: 'E-commerce : Dashboard',
    skills: ['JavaScript', 'Html', 'CSS', 'React', 'Bootstrap', 'Tailwind'],
    descripcion:
      'E-commerce dashboard site section for managing the site, built with React-Redux. . The backend API is a RESTful service built with Node.js, Express, Supabase and SQL.',
      demoURL: 'https://equalvision-admin.vercel.app/',
      repoURL: 'https://github.com/SebaPrado',
    anim: 'fade-left'
  },
  {
    imgSrc: '/img/aluminio.png',
    title: 'Alusur S.A',
    skills: [ 'JavaScript', 'Html', 'CSS', 'Bootstrap',],
    descripcion:
      'This project was developed using Node, JavaScript, and CSS',
    demoURL: 'http://alusur.com.uy/',
    
    anim: 'fade-up',
   
  },
  {
    imgSrc: '/img/background image netflix.jpg',
    title: 'Fakeflix',
    skills: ['React', 'JavaScript', 'Html', 'CSS'],
    descripcion:
      'This project was developed using Node, JavaScript, and CSS, incorporating Express as the framework and Redux for state management.',
    demoURL: 'https://fakeflix-ruby.vercel.app/',
    repoURL: 'https://github.com/SebaPrado/Fakeflix',
    anim: 'fade-up',
   
  },
  
  // {
  //   imgSrc: '/img/background image netflix.jpg',
  //   title: 'Fakeflix',
  //   skills: ['React', 'JavaScript', 'Html', 'CSS'],
  //   descripcion:
  //     'This project was developed using Node, JavaScript, and CSS, incorporating Express as the framework and Redux for state management.',
  //   demoURL: 'https://fakeflix-ruby.vercel.app/',
  //   repoURL: 'https://github.com/SebaPrado/Fakeflix',
  //   anim: 'fade-up',
   
  // },
];

const skillIcons = {
  JavaScript: 'skill-icons:javascript',
  Html: 'skill-icons:html',
  React: 'skill-icons:react-dark',
  Astro: 'skill-icons:astro',
  CSS: 'skill-icons:css',
  Sass: 'skill-icons:sass',
  StyledComponents: 'skill-icons:styledcomponents',
  Bootstrap: 'skill-icons:bootstrap',
  Tailwind: 'skill-icons:tailwindcss-dark',
  Tick: 'hugeicons:tick-03'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map(item => {
  return {
    // Se coloca todo el contenido previo del item
    ...item,
    // Se cambian las skills por los iconos correspondientes
    skills: item.skills.map(skill => skillIcons[skill])
  };
});
