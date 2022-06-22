var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;
const CURRENT_NUMBER1 = 9;
const CURRENT_NUMBER2 = 0; 

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
	if(currentNumber >= 9){
		currentNumberWrapper.innerHTML = CURRENT_NUMBER1
	}
	
	if(currentNumber < 0){
		currentNumberWrapper.innerHTML = CURRENT_NUMBER2
		
	}
}

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	if(currentNumber < 0){
		currentNumberWrapper.innerHTML = CURRENT_NUMBER2
		
	}

	if(currentNumber >= 9){
		currentNumberWrapper.innerHTML = CURRENT_NUMBER1
	}
	
}