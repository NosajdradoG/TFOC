req.open('GET', '/api/interviews', false);
req.send(null);

if (req.status === 200) {
	var interviews = JSON.parse(req.responseText);
	
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
	var h2 = document.createElement("h2");
	var cite = document.createElement("cite");
	var img = document.createElement("img");
	img.setAttribute("class", "imgInterviews");
	var div = document.createElement("div");
	div.setAttribute("id", "myDIV3");
	var i = document.createElement("i");
	i.setAttribute("class", "fa fa-angle-down");
	i.setAttribute("id", "clickInter3");

	h2.innerHTML = interviews[2].titre;
	img.setAttribute("src", interviews[2].image);
	cite.innerHTML = interviews[2].texte;
	div.innerHTML = interviews[2].details;
	
	$(document).ready(function(){
		$("#myDIV3").fadeToggle("fast");
	    $("#clickInter3").click(function(){
		    $("#myDIV3").fadeToggle("fast");
		});
	});
};

document.getElementById("Interview3").appendChild(h2);
document.getElementById("Interview3").appendChild(img);
document.getElementById("Interview3").appendChild(br);
document.getElementById("Interview3").appendChild(cite);
document.getElementById("Interview3").appendChild(br2);
document.getElementById("Interview3").appendChild(br3);
document.getElementById("Interview3").appendChild(div);
document.getElementById("Interview3").appendChild(i);