//if (!(document.referrer === undefined || document.referrer === null || document.referrer === "")) {

	let regexp = /(\/\/.+?(\/|$))/mi;
	let pageatual = window.location.href;
	let deondeveveio = window.document.referrer;
	let origem = window.location.origin;
	let os =  window.clientInformation.platform;
	let consult = new XMLHttpRequest();
	consult.onload = onloadfim;
	consult.open("GET", "https://ipapi.co/json/", true);
	consult.send();

	function onloadfim(){
		let codejson = this.responseText;
		sessionStorage.setItem("infopeaple", codejson);
	}

	let infopeaple = JSON.parse(sessionStorage.getItem("infopeaple"));

	console.log("Pagina atual:" ,pageatual)
	console.log("De onde veio:", deondeveveio)
	console.log("Origem:", origem)
	console.log("Sistema Operacional:", os)
	console.log("Linguagens:", window.clientInformation.languages)
	console.log("App Version:", window.clientInformation.appVersion)
	console.log("Vendor:", window.clientInformation.vendor)
	console.log("IP:", infopeaple.ip)
	console.log("Provedor de Internet:", infopeaple.org)
	console.log("Cidade do provedor:", infopeaple.region)
	console.log("Timezone:", infopeaple.timezone)
	console.log("UTC:", infopeaple.utc_offset)
	console.log("Pais:", infopeaple.country_name)
	console.log("Região:", infopeaple.region)
	//console.log()

	pageatual = regexp.exec(pageatual);
	deondeveveio = regexp.exec(deondeveveio);
	origem = regexp.exec(origem);

	//if(deondeveveio[0] != pageatual[0]){
	//	localStorage.setItem("Page", deondeveveio[0]);
	//}else{
	//	console.log("Page:", window.location.href);
	//}

//}
