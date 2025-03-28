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
