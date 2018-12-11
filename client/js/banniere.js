const req = new XMLHttpRequest();

req.open('GET', '/api/bannieres', false);
req.send(null);

if (req.status === 200) {
	var banniere = JSON.parse(req.responseText);

	var img = document.createElement("img");
	img.setAttribute("src", banniere[0].imageBanniere);
	img.setAttribute("width", "100%");
};

document.getElementById("Container").appendChild(img);