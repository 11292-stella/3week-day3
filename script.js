const modificaForm = document.getElementById("listaComp")
modificaForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const firstnameInput = document.getElementById(`firstname`)
  const lastnameInput = document.getElementById(`lastname`)
  const phoneInput = document.getElementById(`phone`)
  const ageInput = document.getElementById(`age`)

  const result = {
    firstname: firstnameInput.value,
    lastname: lastnameInput.value,
    phone: phoneInput.value,
    age: ageInput.value,
  }
  console.log(result)

  const infoAggiunte = document.createElement(`div`)
  infoAggiunte.classList.add(`stampa`)
  infoAggiunte.innerHTML = `
  <p>${result.firstname} </p>
  <p>${result.lastname}</p>
  <p>${result.phone} </p>
  <p>${result.age}</p
  
  
  
  <button onclick="deleteCard(event)">Elimina</button>
  `

  const AggiunteDiv = document.getElementById("Risultati-salva")
  AggiunteDiv.appendChild(infoAggiunte)
})

function deleteCard(event) {
  event.target.parentElement.remove()
}

function deleteCard(event) {
  event.target.closest(".stampa").remove()
}
