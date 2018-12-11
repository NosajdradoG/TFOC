req.open('GET', '/api/prives', false);
req.send(null);

if (req.status === 200) {
    var prives = JSON.parse(req.responseText);
    var privesTxt = JSON.stringify(prives);
} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}



var div = document.createElement("div");
div.setAttribute("width", "100%");

prives.forEach(function(element, index){
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");
    div.appendChild(mainDiv);
    var h3 = document.createElement("h3");
    h3.innerHTML = element.nom;
    h3.setAttribute("id", index);
    mainDiv.appendChild(h3);
    var divRow = document.createElement("div");
    divRow.setAttribute("class", "row");
    divRow.setAttribute("id", "rowPart");
    mainDiv.appendChild(divRow);
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "imagePart");
    divRow.appendChild(divCol);
    var a = document.createElement("a");
    a.setAttribute("href", element.lien);
    divCol.appendChild(a);
    var img = document.createElement("img");
    img.setAttribute("src", element.logo);
    img.setAttribute("class", "imgPart");
    a.appendChild(img);
    var divCol2 = document.createElement("div");
    divCol2.setAttribute("class", "DescPart");
    divRow.appendChild(divCol2);
    var p = document.createElement("p");
    p.setAttribute("class", "partDesc");
    p.innerHTML = element.description;
    divCol2.appendChild(p);
    var a2 = document.createElement("a");
    a2.setAttribute("href", element.lien);
    a2.setAttribute("class", "lienPart");
    a2.innerHTML = "Visitez le site ";
    divCol2.appendChild(a2);
    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-external-link");
    a2.appendChild(i);
});

document.getElementById("Prives").appendChild(div);