req.open('GET', '/api/interviews', false);
req.send(null);

if (req.status === 200) {
	var interviews = JSON.parse(req.responseText);

	$(document).ready(function(){
		$("#myDIV1").fadeToggle("fast");
	    $("#clickInter1").click(function(){
		    $("#myDIV1").fadeToggle("fast");
		});
	});
}else {
    console.log('Status de la réponse: %d (%s)', req.status, req.statusText);
}

var div = document.createElement('div');
div.setAttribute('width', '100%');
var mainDiv = document.createElement('div');
mainDiv.setAttribute('class', 'mainDiv');
div.appendChild(mainDiv);

interviews.forEach(function(element, index){
    var divImgClick = document.createElement('div');
    divImgClick.setAttribute('id', 'opnModal'+index);
    divImgClick.setAttribute('class', 'divImgClickIndex');
    var imgPartToClick = document.createElement('img');
    imgPartToClick.setAttribute('src', element.logo);
    imgPartToClick.setAttribute('class', 'imgPartIndex');
    divImgClick.appendChild(imgPartToClick);
    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    divImgClick.appendChild(overlay);
    mainDiv.appendChild(divImgClick);
    var divModal = document.createElement('div');
    divModal.setAttribute('id', 'myModal');
    divModal.setAttribute('class', 'modal');
    mainDiv.appendChild(divModal);
    var divModalContent = document.createElement('div');
    divModalContent.setAttribute('class', 'modal-content');
    divModal.appendChild(divModalContent);
    var divClose = document.createElement('div');
    divClose.setAttribute('class', 'close');
    divClose.innerHTML = '&times;';
    divModalContent.appendChild(divClose);
    var nomIn = document.createElement('h3');
    nomIn.innerHTML = element.nom;
    divModalContent.appendChild(nomIn);
    var imgIn = document.createElement('img');
    imgIn.setAttribute('src', element.logo);
    imgIn.setAttribute('class', 'imgIn');
    divModalContent.appendChild(imgIn);
    var pDesc = document.createElement('p');
    pDesc.innerHTML = element.description;
    divModalContent.appendChild(pDesc);
    var a = document.createElement('a');
    a.setAttribute('href', element.lien);
    a.setAttribute('class', 'lienPart');
    a.setAttribute('target', '_blank');
    a.innerHTML = 'Visitez le site ';
    divModalContent.appendChild(a);
    var i = document.createElement('i');
    i.setAttribute('class', 'fa fa-external-link');
    a.appendChild(i);
    var hr = document.createElement('hr');
    divModalContent.appendChild(hr);
    var h5In = document.createElement('h5');
    h5In.setAttribute('class', 'h5In');
    h5In.innerHTML = 'Contact :';
    divModalContent.appendChild(h5In);
    var contactIn = document.createElement('div');
    contactIn.setAttribute('class', 'contactIn');
    divModalContent.appendChild(contactIn);
    var picIn = document.createElement('img');
    picIn.setAttribute('src', element.picIn);
    picIn.setAttribute('class', 'picIn')
    contactIn.appendChild(picIn);
    var divContact = document.createElement('div');
    divContact.setAttribute('class', 'divContact');
    contactIn.appendChild(divContact);
    var nomContact = document.createElement('p');
    nomContact.innerHTML = 'Votre contact : ' + element.nomContact;
    divContact.appendChild(nomContact);
    var adresse = document.createElement('p');
    adresse.innerHTML = 'Adresse : ' + element.adresse;
    divContact.appendChild(adresse);
    var telephone = document.createElement('p');
    telephone.innerHTML = 'Tel. : ' + element.telephone;
    divContact.appendChild(telephone);
    var mail = document.createElement('p');
    mail.innerHTML = 'Mail : ' + element.mail;
    divContact.appendChild(mail);

    // When the user clicks the divImgClick, open the modal 
    divImgClick.onclick = function() {
      divModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the divModal
    divClose.onclick = function() {
      divModal.style.display = 'none';
    }
    // When the user clicks anywhere outside of the modal, close it
    divModal.onclick = function(event) {
        // console.log(event.target)
        // console.log(divModal)
        if (event.target == divModal) {
            divModal.style.display = 'none';
        }
            
    }
});

document.getElementById('Interviews').appendChild(div);
