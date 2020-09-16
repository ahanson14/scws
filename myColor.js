function myColor(){
	var hexColor = [];
	while (hexColor.length < 6){
	//generates each digit of the hex color for page's background
	//only allows for light colors to create pastel effect (10 - 15)							
		var x = (Math.ceil(Math.random()*6)) + 9;
		var y = x.toString(16);
		hexColor.push(y);
	}
	var bgColor = "#";
	for (var i = 0; i < hexColor.length; i++)
		bgColor+= hexColor[i];				
	document.body.style.backgroundColor = bgColor;
	document.getElementById("hex").innerText = bgColor.toUpperCase();
}
