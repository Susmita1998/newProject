import './login.css';
const button=(<HTMLInputElement>document.getElementById("btn"));
button.addEventListener("click",(e:Event)=>{
    e.preventDefault();
    let username=(<HTMLInputElement>document.getElementById("username")).value;
    let password=(<HTMLInputElement>document.getElementById("password")).value;
    console.log(username);
    let existingUname:string = "Susmita1998";
    let existingPassword :string= "Susmita@07";


  if (username != existingUname) {
        alert("Incorrect User Name");
        return false;
    }
    else if (password != existingPassword) {
        alert("Incorrect Password");
        return false;
    }
    else {
        alert("Successfully Logged in");
        // window.open("homePage.html");
    }
});

