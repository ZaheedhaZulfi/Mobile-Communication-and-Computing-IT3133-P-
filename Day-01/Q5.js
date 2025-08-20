function multiplyMatrices(A,B){
	let rowsA = A.length,
		colsA = A[0].length,
		rowsB = B.length,
		colsB = B[0].length;
		
		
		if(colsA !== rowsB){
		console.log("Matrix multiplication not possible: columns of A must match rows of B");
		}
		
		let result = [];
		
		for (let i=0; i<rowsA; i++){
			result[i] = [];
			for(let j=0; j<colsB; j++){
			let sum = 0;
			for(let k=0; k <rowsB; k++){
				sum += A[i][k] * B[k][j];
			}
			result[i][j] = sum;
			}
		}
	return result;
}

let A = [
  [1, 2, 3],
  [4, 5, 6]
]; // 2×3

let B = [
  [7, 8],
  [9, 10],
  [11, 12]
]; // 3×2

console.log(multiplyMatrices(A, B));