const success = document.querySelector(".successbtn");
const info = document.querySelector(".infobtn");
const warning = document.querySelector(".warningbtn");
const failed = document.querySelector(".failedbtn");
const tagHeader = document.querySelector(".tagHeader");

const symbols = {
  success: `<span class="material-symbols-outlined">check_circle</span>`,
  info: `<span class="material-symbols-outlined">info</span>`,
  failed: `<span class="material-symbols-outlined">cancel</span>`,
  warning: `<span class="material-symbols-outlined">warning</span>`,
};

let timeoutId; // Store timeout reference to clear previous toasts

const showTag = (value, msg) => { 
  console.log(value, msg);

  // Clear existing notification before adding a new one
  if (tagHeader.firstChild) {
    clearTimeout(timeoutId); // Stop the previous timeout
    tagHeader.innerHTML = ""; // Remove the existing toast
  }

  const divElement = document.createElement("div");
  divElement.className = `Tagwrapper ${value}`;
  divElement.innerHTML = `
    <div class="tagContent">
      <div class="d-flex flex-row justify-content-center">
        <div class="tagIcon col-sm-2">
          ${symbols[value]}
        </div>
        <div class="tagText col-sm-10">${msg}</div>
      </div>
    </div>
    <div class="toastProgress">
      <div class="progressBar ${value}"></div>
    </div>
  `;

  tagHeader.appendChild(divElement);

  // Remove the tag after 1 second (1000 ms)
  timeoutId = setTimeout(() => {
    divElement.remove();
  }, 5000);
};

// Adding event listeners to buttons
success.addEventListener("click", () => showTag("success", "Operation Successful!"));
info.addEventListener("click", () => showTag("info", "Here is some information."));
warning.addEventListener("click", () => showTag("warning", "This is a warning!"));
failed.addEventListener("click", () => showTag("failed", "Operation Failed!"));
