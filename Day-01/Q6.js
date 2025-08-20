function printElements(arr){
	for(let item of arr){
		if(Array.isArray(item)){
			printElements(item);
		}
		else{
			console.log(item);
		}
	}
}

// Example
let multiArr = [
  [1, 2, 3],
  [4, [5, 6]],
  7
];

printElements(multiArr);