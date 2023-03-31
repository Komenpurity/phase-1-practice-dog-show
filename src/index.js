document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then((response) => response.json()) 
    .then((data) => {
        console.log(data)
        displayDogDetails(data)
    })
})

const tableBody = document.getElementById("table-body")
const tableData = document.createElement("td") 
const editBtn = document.createElement("button") 
const form = document.getElementById("dog-form")

//display dog details on the table
function displayDogDetails(data){
    return data.forEach((dog) => {
        tableBody.innerHTML += `<tr data-id = ${dog.id}> <td>${dog.name}</td> <td>${dog.breed}</td>  <td>${dog.sex}</td>  <td><button data-id=${dog.id}  id="dog_id">Edit</button></td>  </tr>`
       // console.log(tableBody) 
    })
}


fetch(`http://localhost:3000/dogs/${id}`)
.then((response) => response.json())
.then((data) => formSubmit(data))

//on submit of the form
function formSubmit(data,id,event){
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        form.name.value = data.name.value
        form.breed.value = data.breed.value
        form.sex.value = data.sex.value
        form.dataset.id = data.id
    })
}