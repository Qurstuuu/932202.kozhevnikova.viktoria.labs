document.addEventListener("DOMContentLoaded", () => {
	const curtain = document.getElementById("curtain")
	const light = document.getElementById("light")
	const lamp_leg = document.getElementById("lamp_leg")
	const lamp_top = document.getElementById("lamp_top")

	let light_on = false

	curtain.addEventListener("click", (event) => {
		curtain.style.transition = "translate 1s ease";
		curtain.style.translate = "0 -100%";
	});
	lamp_top.addEventListener("click", (event) => {
		if(light_on){
			light.style.backgroundColor = "rgb(0, 0, 0, 0)"
			light_on = false
		} else {
			light.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
			light_on = true
			girl.style.opacity = "100%"
			rabbit.style.opacity = "100%"
			hat.style.opacity = "100%"
		}
	})
	lamp_leg.addEventListener("click", (event) => {
		if(light_on){
			light.style.backgroundColor = "rgb(0, 0, 0, 0)"
			light_on = false
		} else {
			light.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
			light_on = true
			girl.style.opacity = "100%"
			rabbit.style.opacity = "100%"
			hat.style.opacity = "100%"
		}
	})
	rabbit.addEventListener("click", (event) => {
		bird.style.opacity = "100%"
		rabbit.style.transform = "translateY(200%)";
		setTimeout(function foo(){
    		bird.style.transform = "translateY(-200%)";
		}, 2000)
	})
	bird.addEventListener("click", (event) => {
		bird.style.transform = "translateY(0)";
		setTimeout(function foo(){
			rabbit.style.transform = "translateY(0)";
		}, 2000)
	})
});