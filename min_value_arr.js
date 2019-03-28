/*Note : Solutions should be uploaded to GitHub  
 - 1:Statement:Input->Arrayof'n'elements.Update all elements
 of givenarray to some MINIMUM value,such that SUM of all element
  so this new array is strictly greater than the SUM of all elements of initial array.
  Sample Input :​​ arr = [1, 2, 3, 4, 5]Sample Output:​​ 4 Explanation 
  :4 is the smallest value such that 4+4+4+4+4 > 1+2+3+4+5
  */
arr1 =[1,2,3,4,5];
var length= arr1.length;
var sum = 0;
var arr=[];


for(let i=0; i<arr1.length;i++){
	sum=sum+arr1[i];	
	}
//loop to add array elements


//loop to get the minimum value in the array which satisfies the condition	
for(let i=0;i<arr1.length;i++){
	
	if(arr1[i]*length>sum){
		console.log(arr1[i]);
		break;
	}

}