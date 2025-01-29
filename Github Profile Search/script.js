 
  
//github api
let api = "https://api.github.com/users/";

let fetch = document.createElement("script");

//fetching axios from cdn
fetch.src = `https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`;

//fetching axios hash
fetch.integrity = `sha384-jLwhcmGu/RL8PSTUEl/559f8QVLL4QqM+HBvoZlt4F7XCdsdoDGAwW4nPFfoM7lU`;

fetch.crossOrigin = "anonymous";

//confirm axios onload
fetch.onload = function(){
    console.log("axios loaded");

}

//confirm axios onerror
fetch.onerror = function(){
    console.log("error loading axios");
}

document.head.appendChild(fetch);




//fetching HTML DOM elements
const userInput= document.getElementById('userInput');
const inputBox= document.getElementById('inputBox');
const main= document.getElementById('main');

//event listener for form submission
userInput.addEventListener('submit',(e)=>{
    //prevent default form submission
    e.preventDefault();
    //get user input
    let user = inputBox.value;

    if(user){
        userGetFunction(user);
        inputBox.value="";
    }
})

userGetFunction = (user) =>{


    //fetching user data and repo data from github api using axios and promise all method to fetch both data at the same time and then display the data in the DOM
    Promise.all([axios(api+user), axios(api+user+"/repos?sort=created")]).then(([userResponce, repoResponce])=>{
        userCard(userResponce.data);
        repoCard(repoResponce.data);
    }).catch((err)=>{
        console.log(err);
        main.innerHTML = `<h1>Error in loading page</h1>`;
    })


  
}




//function to display user data in the DOM
const userCard =(user) =>{
    let id = user.name || user.login;
    let userbio = user.bio ? `<p>${user.bio}</p>` : "";
    let cardElement = `
    <div class="card">
    <div>
    <img src="${user.avatar_url}" 
         alt="${user.name}" 
         class="avatar">
    </div>
    
    <div class="user-info">
    <h2>${id}</h2>
    <ul>
   
    <li>${user.followers} <strong>Followers</strong></li>
    <li>${user.following} <strong>Following</strong></li>
    <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div class="heading"><span>Latest Repo</span></div>
    <div id="repos">
  
    </div>
    </div>
    </div>`;
    main.innerHTML = cardElement;    

}


//function to display repo data in the DOM
const repoCard= (repodata)=>{
 
    let reposElement = document.getElementById("repos");
    reposElement.innerHTML = "";
  for(let i = 0 ; i < 5 && i < repodata.length; i++){
      let repo = repodata[i];
      let repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = `${repo.name}`;
        reposElement.appendChild(repoEl);
  
}

}
