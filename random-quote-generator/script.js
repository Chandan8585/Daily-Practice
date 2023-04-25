const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener('click', jokeGenerator);
window.addEventListener('load', jokeGenerator);

let options = {
    method: "GET",
    headers: {"x-api-key": "zEKc4oVZZ3EnQWTbvGYRYw==90oYAtTjPi3deLKT"},
};

let url = "https://api.api-ninjas.com/v1/jokes?limit=1"

function jokeGenerator(){
    fetch(url, options).then((response)=> response.json()).then((data) =>
        // console.log(data[0].joke));
    (joke.innerText = data[0].joke));
}