function openNav() {
    document.getElementById("nav-menu").style.transform= "translateX(0%)";
    document.getElementById("nav-hidden-menu").style.transform= "translateX(0%)";
}

function closeNav() {
    document.getElementById("nav-menu").style.transform = "translateX(-100%)";
    document.getElementById("nav-hidden-menu").style.transform = "translateX(-100%)";

}
function openArticles()
{
	document.getElementById("right-articles").style.transform= "translateX(-100%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(-100%)";
}

function closeArticles()
{
	document.getElementById("right-articles").style.transform= "translateX(0%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(0%)";
}