console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted Successfully")
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function catComp (evt){
	evt.preventDefault();
	alert('You are the GREATEST!!!')
}

document.querySelector("img").addEventListener('mouseover', catComp);