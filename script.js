/* Place your JavaScript in this file */
function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // var hello = document.getElementById('usr').value;

    // Check if the username and password are correct
    if (username === 'SN' && password === 'pwd123') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('welcomePage').style.display = 'block';
    } else if (username === 'SN' && password === '2013'){ 
        // alert('VALIDATED WITH "root-pin". Press OK to proceed.');
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('welcomePage').style.display = 'block';
    }
    else {
        alert('Incorrect username or password. Please try again. The input was: user " ' + username + ' " and password/PIN " ' + password);
    }
}
// function checkc(){ 
//   let cook = getCookie('login');
//   if (cook == "ok"){
//     alert("Verification sucess!");
//     document.getElementById('loginPage').style.display = 'none';
//     document.getElementById('welcomePage').style.display = 'block';
//   }else{
//     alert('Not verified!!')
//   }
// }
function forgor() {
    var hello = document.getElementById('usr').value;
    if (hello === "121288") {
        // alert('Successfully Verified by "root-pin"! Redirecting...');
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('welcomePage').style.display = 'block';

    }else{ 
        alert('Failed to verify identity using "root-pin"!! Input is ' + hello + '! Is it correct??')

    }
}
function listCookies() {
  var cookies = document.cookie;
  
  if (cookies) {
    var cookieArray = cookies.split(";"); // Split cookies into an array
    
    var cookieData = "";
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim(); // Remove any leading/trailing spaces
      var cookieParts = cookie.split("="); // Split cookie into name and value
      
      var cookieName = cookieParts[0];
      var cookieValue = cookieParts[1];
      
      cookieData += cookieName + ": " + cookieValue + "\n";
    }
    
    alert("Cookies:\n" + cookieData);
  } else {
    alert("No cookies!");
  }
}
function showText() {
            var displayText = document.getElementById("displayText");
            displayText.innerHTML = "2013";
            displayText.style.display = "block";

            setTimeout(function() {
                displayText.style.display = "none";
            }, 5000);
        }
function changepwd(){ 
    location.reload();
    alert("You have been logged out. Cookie(s) may still remain in browser cache.");
}
function srvr(){
    var servername = location.host;
    // alert(servername);
    var srvr = location.servername;
    var srvrs = location.pathname;
    
    alert("Severhost(location.host)=" + servername + ";location.servername=" + srvr + "; location.pathname =" + srvrs);


}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function formd(){ 
    let name = document.getElementById("fname");
    let amts = document.getElementById("amt").value;
    let pay = document.getElementById("fav_language").value;
    // let name = document.getElementById("fname");
    alert(name);
    
}
function makeCust(){ 
  var nama = prompt("Enter the name of the new cookie", "");
  var data = prompt("Enter the data stored in the cookie", "");
  var expire = prompt("Enter how many days the cookie is valid for", "");
  // let c = document.cookie
  setCookie(nama, data, expire);

}
function deleteCookie() {
  var cookieName = prompt("Enter the name of the cookie to delete:");
  
  if (cookieName) {
    if (confirm("Are you sure?") == true) {
  // text = "You pressed OK!";
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie '" + cookieName + "' has been deleted.");
    listCookies();
} else {
  alert("Delete cancelled")
  // text = "You canceled!";
}
    
  } else {
    alert("Invalid cookie name/cookie does not exist.");
  }
}
function showTexts() {
            var displayText = document.getElementById("displayTexts");
            displayText.innerHTML = "Order approved(database sent 200-OK!)";
            displayText.style.display = "block";

            setTimeout(function() {
                displayText.style.display = "none";
            }, 5000);
        }
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  alert("Success! Set cookie name:" + cname + "; and value:" + cvalue + "; and expiry:" + expires);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie '" + cookieName + "' has been deleted.");
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function checkcoo(){
    let coo = getCookie('login');
    if (coo.value == "ok"){
        alert("Verified! Cookie is !PRESENT! (dbg_data_1):" + coo)
    }
    else{
        alert("Verified! Cookie is !NOT_PRESENT! Cookie details:" + coo)
    }
}
function del(){
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie 'login' DELETED!")
}
function checkcookiee(){ 
    let c = getCookie('login');
    if (getCookie('login') == "ok"){ 
         document.getElementById('loginPage').style.display = 'none';
        document.getElementById('welcomePage').style.display = 'block';
        // alert('Verification success!')
    }else{ 
        alert('Cookie not found! (err_404-NOT-FOUND)' + c.toString());
    }
    }
