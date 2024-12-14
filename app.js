let maindiv = document.getElementById('main-div');
let inputField = document.getElementById('inputField');


const fetchAPI = async() => {
    var url = 'https://newsapi.org/v2/everything?' +
          `q=${inputField.value}&` +
          'from=2024-12-06&' +
          'sortBy=popularity&' +
          'apiKey=41b3946b8f0e4b8f9da01940be75098c';

var req = new Request(url);

let data = await fetch(req)
let response = await data.json();
let arr = response.articles;
console.log(arr);
arr.map((e,i)=>{
    maindiv.innerHTML += `<div class="card" style="width: 18rem;">
    <img src=${e.urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description}</p>
    <a href=${e.url} target='_blank' class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})
}



// let arr = fetchAPI()
// console.log(arr);

const search = () => {
    maindiv.innerHTML = '';
    fetchAPI()
}




// console.log("heelooo");

// const fetchByPromise = new Promise((res,rej) => {
//     const getData = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((resolve)=>{
//         res(resolve)
//     })
//     .catch((err)=> rej(err))
    
// })

// fetchByPromise
// .then((data)=> {
//     return data.json()
//     }).then((result)=>{
//         console.log(result);
//     })
// .catch((err)=> console.log(err))