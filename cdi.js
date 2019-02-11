//if (!(document.referrer === undefined || document.referrer === null || document.referrer === "")) {

	let regexp = /(\/\/.+?(\/|$))/mi;					
	let pageatual = window.location.href;
	let deondeveveio = window.document.referrer;
	let origem = window.location.origin;
	let os =  window.clientInformation.platform;

	console.log("Pagina atual:" ,pageatual)
	console.log("De onde veio:", deondeveveio)
	console.log("Origem:", origem)
	console.log("Sistema Operacional:", os)
	console.log("Linguagens:", window.clientInformation.languages)
	console.log("App Version:", window.clientInformation.appVersion)
	console.log("Vendor:", window.clientInformation.vendor)
	//console.log(window)
	//console.log()
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