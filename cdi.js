if (!(document.referrer === undefined || document.referrer === null || document.referrer === "")) {

	let regexp = /(\/\/.+?(\/|$))/mi;					

	let pageatual = window.location.href;

	let deondeveveio = window.document.referrer;

	let origem = window.location.origin;



	pageatual = regexp.exec(pageatual);

	deondeveveio = regexp.exec(deondeveveio);

	origem = regexp.exec(origem);

	if(deondeveveio[0] != pageatual[0]){

		localStorage.setItem("Page", deondeveveio[0]);

	}else{

		console.log("Page:", window.location.href);					

	}

}