// Create the login function here.
function Login() {

    player_name = document.getElementById("playername").Value;
    localStorage.setItem("player_name", player_name);

      window.location = "index1.html";
}

