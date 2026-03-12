import { project } from '../data/project.js';

/* URLSearchParams 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드 */
let params = new URLSearchParams(location.search);
/* Number() 함수를 사용하여 숫자로 바꿀 수 있다. */
let id = Number(params.get("id"));

/* 해당 상품 찾기 */
let projectList = project.find(item => item.id === id);

let projectInfo = document.querySelector('.projectInfo');

function Info(item){
  projectInfo.innerHTML = `
    <div class="inner_main flex">
      <div class="imgArea flex">
        <img src="${item.mockupImg}" alt="project img">
      </div>
      <div class="infoArea flex_col">
        <div class="info">
          <div class="projectSize flex_center">${item.projectSize}</div>
          <p class="title title_24">${item.title}</p>
          <div>
            <span class="spanName">기간</span>
            <span class="period">${item.period}</span>
          </div>
          <div>
            <span class="spanName">프로젝트 멤버</span>
            <span class="members">${item.members}</span>
          </div>
          <div>
            <span class="spanName">제작 프로그램</span>
            <span class="program">${item.program}</span>
          </div>
          <div>
            <span class="use">${item.use}</span>
          </div>
        </div>
        <div class="btnWrap">
          <button class="btn"><a href="${item.githubURL}" target='_blank'>github</a></button>
          <button class="btn"><a href="${item.websiteURL}" target='_blank'>site</a></button>
        </div>
      </div>
    </div>
  `;
}
Info(projectList);