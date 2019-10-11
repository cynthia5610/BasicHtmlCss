
function hide_button()
{
	var lefts = document.getElementById("assignment");
	var rights = document.getElementById("right_side");
	var show = document.getElementById("show");
	lefts.style.display = "none";
	rights.style.float = "left";
	rights.style.maxWidth = "100%";
	rights.style.minWidth = "100%";
	show.style.display = "block";
}

function show_button()
{
	var lefts = document.getElementById("assignment");
	var rights = document.getElementById("right_side");
	var show = document.getElementById("show");
	lefts.style.display = "block";
	rights.style.float = "right";
	rights.style.maxWidth = "73%";
	rights.style.minWidth = "73%";
	show.style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("myBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
