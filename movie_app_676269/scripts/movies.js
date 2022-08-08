// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.querySelector("#wallet").textContent = "₹ " + localStorage.getItem("amount")
// document.querySelector("#ss").addEventListener("click",search)
const apiKey = "642d9cdf"
let id;

async function searchMovies(movie){
    try{
       let url = `http://www.omdbapi.com/?s=${movie}&page=1&apikey=${apiKey}`
        let res = await fetch (url)
        let data = await res.json()

        
        return data.Search

    }
    catch(err){
        console.log(err)
   }
}
// var movie = JSON.parse(localStorage.getItem(movie)) || []
// function search(){
//     var input = document.getElementById("search").value;
//     let url = `http://www.omdbapi.com/?s=${input}&page=1&apikey=642d9cdf`
//     fetch (url).then(function(res){
//         return res.json
//     })
//     .then(function(res){
//         append(res.Search)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// let url = "http://www.omdbapi.com/?apikey=642d9cdf=thor"
// let getData = async() =>{
//     let input = document.getElementById("search").value;
//     let url = `http://www.omdbapi.com/?s=${input}&page=1&apikey=642d9cdf`
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data)
// }

// let id;
// let debounce = (delay,func) =>{
//     if(id){
//         clearTimeout(id)
//     }
//     id = setTimeout(()=>{
//         func()
//     },delay)
// }

// function append(data){
//       window.location.href = "movies.html"
//     localStorage.setItem("movie",JSON.stringify(data))
//     console.log(movie)
// }
function appendMovies(movies){
    const searchBar = document.getElementById("movies")
    searchBar.innerHTML = null

    movies.map((elem)=>{
        
       let p = document.createElement("p")
       p.innerText = elem.Title

       let image = document.createElement("img")
       image.setAttribute("src",elem.Poster)
       image.setAttribute("class","images")

       let btn = document.createElement("button")
       btn.innerText = "Book now"
       btn.setAttribute("class",function(){
        let arr = []
        arr.push(elem)
        localStorage.setItem("moviee",JSON.stringify(arr))
        window.location.href = "checkout.html"
       })

       searchBar.append(p,image,btn)
        

    })
        
     
}

async function main (){
    const movie = document.getElementById("search").value;

    let movies = await searchMovies(movie)
    console.log(movies)


    if(movies !== undefined){
        appendMovies(movies)
    }

}
 
function debounceFunction(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}

//  var values = JSON.parse(localStorage.getItem("movie")) || []
// console.log(values)
// values.map(function(elem){
//     var div = document.createElement("div")
//     var title = document.createElement("h3")
//     title.innerText = elem.Title

//     var image = document.createElement("img")
//     image.setAttribute("src","images")
//     image.setAttribute("class","images")
//     var year = document.createElement("h4")
//     year.innerText = elem.Year;
//     div.append(image,title,year)
//     document.querySelector("#movies").append(div)
// })