
function opennav() {
    document.getElementById("nav-menu").style.transform= "translateX(0%)";
    document.getElementById("nav-hidden-menu").style.transform= "translateX(0%)";
}

function closeNav() {
    document.getElementById("nav-menu").style.transform = "translateX(-100%)";
    document.getElementById("nav-hidden-menu").style.transform = "translateX(-100%)";

}

function openarticles()
{
	document.getElementById("right-articles").style.transform= "translateX(-100%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(-100%)";
}

function closearticles()
{
	document.getElementById("right-articles").style.transform= "translateX(0%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(0%)";
}