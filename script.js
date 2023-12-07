function submitDetail(event){
    event.preventDefault()

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var branch = document.getElementById("branch").value
    var regno = document.getElementById("regno").value

    sessionStorage.setItem("name",name);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("phone",phone);
    sessionStorage.setItem("branch",branch);
    sessionStorage.setItem("regno",regno);
    window.location.href="display.html";
    

}