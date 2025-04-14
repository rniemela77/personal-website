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

// Project Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Wait a short time to ensure all DOM elements are fully loaded and styled
  setTimeout(() => {
    const projectTabs = document.querySelectorAll('.project-tab');
    const projects = document.querySelectorAll('.project');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Ensure all projects are hidden initially
    projects.forEach(project => {
      project.classList.remove('active');
      project.style.display = 'none';
    });
    
    let currentIndex = 0;
    const projectIds = Array.from(projects).map(project => project.id);
    
    // Function to show the current project
    function showProject(index) {
      // Hide all projects with both class and inline style
      projects.forEach(project => {
        project.classList.remove('active');
        project.style.display = 'none';
      });
      
      // Remove active class from all tabs
      projectTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Show only the current project with both class and inline style
      projects[index].classList.add('active');
      projects[index].style.display = 'flex';
      
      // Add active class to current tab
      const currentTabId = projectIds[index];
      const currentTab = document.querySelector(`.project-tab[data-project="${currentTabId}"]`);
      if (currentTab) {
        currentTab.classList.add('active');
      }
      
      // Update current index
      currentIndex = index;
    }
    
    // Add click event to each tab
    projectTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const index = projectIds.indexOf(projectId);
        if (index !== -1) {
          showProject(index);
        }
      });
    });
    
    // Add click event to previous button
    prevBtn.addEventListener('click', function() {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = projects.length - 1;
      }
      showProject(newIndex);
    });
    
    // Add click event to next button
    nextBtn.addEventListener('click', function() {
      let newIndex = currentIndex + 1;
      if (newIndex >= projects.length) {
        newIndex = 0;
      }
      showProject(newIndex);
    });
    
    // Initialize the carousel with the first project
    showProject(0);
    
    // Fix for any projects that might still be visible after initialization
    projects.forEach((project, idx) => {
      if (idx !== 0) {
        project.classList.remove('active');
        project.style.display = 'none';
      }
    });
  }, 100); // Short delay to ensure everything is loaded
});
