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
    output += "<a href='#'><p>" + item.location + "</p></a>"
    output += '<div class="project_images"><img src="' + item.image + '" /></div>'
    output += '</div>'
})

displayTarget.innerHTML = output
})


