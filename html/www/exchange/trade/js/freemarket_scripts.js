function setAccountNumber() {
  if (sessionStorage.getItem("accountRS")) {
    document.getElementById("username").innerHTML = "Account";
    sessionStorage.setItem("loginStatus","loggedin");
  } else {
    sessionStorage.setItem("loginStatus","notloggedin");
  }
};
// Logout script
function logout(){
  if (typeof(Storage) != "undefined") {
    sessionStorage.removeItem("accountNumber");
    sessionStorage.removeItem("accountRS");
    sessionStorage.removeItem("numericalAccountNumber");
    sessionStorage.removeItem("accountBalance");
    window.location.href = "login.html";
  } else {
    document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage.";
  }
};
// Get variables out of the URL
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
};
// For cleaning out any script injection attacks
var regex = /(<([^>]+)>)/ig;
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};		
// Escape HTML scripts
function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}