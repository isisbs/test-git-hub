//evento submit
function MiFuncion(event){
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = parseInt(document.getElementById("age").value);
    var ocupation = document.getElementById("ocupation").value;
    var disiplina = document.querySelector('input[name="radio-botton"]:checked').value;
    var draw = document.getElementById("draw").value;
    var develop = document.querySelector('input[name="check"]:checked').value;
    var comment = document.getElementById("comment").value;

    alert("Name: " + nombre +
    "\nEmail: " + email +
    "\nAge: " + age +
    "\nDo you think doing an artistic activity would help you as occupational therapy? " + ocupation +
    "\nThat artistic disiplina prefer? " + disiplina +
    "\nWhat kind of things do you like to draw? " + draw +
    "\nWhich seems to you the most appropriate option to learn to develop your artistic talent? " + develop +
    "\nYou want to add some comment or suggestion? " + comment );

    event.preventDefault();
}

//init de boton
const form = document.getElementById("survey-form");
form.addEventListener("submit", MiFuncion);










