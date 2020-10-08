let parent = document.querySelector(".modal-parent");
let btn = document.querySelector('button');
let x = document.querySelector(".closeBtn");
let section = document.querySelector("section");

btn.addEventListener("click", appear);


function appear() {
    parent.style.display = "block";
    section.style.filter = "blur( 7px )";
}

x.addEventListener("click", disapearX);

function disapearX() {
    parent.style.display = "none";
    section.style.filter = "blur( 0px )"
}


parent.addEventListener("click", disapearParent);
function disapearParent(e) {
    if (e.target.className == "modal-parent" ){
        parent.style.display = "none";
        section.style.filter = "blur( 0px )"
    }
}