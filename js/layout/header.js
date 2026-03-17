fetch('/layout/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    if (!document.body.classList.contains('home')) {
      document.querySelector('#header nav').style.display = 'none';
    }

    headerEvent();
  })
  .catch(err => console.error('Header 불러오기 실패: ', err));

function headerEvent(){
  let headerList = document.querySelectorAll('#header li');

  headerList.forEach(item => {
    item.addEventListener('click', () => {
      let target = item.dataset.target;
      let targetList = document.querySelector('.'+target);
      
      /* scrollIntoView() 메소드는 scrollIntoView()가 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤 */
      if(targetList){
        targetList.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  })
}