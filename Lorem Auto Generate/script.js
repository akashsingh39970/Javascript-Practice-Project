// Get DOM elements
const tags = document.getElementById("tags");
const include = document.getElementById('include');
const output = document.querySelector(".output");
const generateButton = document.getElementById("generate");
const paragraphs = document.getElementById("paragraphs");
const paragraphsValue = document.getElementById("paragraphsValue");
const words = document.getElementById("words");
const wordsValue = document.getElementById("wordsValue");
const casetype = document.getElementById("casetype");





// Tags to add to the dropdown
const newtag = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

// Populate the dropdown
newtag.forEach(newoption => {
    const optiondata = document.createElement('option');
    optiondata.value = newoption; // Set the value
    optiondata.textContent = `<${newoption}>`; // Set the text
    tags.appendChild(optiondata); // Append to the select element
});




//Event Listner
paragraphs.addEventListener("input", updateParagraphsValue);
generateButton.addEventListener("click", generateLoremIpsum);
words.addEventListener("input", updateWordsValue);




// Paragraph update number function
function updateParagraphsValue(){

 paragraphsValue.innerHTML = paragraphs.value;

}

function updateWordsValue(){

  wordsValue.innerHTML = words.value;

}




 //button event Function
function generateLoremIpsum()
 {  
    let Lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra nibh. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Sagittis purus sit amet volutpat consequat mauris. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet mattis vulputate. Enim sed faucibus turpis in eu. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Nulla pharetra diam sit amet nisl suscipit. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Dis parturient montes nascetur ridiculus mus. Justo nec ultrices dui sapien eget. Enim tortor at auctor urna nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc.`;
    let newLorem = "";
     
    //converting to string
    Lorem = String(Lorem); 
    

    //converting to string to array
    const loremIpsumArrayArr = Lorem.split(" ");

    for(let j = 0; j < words.value; j++ ){
      
     

      newLorem += loremIpsumArrayArr[j] + " " 
      
    }


    //change uppercase and lowercase

    if(casetype.value === 'uppercase')
    {
      newLorem = newLorem.toUpperCase();
    }
    else{
      newLorem = newLorem.toLowerCase();
    }

   

    



    

    //blank the output
    output.innerHTML = "";

    // Ensure a tag is selected
    if (tags.value)
      { 

       
        for(let i = 0; i<paragraphs.value;i++){
      
          
        // Include HTML
        if(include.value === 'Yes')
          {
           output.innerHTML += `<${tags.value}>${newLorem}</${tags.value}>`;  
          }
        else{
             output.innerHTML  += `${newLorem}`;
      
            }
        }

      }   
    else  {
             output.innerHTML = "Please select a valid tag!";
          }
}
