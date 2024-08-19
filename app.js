const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});
function validation() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field";
    return false;
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Username lenght must be between 2 and 20";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password field";
    return false;
  }
  if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("passwords").innerHTML =
      " ** Passwords lenght must be between  5 and 20";
    return false;
  }

  if (pass != confirmpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password does not match the confirm password";
    return false;
  }
}
function validation() {
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("conpass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  if (name == "") {
    document.getElementById("Name").innerHTML =
      " ** Please fill the Name field";
    return false;
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email id field";
    return false;
  }
  if (emails.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field";
    return false;
  }
  if (user.length <= 3 || user.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Username lenght must be between 3 and 20";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password field";
    return false;
  }
  if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("passwords").innerHTML =
      " ** Passwords lenght must be between  5 and 20";
    return false;
  }

  if (pass != confirmpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password Mismatch";
    return false;
  }

  if (confirmpass == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirmpassword field";
    return false;
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile NUmber field";
    return false;
  }
  if (isNaN(mobileNumber)) {
    document.getElementById("mobileno").innerHTML =
      " ** user must write digits only not characters";
    return false;
  }
  if (mobileNumber.length != 11) {
    document.getElementById("mobileno").innerHTML =
      " ** Mobile Number must be 11 digits only";
    return false;
  }
}

document.getElementById("para").onclick = function() {  
  fun()  
  };  
  function fun() {  
  document.getElementById("para").innerHTML = "hello";  
  document.getElementById("para").style.color = "blue";  
  document.getElementById("para").style.backgroundColor = "yellow";  
  document.getElementById("para").style.fontSize = "25px";  
  document.getElementById("para").style.border = "4px solid red";   
  }  