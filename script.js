// Modal Image Viewer
document.addEventListener('DOMContentLoaded', function() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  const modalImage = document.createElement('img');
  modalImage.className = 'modal-image';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'modal-close';
  closeButton.innerHTML = '&times;';
  
  // Append elements to the DOM
  modalContent.appendChild(modalImage);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Get only the main images within project sections, excluding the reflection images
  const projectImages = document.querySelectorAll('.project-image .image-with-reflection > img:not(.reflection img)');
  
  // Add click event to each image
  projectImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImage.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });
  
  // Close modal when clicking the close button
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
});

// Project data
const projects = [
  {
    id: 'somni',
    title: 'Somni - AI-Powered Personality Analysis App',
    tags: ['AI', 'Vue.js', 'Serverless Backend'],
    description: 'A sophisticated personality assessment application that offers users insightful self-discovery through thoughtfully designed quizzes and detailed personality analysis.',
    technologies: 'Vue.js 3, Vite, Pinia, Firebase, Stripe, Netlify',
    features: [
      'Implemented secure user authentication and data storage with Firebase',
      'Integrated Stripe payment processing for premium personality insights',
      'Built scalable serverless architecture with Netlify Functions'
    ],
    links: {
      site: 'https://somni.netlify.app/',
      code: 'https://github.com/rniemela77/somni'
    },
    image: 'somni.png'
  },
  {
    id: 'systemtheme',
    title: 'System Theme - Modern File Editor',
    tags: ['React', 'TypeScript'],
    description: 'A sleek and intuitive file editor application that mimics native system UI, featuring a draggable window interface with text and drawing capabilities in a beautiful, translucent design inspired by modern operating systems.',
    technologies: 'React 19, TypeScript, Vite, GitHub Pages',
    features: [
      'Implemented a responsive window management system with drag-and-drop functionality and resizable interface',
      'Built a real-time file system with support for both text and drawing content types',
      'Designed a modern UI with backdrop blur effects and system-native aesthetics',
      'Created a persistent storage system for seamless user experience across sessions'
    ],
    links: {
      site: 'https://rniemela77.github.io/system-theme/',
      code: 'https://github.com/rniemela77/system-theme'
    },
    image: 'system-theme.png'
  },
  {
    id: 'chuzapath',
    title: 'Chuzapath',
    tags: ['AI', 'Vue.js'],
    description: 'A choose-your-own-adventure game that uses AI to generate dynamic stories and options based on player choices.',
    technologies: 'Vue.js (v3), Vite, Netlify Functions, OpenAI API',
    features: [
      'AI-powered branching storytelling experience',
      'Secure API integration via Netlify Functions',
      'Responsive Vue.js component architecture'
    ],
    links: {
      site: 'https://chuzapath.netlify.app/'
    },
    image: 'chuzapath.png'
  },
  {
    id: 'island',
    title: 'Island Forest Explorer',
    tags: ['Three.js'],
    description: 'A 3D interactive forest where you can walk around and explore the environment.',
    technologies: 'Three.js, JavaScript, WebGL, GitHub Pages',
    features: [
      'Created an immersive 3D forest environment using Three.js',
      'Implemented first-person navigation controls for exploring the virtual island',
      'Optimized 3D assets and performance for smooth browser-based experience'
    ],
    links: {
      site: 'https://rniemela77.github.io/island/',
      code: 'https://github.com/rniemela77/island'
    },
    image: 'island.png'
  },
  {
    id: 'darlingdinnersready',
    title: 'DarlingDinnersReady',
    tags: ['Vue.js', 'CMS'],
    description: 'A blog for a family member\'s project.',
    technologies: 'Vue.js, Gridsome, Sanity.io',
    features: [
      'Uses the Vue.js framework to build the site\'s front-end.',
      'Uses the Gridsome framework to improve page speed and SEO, by serving the user pre-generated HTML files which turn into a hydrating Vue.js app.',
      'Fetches and renders data from the content manager Sanity.io to allow the blog\'s author to edit and publish their posts.'
    ],
    links: {
      site: 'https://darlingdinnersready.com',
      code: 'https://github.com/rniemela77/darlingdinnersready.com'
    },
    image: 'darlingdinnersready.png'
  },
  {
    id: 'pyportal',
    title: 'PyPortal Time Zone Display',
    tags: ['Python', 'IoT'],
    description: 'A custom application for PyPortal device that displays time from different time zones.',
    technologies: 'Python, API Integration, PyPortal',
    features: [
      'Fetches time data for two time zones via API calls',
      'Displays dual time zones on a single screen with ASCII animations',
      'Features touch input and adaptive display based on time of day'
    ],
    image: 'pyportal.png'
  },
  {
    id: 'innerdecision',
    title: 'Inner Decision Blog',
    tags: ['Vue.js', 'Blog', 'Markdown'],
    description: 'A personal blog focused on learning, philosophy, and self-improvement.',
    technologies: 'Vuepress, JavaScript, Markdown',
    features: [
      'Built with Vuepress for fast, SEO-friendly static site generation',
      'Features a clean, responsive design optimized for readability',
      'Content written in Markdown for easy maintenance and publishing'
    ],
    links: {
      site: 'https://www.innerdecision.com'
    },
    image: 'innerdecision.png'
  }
];

// Initialize Alpine.js components
document.addEventListener('alpine:init', () => {
  Alpine.data('projectCarousel', () => ({
    projects,
    currentIndex: 0,
    modalOpen: false,
    modalImage: '',

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },

    openModal(event) {
      const modal = document.querySelector('.image-modal');
      const modalComponent = Alpine.$data(modal);
      modalComponent.isOpen = true;
      modalComponent.imageSrc = event.target.src;
      document.body.style.overflow = 'hidden';
    }
  }));
});

// Handle escape key for modal
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.image-modal');
    const modalComponent = Alpine.$data(modal);
    if (modalComponent.isOpen) {
      modalComponent.isOpen = false;
      document.body.style.overflow = '';
    }
  }
});
