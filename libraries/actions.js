function lets_play() {
  var code_with_me = document.getElementsByClassName('code-with-me');

  var headline = document.getElementsByClassName('headline');

  headline[0].style.background = "rgba(10,10,10,.1)";

  code_with_me[0].style.display = "block";
}

function close_me() {
  var code_with_me = document.getElementsByClassName('code-with-me');
  var headline = document.getElementsByClassName('headline');

  headline[0].style.background = "#1e2528";
  code_with_me[0].style.display = "none";

}

function change_radius() {
  maxParticleRadius = document.getElementById("circle-radius").value;
}


function change_connections() {
  connectionField = document.getElementById("connection-field").value;
}

function change_color() {
  //particleColor = document.getElementById("particle-color").value;
  particleColor.r = document.getElementById("particle-color-r").value;
  particleColor.g = document.getElementById("particle-color-g").value;
  particleColor.b = document.getElementById("particle-color-b").value;
}
