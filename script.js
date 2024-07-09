document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const experienceLink = document.getElementById('experience-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const resumeLink = document.getElementById('resume-link');
  
    if (currentPath.includes('about')) {
      aboutLink.style.fontWeight = 'bold';
    } else if (currentPath.includes('contact')) {
      contactLink.style.fontWeight = 'bold';
    } else if (currentPath.includes('resume')) {
      resumeLink.style.fontWeight = 'bold';
    } else {
      experienceLink.style.fontWeight = 'bold';
    }
  });
  