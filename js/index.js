import { project } from '../js/data/project.js';

let mainSlide = project.filter(item => item.projectSize === 'main');
/* textCpm */
let projectInfo = document.querySelector('.textCon .projectInfo');
let btnWrap = document.querySelector('.textCon .btnWrap');
/* imgSlide */
let imgSlideWrap = document.querySelector('.swiper-wrapper');

mainSlide.forEach(item => {
  imgSlideWrap.insertAdjacentHTML('beforeend', `
    <div class="swiper-slide" data-id="${item.id}">
      <img src="${item.mockupImg}" alt="${item.title}">
    </div>
  `);
});

/* 스와이퍼 슬라이드 */
var imgSwiper  = new Swiper(".imgSlide .mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".slideBtn .pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
});

function slideUpDate(item){
  projectInfo.innerHTML = `
    <p class="projectSize flex_center">${item.projectSize}</p>
    <p class="projectTitle title_24">${item.title}</p>
    <p class="program">${item.program}</p>
    <p class="use">${item.use}</p>
  `;
  btnWrap.innerHTML = `
    <div class="githubBtn btn"><a href="${item.githubURL}" target="_blank">github</a></div>
    <div class="siteBtn btn"><a href="${item.websiteURL}" target="_blank">site</a></div>
  `;
}
slideUpDate(mainSlide[0]);


imgSwiper.on('slideChange', () => {
  let index = imgSwiper.realIndex;
  
  slideUpDate(mainSlide[index]);
});

/* goDetail */
function goDetail(id) {
  location.href = `page/detail.html?id=${id}`;
}

imgSlideWrap.addEventListener('click', (e) => {
  
  let item = e.target.closest('.swiper-slide');
  if (!item) return;

  let id = item.dataset.id;
  goDetail(id);

});







/* emailjs */
emailjs.init({
  publicKey: 'Geb0kpFIrGNc-Y4PB',

  // 봇 브라우저 차단
  blockHeadless: true,

  // 특정 이메일 차단
  /* blockList: {
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    watchVariable: 'userEmail',
  }, */

  // 10초에 1번만 요청 허용
  limitRate: {
    id: 'app',
    throttle: 10000,
  },
});

function sendEmail(templateParams) {
  emailjs.send('service_0d0slcs', 'template_7ki1f37', templateParams)
    .then(function () {
      alert('메일이 성공적으로 보내졌습니다.');
    })
    .catch(function () {
      alert('메일 전송에 실패했습니다.');
    });
}

function inputFillSend() {
  let templateParams = {
    name: document.querySelector('#name').value.trim(),
    email: document.querySelector('#email').value.trim(),
    subject: document.querySelector('#subject').value.trim(),
    content: document.querySelector('#content').value.trim(),
  };

  if (templateParams.name && templateParams.email && templateParams.subject && templateParams.content) {
    sendEmail(templateParams);
  } else {
    alert('메일 형식을 모두 채워주세요.');
  }
}

let sendButton = document.querySelector(".sendBtn");
sendButton.addEventListener('click', inputFillSend);

