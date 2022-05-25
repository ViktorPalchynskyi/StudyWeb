// const req = new XMLHttpRequest();
// req.addEventListener('load', function() {
//    console.log('IT WOKED!!');
//    const result = JSON.parse(this.responseText);
//    const filmURL = result.results[0].films[0];   
//    const filmReq = new XMLHttpRequest();

//    filmReq.addEventListener('load', function() {
//       console.log('Film data', JSON.parse(this.responseText));
//    });
   
//    filmReq.addEventListener('error', () => {
//       console.log('filmReq ERROR');
//    });
   
//    filmReq.open('GET', filmURL);
//    filmReq.send();
// });

// req.addEventListener('error', () => {
//    console.log('ERROR');
// });

// req.open('GET', 'https://swapi.dev/api/planets/');
// req.send();
// console.log('REQUEST SEND');

// const req = fetch('https://swapi.dev/api/planets/');

// const checkStatusAndParse = (res) => {
//    console.log(res);
//    if (!res.ok) throw new Error(`Status Code Error: ${res.status}`);
//    else return res.json();
// }

// req
// .then(checkStatusAndParse)
// .then(data => {
//    console.log('data', data);
//    const planetURL = data.results[3].films[0];
//    console.log(data);
//    return fetch(planetURL);
// })
// .then(checkStatusAndParse)
// .then(data => {
//    console.log('data2', data);
//    const h1 = document.createElement('h1');
//    const p = document.createElement('p');
//    h1.innerText = data.title;
//    p.innerText = data.opening_crawl;
//    document.body.append(h1,p)
// })
// .catch(err => console.log(err));

axios.get('https://swapi.dev/api/planets/')
   .then(res => console.log(res))