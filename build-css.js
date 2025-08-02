const fs = require('fs');
const path = require('path');

// CSS files in order of loading
const cssFiles = [
  'src/styles/base.css',
  'src/styles/navigation.css',
  'src/styles/bio.css',
  'src/styles/contact-skills.css',
  'src/styles/education-certifications.css',
  'src/styles/experience.css',
  'src/styles/featured-project.css',
  'src/styles/projects.css',
  'src/styles/contact-form.css',
  'src/styles/footer.css',
  'src/styles/buttons.css',
  'src/styles/theme-toggle.css',
  'src/styles/lcd-effect.css',
  'src/styles/dark-mode.css'
];

// Bundle all CSS files
function bundleCSS() {
  let bundledCSS = '';
  
  cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      bundledCSS += `/* ${file} */\n${content}\n\n`;
    } else {
      console.warn(`Warning: ${file} not found`);
    }
  });
  
  // Write bundled CSS
  fs.writeFileSync('dist/styles.bundle.css', bundledCSS);
  console.log('✅ CSS bundled to dist/styles.bundle.css');
}

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

bundleCSS(); 