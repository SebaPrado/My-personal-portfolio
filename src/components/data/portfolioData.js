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
    imgSrc: 'public/img/background image netflix.jpg',
    title: 'Fakeflix',
    skills: ['React', 'JavaScript', 'Html', 'CSS'],
    descripcion:
      'This project was developed using Node, JavaScript, and CSS, incorporating Express as the framework and Redux for state management.',
    demoURL: 'https://fakeflix-ruby.vercel.app/',
    repoURL: 'https://github.com/SebaPrado/Fakeflix',
    anim: 'fade-up',
   
  },
  {
    imgSrc: 'public/img/about-this-project-2.webp',
    title: 'E-commerce: Equal vision',
    skills: ['JavaScript', 'Html', 'CSS', 'React', 'Bootstrap', 'Tailwind'],
    descripcion:
      'E-commerce site featuring a public-facing section for buyers built with React-Redux. It includes an admin dashboard for managing the site, also using React and Redux. The backend API is a RESTful service built with Node.js, Express, Supabase and SQL.',
    demoURL: 'https://equalvision.vercel.app/',
    repoURL: 'https://github.com/SebaPrado',
    anim: 'fade-up',
    
  },
  {
    imgSrc:
      'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
    title: 'Coffe Store',
    skills: ['React', 'CSS'],
    descripcion:
      'Using Node.js and NPM to create an application that utilizes Express as the framework, EJS as the view engine, and Sequelize for database interaction through models.',
    demoURL: '',
    repoURL: '',
    anim: 'fade-left'
  }
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
