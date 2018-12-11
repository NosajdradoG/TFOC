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
	div.setAttribute("id", "myDIV1");
	var i = document.createElement("i");
	i.setAttribute("class", "fa fa-angle-down");
	i.setAttribute("id", "clickInter1");

	h2.innerHTML = interviews[0].titre;
	img.setAttribute("src", interviews[0].image);
	cite.innerHTML = interviews[0].texte;
	div.innerHTML = interviews[0].details;
	
	$(document).ready(function(){
		$("#myDIV1").fadeToggle("fast");
	    $("#clickInter1").click(function(){
		    $("#myDIV1").fadeToggle("fast");
		});
	});

};

document.getElementById("Interview1").appendChild(h2);
document.getElementById("Interview1").appendChild(img);
document.getElementById("Interview1").appendChild(br);
document.getElementById("Interview1").appendChild(cite);
document.getElementById("Interview1").appendChild(br2);
document.getElementById("Interview1").appendChild(br3);
document.getElementById("Interview1").appendChild(div);
document.getElementById("Interview1").appendChild(i);
