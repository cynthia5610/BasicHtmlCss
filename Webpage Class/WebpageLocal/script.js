
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
