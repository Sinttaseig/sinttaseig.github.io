function $(el) {
    return document.getElementById(el);
}


function changeChoix(titre){
        if (titre == 'os'){
            document.getElementById('afficher').innerHTML='OS<br>-------------<br>Titre : <span id="titre">Part des visites web en Europe réparties par OS</span><br>Date : <span id="date">Août 2014</span><br>Microsoft : <span id="microsoft"></span><br>Apple : <span id="apple"></span><br>Google OS : <span id="googleos"></span><br>Linux : <span id="linux"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire">sources AT Internet</span><br><br>';
			/*if(document.getElementById('input-json').checked){
				document.getElementById("text").setAttribute('onClick', 'getOsJson()');
				document.getElementById("graphique").setAttribute('onClick', 'getOsJson()');
			}else{
				document.getElementById("text").setAttribute('onClick', 'getOsXml()');
				document.getElementById("graphique").setAttribute('onClick', 'getOsXml()');	
			}*/
		
        }else if(titre== 'navigateur'){
            document.getElementById('afficher').innerHTML='Navigateur<br>-------------<br>Titre : <span id="titre">Répartition des navigateur web</span><br>Date : <span id="date">Décembre 2014</span><br>Chrome : <span id="chrome"></span><br>Ie : <span id="ie"></span><br>Firefox : <span id="firefox"></span><br>Safari : <span id="safari"></span><br>Opera : <span id="opera"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire">sources Net StatCounter</span><br><br>';
			/*if(document.getElementById('input-json').checked){
				document.getElementById("text").setAttribute('onClick', 'getNavigateurJson()');
				document.getElementById("graphique").setAttribute('onClick', 'getNavigateurJson()');
			}else{
				document.getElementById("text").setAttribute('onClick', 'getNavigateurXml()');
				document.getElementById("graphique").setAttribute('onClick', 'getNavigateurXml()');	
			}*/
        }
}

function XMLOrJSON(){
	var type = document.getElementById('type').value;
	var json = document.getElementById('input-json');
	var xml = document.getElementById('input-xml');
	if(type == "os"){
		if(json.checked){
			//alert("json os");
			getOsJson();
			/*document.getElementById("text").setAttribute('onClick', 'getOsJson()');
			document.getElementById("graphique").setAttribute('onClick', 'getOsJson()');*/
		}else if(xml.checked){
			//alert("xml os");
			getOsXml();
			/*document.getElementById("text").setAttribute('onClick', 'getOsXml()');
			document.getElementById("graphique").setAttribute('onClick', 'getOsXml()');	*/
		}
	}else if(type == "navigateur"){
		if(json.checked){
			//alert("json navigateur");
			getNavigateurJson();
			/*document.getElementById("text").setAttribute('onClick', 'getNavigateurJson()');
			document.getElementById("graphique").setAttribute('onClick', 'getNavigateurJson()');*/
		}else if(xml.checked){
			//alert("xml navigateur");
			getNavigateurXml();
			/*document.getElementById("text").setAttribute('onClick', 'getNavigateurXml()');
			document.getElementById("graphique").setAttribute('onClick', 'getNavigateurXml()');*/
		}
	}
}

function getOsJson() {
    var requete_ajax = new XMLHttpRequest(); //Création d'une requête
    requete_ajax.open('GET', './json/os.json', false); //Utilisation de la méthode GET
    requete_ajax.send(null); //Envoie de la requête
    var data = eval('(' + requete_ajax.responseText + ')'); //Evaluation de la réponse (traitement)

    $('titre').innerHTML = data.titre;
    $('date').innerHTML = data.date;
    $('microsoft').innerHTML = data.microsoft;
    $('apple').innerHTML = data.apple;
    $('googleos').innerHTML = data.googleos;
    $('linux').innerHTML = data.linux;
    $('autre').innerHTML = data.autre;
    $('commentaire').innerHTML = data.commentaire;
}

function getOsXml() {
    var requete_ajax = new XMLHttpRequest(); //Création d'une requête
    requete_ajax.open('GET', './xml/os.xml', false); //Utilisation de la méthode GET
    requete_ajax.send(null); //Envoie de la requête
    
    var data = requete_ajax.responseXML;
    var titre = data.getElementsByTagName("titre");
    var date = data.getElementsByTagName("date");
    var microsoft = data.getElementsByTagName("microsoft");
    var apple = data.getElementsByTagName("apple");
    var googleos = data.getElementsByTagName("googleos");
    var linux = data.getElementsByTagName("linux");
    var autre = data.getElementsByTagName("autre");
    var commentaire = data.getElementsByTagName("commentaire");

    $('titre').innerHTML = titre[0].firstChild.nodeValue;
    $('date').innerHTML = date[0].firstChild.nodeValue;
    $('microsoft').innerHTML = microsoft[0].firstChild.nodeValue;
    $('apple').innerHTML = apple[0].firstChild.nodeValue;
    $('googleos').innerHTML = googleos[0].firstChild.nodeValue;
    $('linux').innerHTML = linux[0].firstChild.nodeValue;
    $('autre').innerHTML = autre[0].firstChild.nodeValue;
    $('commentaire').innerHTML = commentaire[0].firstChild.nodeValue;
}

function getNavigateurJson() {
    var requete_ajax = new XMLHttpRequest(); //Création d'une requête
    requete_ajax.open('GET', './json/navigateur.json', false); //Utilisation de la méthode GET
    requete_ajax.send(null); //Envoie de la requête
    var data = eval('(' + requete_ajax.responseText + ')'); //Evaluation de la réponse (traitement)
    $('titre').innerHTML = data.titre;
    $('date').innerHTML = data.date;
    $('chrome').innerHTML = data.chrome;
    $('ie').innerHTML = data.ie;
    $('firefox').innerHTML = data.firefox;
    $('safari').innerHTML = data.safari;
    $('opera').innerHTML = data.opera;
    $('autre').innerHTML = data.autre;
    $('commentaire').innerHTML = data.commentaire;
}

function getNavigateurXml() {
    var requete_ajax = new XMLHttpRequest(); //Création d'une requête
    requete_ajax.open('GET', './xml/navigateur.xml', false); //Utilisation de la méthode GET
    requete_ajax.send(null); //Envoie de la requête
    
    var data = requete_ajax.responseXML;
    var titre = data.getElementsByTagName("titre");
    var date = data.getElementsByTagName("date");
    var chrome = data.getElementsByTagName("chrome");
    var ie = data.getElementsByTagName("ie");
    var firefox = data.getElementsByTagName("firefox");
    var safari = data.getElementsByTagName("safari");
    var opera = data.getElementsByTagName("opera");
    var autre = data.getElementsByTagName("autre");
    var commentaire = data.getElementsByTagName("commentaire");

    $('titre').innerHTML = titre[0].firstChild.nodeValue;
    $('date').innerHTML = date[0].firstChild.nodeValue;
    $('chrome').innerHTML = chrome[0].firstChild.nodeValue;
    $('ie').innerHTML = ie[0].firstChild.nodeValue;
    $('firefox').innerHTML = firefox[0].firstChild.nodeValue;
    $('safari').innerHTML = safari[0].firstChild.nodeValue;
    $('opera').innerHTML = opera[0].firstChild.nodeValue;
    $('autre').innerHTML = autre[0].firstChild.nodeValue;
    $('commentaire').innerHTML = commentaire[0].firstChild.nodeValue;
}