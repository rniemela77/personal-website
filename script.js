// Project data
const projects = [
  {
    id: "chuzapath",
    title: "Chuzapath",
    tags: ["AI", "Vue.js"],
    description:
      "A choose-your-own-adventure game that uses AI to generate dynamic stories and options based on player choices.",
    technologies: "Vue.js (v3), Vite, Netlify Functions, OpenAI API",
    features: [
      "AI-powered branching storytelling experience",
      "Secure API integration via Netlify Functions",
      "Responsive Vue.js component architecture",
    ],
    links: {
      code: "https://github.com/rniemela77/CYOA-game",
      site: "https://chuzapath.netlify.app/",
    },
    image: "chuzapath.png",
  },
  {
    id: "systemtheme",
    title: "System Theme - Modern File Editor",
    tags: ["React", "TypeScript"],
    description:
      "A sleek and intuitive file editor application that mimics native system UI, featuring a draggable window interface with text and drawing capabilities in a beautiful, translucent design inspired by modern operating systems.",
    technologies: "React 19, TypeScript, Vite, GitHub Pages",
    features: [
      "Implemented a responsive window management system with drag-and-drop functionality and resizable interface",
      "Built a real-time file system with support for both text and drawing content types",
      "Designed a modern UI with backdrop blur effects and system-native aesthetics",
      "Created a persistent storage system for seamless user experience across sessions",
    ],
    links: {
      site: "https://rniemela77.github.io/system-theme/",
      code: "https://github.com/rniemela77/system-theme",
    },
    image: "system-theme.png",
  },
  {
    id: "hemisphere",
    title: "Hemisphere Hunter - Dual-Control Mobile Brain Training Game",
    tags: ["JavaScript", "Phaser.js"],
    description:
      "A touchscreen game that trains bilateral coordination and cognitive synchronization by having players simultaneously control two circles to catch moving targets, promoting improved left- and right-brain communication.",
    technologies: "Phaser 3, JavaScript",
    features: [
      "Built with Phaser.js, a JavaScript game-development framework",
      "Optimized for mobile devices, with a focus on low CPU/battery usage",
    ],
    links: {
      site: "https://rniemela77.github.io/left-right-brain-game/",
      code: "https://github.com/rniemela77/left-right-brain-game",
    },
    image: "hemispherehunter.png",
  },
  {
    id: "island",
    title: "Island Forest Explorer",
    tags: ["Three.js"],
    description:
      "A 3D interactive forest where you can walk around and explore the environment.",
    technologies: "Three.js, JavaScript, WebGL, GitHub Pages",
    features: [
      "Created an immersive 3D forest environment using Three.js",
      "Implemented first-person navigation controls for exploring the virtual island",
      "Optimized 3D assets and performance for smooth browser-based experience",
    ],
    links: {
      site: "https://rniemela77.github.io/island/",
      code: "https://github.com/rniemela77/island",
    },
    image: "island.png",
  },
  {
    id: "darlingdinnersready",
    title: "DarlingDinnersReady",
    tags: ["Vue.js", "CMS"],
    description: "A blog for a family member's project.",
    technologies: "Vue.js, Gridsome, Sanity.io",
    features: [
      "Uses the Vue.js framework to build the site's front-end.",
      "Uses the Gridsome framework to improve page speed and SEO, by serving the user pre-generated HTML files which turn into a hydrating Vue.js app.",
      "Fetches and renders data from the content manager Sanity.io to allow the blog's author to edit and publish their posts.",
    ],
    links: {
      site: "https://darlingdinnersready.com",
      code: "https://github.com/rniemela77/darlingdinnersready.com",
    },
    image: "darlingdinnersready.png",
  },
  {
    id: "pyportal",
    title: "PyPortal Time Zone Display",
    tags: ["Python", "IoT"],
    description:
      "A custom application for PyPortal device that displays time from different time zones.",
    technologies: "Python, API Integration, PyPortal",
    features: [
      "Fetches time data for two time zones via API calls",
      "Displays dual time zones on a single screen with ASCII animations",
      "Features touch input and adaptive display based on time of day",
    ],
    image: "pyportal.png",
  },
  {
    id: "innerdecision",
    title: "Inner Decision Blog",
    tags: ["Vue.js", "Blog", "Markdown"],
    description:
      "A personal blog focused on learning, philosophy, and self-improvement.",
    technologies: "Vuepress, JavaScript, Markdown",
    features: [
      "Built with Vuepress for fast, SEO-friendly static site generation",
      "Features a clean, responsive design optimized for readability",
      "Content written in Markdown for easy maintenance and publishing",
    ],
    links: {
      site: "https://www.innerdecision.com",
    },
    image: "innerdecision.png",
  },
];

const projectsList = document.getElementById("projects-list");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "project";
  projectElement.innerHTML = `
    <img src="assets/images/${
      project.image
    }" width="100%" height="200px" alt="Screenshot of${project.title}">

    <div class="project-info">
    <h3>${project.title}</h3>
    <p>${project.description}</p>

    <h4>Technologies:</h4> <p>${project.technologies}</p>

    <h4>Features:</h4> <ul>${project.features
      .map((feature) => `<li>${feature}</li>`)
      .join("")}</ul>
      
      ${project?.links ? '<div class="project-links">' : ''}
      ${project?.links?.site ? `<a href="${project.links?.site}" target="_blank" class="btn">View Site</a>` : ''}
      ${project?.links?.code ? `<a href="${project.links?.code}" target="_blank" class="btn">View Code</a>` : ''}
      ${project?.links ? '</div>' : ''}
    </div>
    `;

  projectsList.appendChild(projectElement);
});

const viewMoreButton = document.getElementById("view-more-button");
viewMoreButton.addEventListener("click", () => {
  projectsList.classList.toggle("collapsed");

  if (projectsList.classList.contains("collapsed")) {
    viewMoreButton.textContent = "See more projects";
  } else {
    viewMoreButton.textContent = "See less projects";
  }
});

// Update copyright year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themePanel = document.getElementById('theme-panel');
  const themeBackdrop = document.getElementById('theme-backdrop');
  const closePanelBtn = document.getElementById('close-theme-panel');
  const lcdToggleBtn = document.getElementById('lcd-toggle');
  const lcdStatus = document.getElementById('lcd-status');
  const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
  const darkModeStatus = document.getElementById('dark-mode-status');
  const themeHint = document.getElementById('theme-hint');

  // Check localStorage for saved theme preferences
  let isLcdActive = localStorage.getItem('lcd-effect') === 'true';
  let isDarkModeActive = localStorage.getItem('dark-mode') === 'true';
  
  // Check if hint has been shown before
  const hasSeenHint = localStorage.getItem('theme-hint-seen') === 'true';
  
  // Hide hint if user has seen it before
  if (hasSeenHint && themeHint) {
    themeHint.style.display = 'none';
  }

  // Apply saved themes on page load
  if (isLcdActive && lcdStatus) {
    document.body.classList.add('lcd-effect');
    lcdStatus.textContent = 'ON';
    lcdStatus.classList.add('active');
  }
  
  if (isDarkModeActive && darkModeStatus) {
    document.body.classList.add('dark-mode');
    darkModeStatus.textContent = 'ON';
    darkModeStatus.classList.add('active');
  }

  // Hide hint function
  function hideHint() {
    if (themeHint) {
      themeHint.style.opacity = '0';
      setTimeout(() => {
        themeHint.style.display = 'none';
      }, 300);
      localStorage.setItem('theme-hint-seen', 'true');
    }
  }

  // Toggle theme panel visibility
  function toggleThemePanel() {
    if (!themePanel || !themeBackdrop) return;
    
    // Hide hint when button is clicked
    hideHint();
    
    const isHidden = themePanel.classList.contains('hidden');
    
    if (isHidden) {
      themePanel.classList.remove('hidden');
      themeBackdrop.classList.remove('hidden');
    } else {
      themePanel.classList.add('hidden');
      themeBackdrop.classList.add('hidden');
    }
  }

  // Close theme panel
  function closeThemePanel() {
    if (!themePanel || !themeBackdrop) return;
    
    themePanel.classList.add('hidden');
    themeBackdrop.classList.add('hidden');
  }

  // Toggle LCD effect
  function toggleLcdEffect() {
    if (!lcdStatus) return;
    
    isLcdActive = !isLcdActive;
    
    if (isLcdActive) {
      document.body.classList.add('lcd-effect');
      lcdStatus.textContent = 'ON';
      lcdStatus.classList.add('active');
    } else {
      document.body.classList.remove('lcd-effect');
      lcdStatus.textContent = 'OFF';
      lcdStatus.classList.remove('active');
    }
    
    // Save preference to localStorage
    localStorage.setItem('lcd-effect', isLcdActive);
  }

  // Toggle Dark Mode
  function toggleDarkMode() {
    if (!darkModeStatus) return;
    
    isDarkModeActive = !isDarkModeActive;
    
    if (isDarkModeActive) {
      document.body.classList.add('dark-mode');
      darkModeStatus.textContent = 'ON';
      darkModeStatus.classList.add('active');
    } else {
      document.body.classList.remove('dark-mode');
      darkModeStatus.textContent = 'OFF';
      darkModeStatus.classList.remove('active');
    }
    
    // Save preference to localStorage
    localStorage.setItem('dark-mode', isDarkModeActive);
  }

  // Event listeners
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleThemePanel);
  }
  if (closePanelBtn) {
    closePanelBtn.addEventListener('click', closeThemePanel);
  }
  if (themeBackdrop) {
    themeBackdrop.addEventListener('click', closeThemePanel);
  }
  if (lcdToggleBtn) {
    lcdToggleBtn.addEventListener('click', toggleLcdEffect);
  }
  if (darkModeToggleBtn) {
    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
  }

  // Close panel when clicking outside (escape key)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && themePanel && !themePanel.classList.contains('hidden')) {
      closeThemePanel();
    }
  });

  // Prevent panel from closing when clicking inside it
  if (themePanel) {
    themePanel.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});

// Featured Project Slide Navigation
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  const slideIndicator = document.getElementById('slide-indicator');
  
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  
  // Initialize the first slide as active
  function initializeSlides() {
    if (slides.length > 0) {
      slides[0].classList.add('active');
      updateSlideIndicator();
      updateButtonStates();
    }
  }
  
  // Show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the current slide
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    
    // Update slide indicator
    updateSlideIndicator();
    
    // Update button states
    updateButtonStates();
  }
  
  // Update the slide indicator text
  function updateSlideIndicator() {
    if (slideIndicator) {
      slideIndicator.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    }
  }
  
  // Update button states (disable/enable based on current slide)
  function updateButtonStates() {
    if (prevBtn) {
      prevBtn.disabled = currentSlideIndex === 0;
      prevBtn.style.opacity = currentSlideIndex === 0 ? '0.5' : '1';
    }
    
    if (nextBtn) {
      nextBtn.disabled = currentSlideIndex === totalSlides - 1;
      nextBtn.style.opacity = currentSlideIndex === totalSlides - 1 ? '0.5' : '1';
    }
  }
  
  // Go to previous slide
  function goToPreviousSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    }
  }
  
  // Go to next slide
  function goToNextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }
  }
  
  // Event listeners for navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', goToPreviousSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', goToNextSlide);
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      goToPreviousSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  });
  
  // Initialize slides on page load
  initializeSlides();
});
