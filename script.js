//your JS code here. If required.
let sqr = document.querySelectorAll(".square");
 sqr.forEach((square) => {
square.addEventListener("mouseenter", () => {
	square.style.backgroundColor = "#6F4E37";
						
	});

square.addEventListener("mouseleave", () =>{
square.style.backgroundColor = "#E6E6FA"
});
 });