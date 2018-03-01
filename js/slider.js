var currentImage = 0;
var currentMessage = 0;
var maxNum = 0;
var elImg = document.getElementsByClassName("slider_image");
var elMsg = document.getElementsByClassName("slider_message");
var elMsg1 = document.getElementsByClassName("slider_message_icon");
var elMsg2 = document.getElementsByClassName("slider_message_name");
var elMsg3 = document.getElementsByClassName("slider_message_context");


function slideLeft() {
	if (currentMessage < currentImage) {
		currentImage--;
		elImg[currentImage].style.cssText = "transform:scale(1) translate(0,0%);";
		elImg[currentImage+1].style.cssText = "transform:translate(0,125%)";
	}
	else if (currentMessage > currentImage) {
		currentMessage--;
		elMsg[currentMessage].style.cssText = "opacity:1;";
		elMsg[currentMessage+1].style.cssText = "opacity:0;";
	}
	else {
		currentImage--;
		currentMessage--;
		if (currentImage < 0) {
			currentImage = 0;
		}
		if (currentMessage < 0) {
			currentMessage = 0;
		}
		elImg[currentImage].style.cssText = "transform:scale(1) translate(0,0%);";
		elImg[currentImage+1].style.cssText = "transform:translate(0,125%)";
		elMsg[currentMessage].style.cssText = "opacity:1; z-index:1;";
		elMsg[currentMessage+1].style.cssText = "opacity:0; z-index:0;";
		elMsg1[currentMessage].style.cssText = "transform:scale(1);";
		elMsg1[currentMessage+1].style.cssText = "transform:scale(1.2);";		
		elMsg2[currentMessage].style.cssText = "transform:translate(0,0px);";
		elMsg2[currentMessage+1].style.cssText = "transform:translate(0,10px);";
		elMsg3[currentMessage].style.cssText = "transform:translate(0,0px);";
		elMsg3[currentMessage+1].style.cssText = "transform:translate(0,10px);";
	}
}

function slideRight() {
	currentImage++;
	maxNum = elImg.length - 1;
	if (currentImage > maxNum) {
		currentImage = maxNum;
	}
	elImg[currentImage].style.cssText = "transform:translate(0,0%);";
	elImg[currentImage-1].style.cssText = "transform:scale(1.2);";

    currentMessage++;
	maxNum = elMsg.length - 1;
	if (currentMessage > maxNum) {
		currentMessage = maxNum;
	}
	elMsg[currentMessage].style.cssText = "opacity:1; z-index:1;";
	elMsg[currentMessage-1].style.cssText = "opacity:0; z-index:0;";
	elMsg1[currentMessage].style.cssText = "transform:scale(1);";
	elMsg1[currentMessage-1].style.cssText = "transform:scale(1.2);";
	elMsg2[currentMessage].style.cssText = "transform:translate(0,0px);";
	elMsg3[currentMessage].style.cssText = "transform:translate(0,0px);";
}