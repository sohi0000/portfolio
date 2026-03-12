fetch('/layout/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    if (!document.body.classList.contains('home')) {
      document.querySelector('#header nav').style.display = 'none';
    }
  })
  .catch(err => console.error('Header 불러오기 실패: ', err));