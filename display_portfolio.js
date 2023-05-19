const projectsData = [
  {
    id: '01',
    name: 'Tonic',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
    featuredImage: 'cards/1.png',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '02',
    name: 'Tonia 2',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: 'cards/2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '03',
    name: 'Tonia 3',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: 'cards/3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '04',
    name: 'Tonia 4',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: 'cards/4.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
];

const generateTechnologyTags = (technologies) => {
  const html = technologies
    .map((technology) => `<li>${technology}</li>`)
    .join('\n');
  return html;
};

// console.log(projectsData);
const projects = document.querySelector('#projects');
const displayPopup = document.querySelector('#display-popup');
let output = ' ';
projectsData.forEach((project) => {
  output += `
        <div class="project-card">
          <div class="project-img">
            <img src="${project.featuredImage}" alt="">
          </div>
          <div class="project-details">
            <h2>${project.name}</h2>
            <ul class="programs">
              <li>${project.platform}</li>
              <li><i class="fa fa-circle"></i>${
  project.role
}<i class="fa fa-circle"></i></li>
              <li>${project.year}</li>
            </ul>
            <p>${project.description}</p>
            <ul class="tags">
              ${generateTechnologyTags(project.technologies)}
            </ul>
            <button id="open-project-popup-${
  project.id
}" class="btn-outline">See project</button>
          </div>
        </div>
      `;
});
projects.innerHTML = output;

const generateProjectPopUps = (projectDetails) => {
  const {
    name,
    role,
    platform,
    year,
    descriptionlong,
    featuredImage,
    technologies,
    linkToLiveVersion,
    linkToSource,
  } = projectDetails;

  return `
      <div class="container">
          <div class="modal-card">
            <div class="modal-header">
              <h2>${name}</h2>
              <i id="close-modal-popup" class="fas fa-times"></i>
            </div>
            <ul class="programs">
              <li>${platform}</li>
              <li><i class="fa fa-circle"></i>${role}<i class="fa fa-circle"></i></li>
              <li>${year}</li>
            </ul>
            <img src="${featuredImage}" alt="">
            <div class="modal-details">
              <p>${descriptionlong}.</p>
              <div class="modal-group">
                <ul class="tags">
                ${generateTechnologyTags(technologies)}
                </ul>
                <hr style="margin-top: 20px; color: #eee;">
                <div class="btn-group">
                  <a href="${linkToLiveVersion}" class="btn-outline"> See live <i class="fa fa-circle"></i></a>
                  <a href="${linkToSource}" class="btn-outline"> See source <i class="fab fa-github-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
};

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  displayPopup.innerHTML = html;
  displayPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

projects.addEventListener('click', (e) => {
  e.preventDefault();

  const { id } = e.target;
  if (id.startsWith('open-project-popup-')) {
    const projectId = id.split('-')[3];
    handleModalOpen(projectId);
  }
});

displayPopup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'close-modal-popup') {
    displayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

window.onclick = (e) => {
  if (e.target === displayPopup) {
    displayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
