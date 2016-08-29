function OpenNav() {
    document.getElementById("nav-menu").style.transform= "translateX(0%)";
    document.getElementById("nav-hidden-menu").style.transform= "translateX(0%)";
}

function CloseNav() {
    document.getElementById("nav-menu").style.transform = "translateX(-100%)";
    document.getElementById("nav-hidden-menu").style.transform = "translateX(-100%)";

}
function OpenArticles()
{
	document.getElementById("right-articles").style.transform= "translateX(-100%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(-100%)";
}

function CloseArticles()
{
	document.getElementById("right-articles").style.transform= "translateX(0%)";
	document.getElementById("right-hidden-articles").style.transform= "translateX(0%)";
}