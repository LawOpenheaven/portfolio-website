fetch("contact-me.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("contact-section").innerHTML = data;
  });