function validate() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // 
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        //text.innerHTML = "Valid Email Address";
        return true;


    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Enter a Valid Email Address";
        text.style.color = "#ff0000";
        return false;



    }
}