//factorial iteratively.
var input;
input=5;
var fact=input;
for (let i=0;i<input;i++){
	console.log(fact);
	input--;
	fact=fact*input;
}
console.log("the factorial of the number is:"+fact);