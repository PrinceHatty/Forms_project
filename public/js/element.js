let element = document.getElementsByClassName("elemnt");
let add_new_btn = document.getElementsByClassName("new_opion_btn");
let delete_btn = document.getElementsByClassName("delete_btn");

for (let b = 0; b < add_new_btn.length; b++) {
  add_new_btn[b].addEventListener("click", () => {
    const area = element[b].parentNode;

    area.insertAdjacentHTML(
      "afterend",
      `
        
        <div class="new_element" id="conent-${b}">  
                <input type="radio" />
                <textarea class="inp-st">Untitled Question</textarea>
                <div class="add_image">
                    <i class="fa-solid fa-image fade"></i>
                </div>
                <div class="delete_btn"><i class="fa-solid fa-xmark fade"></i></div> 
                
                </div>
                </div>
  
        `
    );
    loop(b);
  });
}

function loop(b) {
  add_new_btn[b].addEventListener("click", () => {
    const area = element[b].parentNode;

    area.insertAdjacentHTML(
      "afterend",
      `
          
          <div class="new_element" id="conent-${b}">  
                  <input type="radio" />
                  <textarea class="inp-st">Untitled Question</textarea>
                  <div class="add_image">
                      <i class="fa-solid fa-image fade"></i>
                  </div>
                  <div class="delete_btn"><i class="fa-solid fa-xmark fade"></i></div> 
                  
                  </div>
                  </div>
    
          `
    );
  });

  delete_btn[b].addEventListener("click", (event) => {
    var target = event.target;
    var new_element = target.parentElement.parentElement;
    new_element.remove();

    console.log(b);
  });
}
