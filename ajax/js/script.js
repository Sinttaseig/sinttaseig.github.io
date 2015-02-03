function MAJ() {
    document.getElementById("titre").innerHTML = "navigateur";
    document.getElementById("date").innerHTML = "Septembre2015";
    document.getElementById("chrome").innerHTML = "10%";
    document.getElementById("ie").innerHTML = "20%";
    document.getElementById("firefox").innerHTML = "30%";
    document.getElementById("safari").innerHTML = "40%";
    document.getElementById("opera").innerHTML = "50%";
    document.getElementById("autre").innerHTML = "60%";
    document.getElementById("commentaire").innerHTML = "sources Wikipédia";
}

function $(el) {
    return document.getElementById(el);
}

function changeChoix(titre){
        if (titre == 'os'){
            document.getElementById('afficher').innerHTML='OS<br>-------------<br>Titre : <span id="titre"></span><br>Date : <span id="date"></span><br>Microsoft : <span id="microsoft"></span><br>Apple : <span id="apple"></span><br>Google OS : <span id="googleos"></span><br>Linux : <span id="linux"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire"></span><br><br>';
            document.getElementById('format').innerHTML='Format :<br>Json<input type="radio" name="choix" value="json" onClick="getOsJson()"checked/><br>Xml<input type="radio" name="choix" value="xml" onClick="getOsXml()"/>';
        }else if (titre == 'navigateur'){
            document.getElementById('afficher').innerHTML='Navigateur<br>-------------<br>Titre : <span id="titre"></span><br>Date : <span id="date"></span><br>Chrome : <span id="chrome"></span><br>Ie : <span id="ie"></span><br>Firefox : <span id="firefox"></span><br>Safari : <span id="safari"></span><br>Opera : <span id="opera"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire"></span><br><br>';
            document.getElementById('format').innerHTML='Format :<br>Json<input type="radio" name="choix" value="json" onClick="getNavigateurJson()"checked/><br>Xml<input type="radio" name="choix" value="xml" onClick="getNavigateurXml()"/>';
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