function changeTheme() {
  var link = document.getElementById("styles");
  
  if(link.getAttribute('href') == 'lightMode.css'){
    link.setAttribute('href', 'darkMode.css');
  } else {
    link.setAttribute('href', 'lightMode.css');
  }
}
