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
	div.setAttribute("id", "myDIV2");
	var i = document.createElement("i");
	i.setAttribute("class", "fa fa-angle-down");
	i.setAttribute("id", "clickInter2");

	h2.innerHTML = interviews[1].titre;
	img.setAttribute("src", interviews[1].image);
	cite.innerHTML = interviews[1].texte;
	div.innerHTML = interviews[1].details;
	
	$(document).ready(function(){
		$("#myDIV2").fadeToggle("fast");
	    $("#clickInter2").click(function(){
		    $("#myDIV2").fadeToggle("fast");
		});
	});
};

document.getElementById("Interview2").appendChild(h2);
document.getElementById("Interview2").appendChild(img);
document.getElementById("Interview2").appendChild(br);
document.getElementById("Interview2").appendChild(cite);
document.getElementById("Interview2").appendChild(br2);
document.getElementById("Interview2").appendChild(br3);
document.getElementById("Interview2").appendChild(div);
document.getElementById("Interview2").appendChild(i);