const inputText = document.getElementById('inputText');
const addBookmark = document.getElementById('addBookmark');
const bookmarkContainer = document.getElementById('bookmarkContainer');
const deleteAll = document.getElementById('deleteAll');


function isValidURL(url) {
    const check = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w- .\/?%&=]*)?$/i;


    return check.test(url)



}




addBookmark.addEventListener("click", () => {
    const url = inputText.value.trim();
    if (isValidURL(url)) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("BookmarkList");


        newDiv.innerHTML = `<ul class=" d-flex flex-row">
                    <li class="col-8">
                        <span>
                            <a href="${url}">${url}</a>
                        </span>
                    </li>
                    <div class="col-4 ms-5">
                        <button class="squishy squishy-neon edit"  >
                            <i data-lucide="zap"></i>
                            Edit
                        </button>
        
                        <button class="squishy squishy-neon delete" >
                            <i data-lucide="zap"></i>
                            Delete
                        </button>
                    </div>
                </ul>
            `;
        bookmarkContainer.appendChild(newDiv);

        inputText.value = "";

        editLink(newDiv);
        deleteLink(newDiv);

    }
    else {
        alert("Please enter a valid url..")
        inputText.value = "";
    }
})

deleteAll.addEventListener("click",()=>{
    bookmarkContainer.innerHTML= "";


    // alternate approach
    // while(bookmarkContainer.firstChild){
    //     bookmarkContainer.removeChild(bookmarkContainer.firstChild)
    // }
})

editLink = (newDiv)=>{


    
    const edit = newDiv.querySelector(".edit");
    const oldValue = newDiv.querySelector("a");

    edit.addEventListener("click", ()=>{
        const newURL = prompt("Update",oldValue.getAttribute('href'));
        if(newURL && isValidURL(newURL))
        {
            oldValue.setAttribute("href", newURL);
            oldValue.innerHTML= newURL;
        }
        else if(newURL){
          alert("Please enter a Valid URL");
        }


    })
    
}

deleteLink = (newDiv) =>{

                const deleteButton = newDiv.querySelector(".delete");
                deleteButton.addEventListener("click", ()=>{

                    newDiv.remove();

                })
                
}


