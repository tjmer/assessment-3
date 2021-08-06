function favColor (evt){
    evt.preventDefault();
    alert("My favorite color is BLUE")
}

function favPlace (evt){
    evt.preventDefault();
    alert("My favorite place is HOME")
}

function favRit (evt){
    evt.preventDefault()
    alert(`My favorite ritual is water in the morning`)
}

document.querySelector(`#color`).addEventListener(`click`, favColor);

document.querySelector(`#place`).addEventListener(`click`, favPlace)

document.querySelector(`#ritual`).addEventListener(`click`, favRit)