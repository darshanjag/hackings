var input = [1,2,3]
var add=0;
function sum(){
	for(i=0;i<input.length;i++){

		add=input[i]
		console.log(i);
		add=add+input[i];
	}
	console.log(add);
}
