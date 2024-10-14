 function addingEventListener() {
        const input = document.getElementById('button');
        input.addEventListener('click', clickAlert); 
    }
    addingEventListener(); 

function clickAlert() {
    alert('I was clicked!');
}

function addingEventListener() {
    console.log("addingEventListener called");
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
}

    

