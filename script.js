//your JS code here. If required.
let sqr = document.querySelectorAll(".square");
 sqr.forEach((square) => {
square.addEventListener("mouseenter", () => {
	square.style.backgroundColor = "coffee";
						
	});

square.addEventListener("mouseleave", () =>{
square.style.backgroundColor = "#E6E6FA"
});
 });