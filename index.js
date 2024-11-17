const squares = document.querySelectorAll('.square');
const contactMe = document.querySelector('.circle');
const dialog = document.getElementById('dialog');
const dialogContent = document.getElementById('dialog-content');
const closeBtn = document.getElementById('close-btn');

const dialogData = {
  "about-me": `
    <img src="./assets/profile.jpeg" alt="Thanmayee's Image" />
    <h2>Hello!</h2>
    <p>I am Thanmayee, a Computer Science student interested in mental health and technology. 
    I am passionate about merging these fields to create impactful solutions!</p>
  `,
  "experience": `
    <h2>Experience</h2>
    <ul>
      <li><b>ServiceNow:</b> Associate Quality Assurance Intern. Worked on writing test scripts and collaborating with teams.</li>
      <li><b>Wolong India Technology:</b> Full Stack Developer. Modernized JSP to use Spring Boot and Angular.</li>
      <li><b>Point Zero Solution:</b> Frontend Developer. Built applications using React.</li>
    </ul>
  `,
  "tech-stack": `
    <h2>Tech Stack</h2>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>Java (Basics), Python (Basics)</li>
      <li>Angular and Spring Boot</li>
      <li>Experience with Spring, Selenium, Angular and React</li>
    </ul>
  `,
  "projects": `
    <h2>Projects</h2>
    <ul>
      <li><a href="https://github.com/thanmayeem" target="_blank">
        <img src="./assets/github-icon.svg" alt="GitHub Icon" class="icon" /> My GitHub Profile</a>
      </li>
      <li>Portfolio Website</li>
      <li>Rock-Paper-Scissors and Dice Game</li>
      <li>Noti-Fy: Note-Taking App</li>
      <li>Electric Vehicle site</li>
      <li>AI Email SaaS App</li>
    </ul>
  `,
  "contact-me": `
    <h2>Contact Me</h2>
    <p>Feel free to reach out!</p>
    <a href="mailto:mthanmayee74@gmail.com">mthanmayee74@gmail.com</a>
    <br />
    <a href="https://www.linkedin.com/in/m-thanmayee-a3b536245" target="_blank">
      <img src="./assets/linkedIn.svg" alt="LinkedIn Icon" class="icon" /> LinkedIn</a>
  `
};

// Open dialog
const openDialog = (type) => {
  dialogContent.innerHTML = dialogData[type];
  dialog.classList.remove('hidden');
};

// event listeners to squares and contact circle
squares.forEach((square) => {
  square.addEventListener('click', () => {
    const type = square.getAttribute('data-dialog');
    openDialog(type);
  });
});

contactMe.addEventListener('click', () => {
  openDialog('contact-me');
});

// Close dialog
closeBtn.addEventListener('click', () => {
  dialog.classList.add('hidden');
});

// Close dialog when clicking outside the box
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.classList.add('hidden');
  }
});
