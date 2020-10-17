//https://api.github.com/users/user_name/repos
//

const user_img = document.querySelector(".user_img");
const userName = document.querySelector(".user_name h1");
const followers_ = document.querySelector(".followers_ span");
const repo_details = document.querySelector(".repo_details");
const btn_submit = document.querySelector(".btn_submit");
const followe = document.querySelector(".followe span");



let user_name = '';

//when user writer user name in text box
function inputFunction() {
    let input_user = document.querySelector(".input_user").value.trim();
    //trim method will replace before and after white space of given calue

    if (input_user.length <= 0) {
        alert("Please enter github user name");
        document.querySelector(".input_user").value = "";
        document.querySelector(".input_user").focus();
        return false;
    } else {
        user_name = input_user.split("").join("");
        //if everything is ok run fetch user funciton
        fetchUser(); // this funciton is not made yet

        //clear the input box and focused it for next
        document.querySelector(".input_user").value = "";
        document.querySelector(".input_user").focus();
    }
};

btn_submit.addEventListener("click", function () {
    inputFunction()
});

// if user press enter it should be submit 
document.querySelector(".input_user").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        //alert("you have pressed enter key");
        inputFunction()
    }
})

//fetching user from github api
function fetchUser() {
    fetch(`https://api.github.com/users/${user_name}`)
        .then(response => response.json())
        .then(function (data) {
           
            console.log(data);
            if (data.message === "Not Found") {
                alert("user not found");
                return false;
            } else {
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                userName.innerHTML = data.login;
                followers_.innerHTML = data.bio;
                followe.innerHTML = data.name;

            }
        })

  
}
