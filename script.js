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
})
