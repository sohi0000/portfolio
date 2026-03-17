import { project } from '../data/project.js';

let projList = document.querySelector('main section ul');

projList.innerHTML = project.map(item => `
    <li class="projectList" data-id="${item.id}">
      <img src="${item.mockupImg}" alt="">
      <div class="info flex_col">
        <div class="txtWrap">
          <p class="projSize">${item.projectSize}</p>
          <p class="projTitle">${item.title}</p>
          <p class="projProg">${item.program}</p>
          <p class="projUse">${item.use}</p>
        </div>
        <div class="btnWrap">
          <button ${item.websiteURL ? '' : 'disabled'}>
            <a href="${item.websiteURL}" target="_blank">site</a>
          </button>
          <button ${item.githubURL ? '' : 'disabled'}>
            <a href="${item.githubURL}" target="_blank">github</a>
          </button>
        </div>
      </div>
    </li>
  `).join('');


/* goDetail */
function goDetail(id) {
  location.href = `detail.html?id=${id}`;
}

projList.addEventListener('click', (e)=> {
  let BtnWrap = e.target.closest('.btnWrap');
  if(BtnWrap){
    e.stopPropagation();
    return;
  }

  let item = e.target.closest('.projectList');
  if (!item) return;

  let id = item.dataset.id;
  goDetail(id);
});