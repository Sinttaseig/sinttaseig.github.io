
function $(el) {
    return document.getElementById(el);
}

function init(type){
	if(type == 1){
		document.getElementById('afficher').innerHTML='<div id="all">OS<br>-------------<br>Titre : <span id="titre">Part des visites web en Europe réparties par OS</span><br>Date : <span id="date">Août 2014</span><br>Microsoft : <span id="microsoft"></span><br>Apple : <span id="apple"></span><br>Google OS : <span id="googleos"></span><br>Linux : <span id="linux"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire">sources AT Internet</span></div><br><br>';
	}else{
	    document.getElementById('afficher').innerHTML='<div id="all">Navigateur<br>-------------<br>Titre : <span id="titre">Répartition des navigateur web</span><br>Date : <span id="date">Décembre 2014</span><br>Chrome : <span id="chrome"></span><br>Ie : <span id="ie"></span><br>Firefox : <span id="firefox"></span><br>Safari : <span id="safari"></span><br>Opera : <span id="opera"></span><br>Autre : <span id="autre"></span><br>Commentaire : <span id="commentaire">sources Net StatCounter</span></div><br><br>';
	}
}

function init2(type){
	if(type == 1){
		document.getElementById('afficher').innerHTML='OS<br>-------------<br>Titre : <span id="titre">Part des visites web en Europe réparties par OS</span><br>Date : <span id="date">Août 2014</span><br><br><canvas id="myChart" width="350" height="250"></canvas><br>Commentaire : <span id="commentaire">sources AT Internet</span></div><br><br>';
	}else{
	    document.getElementById('afficher').innerHTML='Navigateur<br>-------------<br>Titre : <span id="titre">Répartition des navigateur web</span><br>Date : <span id="date">Décembre 2014</span><br><br><canvas id="myChart" width="350" height="250"></canvas><br><br>Commentaire : <span id="commentaire">sources Net StatCounter</span></div><br><br>';
	}
}

function changeChoix(titre){
        if (titre == 'os'){
            init(1);
        }else if(titre== 'navigateur'){
            init(2);
        }
}

function XMLOrJSON(){

	var type = document.getElementById('type').value;
	var json = document.getElementById('input-json');
	var xml = document.getElementById('input-xml');
	if(type == "os"){
		if($("myChart")){
			init(1);
		}
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
		if($("myChart")){
			init(2);
		}
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

function createProgress(value){
	var div = document.createElement('div');
	div.setAttribute('class', 'stat');
	var progress = document.createElement('div');
	progress.setAttribute('class', 'progress');
	var span = document.createElement('span');
	var strong = document.createElement('strong');
	strong.setAttribute('class', 'value');
	strong.innerHTML=value;
	span.appendChild(strong);
	var progress_value = document.createElement('div');
	progress_value.setAttribute('class', 'progress_value');
	//progress_value.style.width=value;
	var str = String(value.substr(0,value.length-1));
	alert(str);
	progress_value.setAttribute("style","width:"+str+"%");
	progress.appendChild(span);
	progress.appendChild(progress_value);
	var clear = document.createElement('div');
	clear.setAttribute('class', 'clear');
	div.appendChild(progress);
	div.appendChild(clear);
	return div;
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

function modeGraphique(){

	var type = document.getElementById('type').value;
	var json = document.getElementById('input-json');
	var xml = document.getElementById('input-xml');

	if(type == "os"){
		init2(1);
		var data = {
			labels: ["Microsoft", "Apple", "Google OS", "Linux", "Autre"],
			datasets: [
				{
					label: "Part de visites Web",
					fillColor: "#D1D9D9",
					strokeColor: "#D1D9D9",
					highlightFill: "#D1D9D9",
					highlightStroke: "#D1D9D9",
					data: [65.1, 22.1, 11.4, 1.1, 0.3]
				}
			]
		};
	}else if(type == "navigateur"){
		init2(2);
		var data = {
			labels: ["Chrome", "IE", "Firefox", "Safari", "Opera", "Autres"],
			datasets: [
				{
					label: "Part de visites Web",
					fillColor: "#D1D9D9",
					strokeColor: "#D1D9D9",
					highlightFill: "#D1D9D9",
					highlightStroke: "#D1D9D9",
					data: [49.7, 24.6, 18, 4.7, 1.5, 1.5]
				}
			]
		};
	}

			var ctx = document.getElementById("myChart").getContext("2d");
		var myBarChart = new Chart(ctx).Bar(data, {
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,
			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
			//String - Colour of the grid lines
			scaleGridLineColor : "#747878",
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,
			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,
			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,
			//Boolean - If there is a stroke on each bar
			barShowStroke : true,
			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,
			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,
			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		});
	
}