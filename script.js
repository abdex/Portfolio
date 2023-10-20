fetch('/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {

const displayTarget = document.querySelector('.target')

let output = '';

data.projects.forEach(function (item) {
    
    output += '<div class="projects">'
    output += '<h2>' + item.name + '</h2>'
    output += '<p>' + item.date + '</p>'
    output += '<p>' + item.details + '</p>'
    output += "<a href='https://github.com' target=_blank>" + "<button>" + item.location + "</button>" + "</a>"
    output += '<div class="project_images"><img src="' + item.image + '" /></div>'
    output += '</div>'
})

displayTarget.innerHTML = output
})


// const toggleButton = document.querySelector('.toggleButton')
// document.querySelector('.toggleButton').addEventListener('click', handleClick)

// function handleClick (event) {
//     event.preventDefault()
//     const modal = document.querySelector('.modal');
//     if (modal.style.display === "block") {
//         modal.style.display = "none";
//     }
//     else {
//         modal.style.display = "block";
//     }
// }

const span = document.getElementsByClassName("close") [0]; {

    span.onclick = function() {
    modal.style.display = "none";
}
}


let modal = document.querySelector("#myModal")
let button = document.querySelector(".openModalButton")


  document.querySelectorAll('.openModalButton').forEach(function(button){
    button.addEventListener('click', function(event) {
        
        modal.style.display = 'block';

    })
})

let submit = document.querySelector("#submit")

    submit.addEventListener('click', function(event) {
        event.preventDefault()
    }
    )
