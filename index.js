var clickImg = 0;
var elmo = document.getElementById('elmo');
var manualBool = true;

function changeAuto(ManualCheck) {
	console.log ("clickImg is it value: " + clickImg);

	if (manualBool == true && ManualCheck == true) {
		manualBool = false;
	}else{
		if (manualBool == false && ManualCheck == true) {
			manualBool = true;
		}
	}
	if (manualBool == false) {
		switch (clickImg){
			case 0:
				elmo.style.left = "45%";
				clickImg = 1;
				break;
			case 1:
				elmo.style.left = "25%";
				clickImg = 2;
				break;
			case 2:
				elmo.style.left = "5%";
				clickImg = 3;
				break;
			case 3:
				elmo.style.left = "25%";
				clickImg = 0;
				break;
		}
		setTimeout(() => {
			changeAuto();
		}, "100")	
	}
}