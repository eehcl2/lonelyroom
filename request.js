// /* ====== Common GET Request Function ====== */
// async function getRequest(url) {
//   return await fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
// }

// async function getProducts() {
//   const url = `http://openapi.seoul.go.kr:8088/68524a49706475643536794b555967/xml/culturalEventInfo/1/5/`;

//   try {
//     // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
//     const data = await getRequest(url);
//     // const randomData = Math.floor(Math.random() * 5); // 0보다 크고 1보다 작은 난수
//     // Math.floor : 소수점 이하를 버림
//     console.log(data);
//     //   const movieWapper = document.querySelector('.recent-img');
//     //   const movieInfoWrapper = document.querySelector('.recent-info');
//     //   const movieTitle = document.querySelector('.recent-title');
//     //   const mainMovie = data.data.movies[randomData];

//     //   const titleEl = `<h3>${mainMovie.title}</h3>`;
//     //   const imgEl = `<img src=${mainMovie.large_cover_image}>`;
//     //   const infoEl = `
//     //   <h4>Title : <span>${mainMovie.title}/span></h4>
//     //   <p>Genre : <span>${mainMovie.genres.join(', ')}</span></p>
//     //   <p>Rating : <span>${mainMovie.rating}</span></p>
//     //   <p>year : <span>${mainMovie.year}</span></p>
//     //   <a href="./detail.html?id=${mainMovie.id}" class="btn">Details</a>
//     //   `;

//     //   movieTitle.insertAdjacentHTML('beforeend', titleEl);
//     //   movieWapper.insertAdjacentHTML('beforeend', imgEl);
//     //   movieInfoWrapper.insertAdjacentHTML('beforeend', infoEl);
//   } catch (error) {
//     // 실패할 경우 두번째 코드 블럭으로 이동
//     console.log('Error : ', error);
//   }
// }

// getProducts(1);

// // const numbers = document.querySelectorAll('.numbers span');
// // numbers.forEach((number) => {
// //   number.addEventListener('click', function () {
// //     getProducts(this.textContent);
// //   });
// // });

// async function getRequest(url) {
//   return await fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.text(); // XML 형식으로 데이터를 받음
//   });
// }

// async function getProducts() {
//   const url = `http://openapi.seoul.go.kr:8088/68524a49706475643536794b555967/xml/culturalEventInfo/1/5/`;

//   try {
//     // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
//     const data = await getRequest(url);
//     // XML 데이터를 파싱하거나 원하는 방식으로 처리
//     console.log(data);
//   } catch (error) {
//     // 실패할 경우 두번째 코드 블럭으로 이동
//     console.log('Error : ', error);
//   }
// }

// getProducts(1);

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getProducts() {
  const url = `http://openapi.seoul.go.kr:8088/68524a49706475643536794b555967/json/culturalEventInfo/1/5/`;

  try {
    // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    // const randomData = Math.floor(Math.random() * 5); // 0보다 크고 1보다 작은 난수
    // Math.floor : 소수점 이하를 버림
    console.log(data);
    //   const movieWapper = document.querySelector('.recent-img');
    //   const movieInfoWrapper = document.querySelector('.recent-info');
    //   const movieTitle = document.querySelector('.recent-title');
    //   const mainMovie = data.data.movies[randomData];

    //   const titleEl = `<h3>${mainMovie.title}</h3>`;
    //   const imgEl = `<img src=${mainMovie.large_cover_image}>`;
    //   const infoEl = `
    //   <h4>Title : <span>${mainMovie.title}/span></h4>
    //   <p>Genre : <span>${mainMovie.genres.join(', ')}</span></p>
    //   <p>Rating : <span>${mainMovie.rating}</span></p>
    //   <p>year : <span>${mainMovie.year}</span></p>
    //   <a href="./detail.html?id=${mainMovie.id}" class="btn">Details</a>
    //   `;

    //   movieTitle.insertAdjacentHTML('beforeend', titleEl);
    //   movieWapper.insertAdjacentHTML('beforeend', imgEl);
    //   movieInfoWrapper.insertAdjacentHTML('beforeend', infoEl);
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts();

// const numbers = document.querySelectorAll('.numbers span');
// numbers.forEach((number) => {
//   number.addEventListener('click', function () {
//     getProducts(this.textContent);
//   });
// });
