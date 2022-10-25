const characterName = document.querySelector(".right-name")

const characterImage = document.querySelector(".image")

const characterGender = document.querySelector(".right-gender")

const characterSpecies = document.querySelector(".right-species")

const characterOrigin = document.querySelector(".right-origin")

const characterLocation = document.querySelector(".right-location")

const characterStatus = document.querySelector(".right-status")

const led = document.querySelector(".led")

const button = document.querySelector(".button_search")

const name_input = document.querySelector("#id_input")

const GetAPI = async (character) => {
    const apiURL = `https://rickandmortyapi.com/api/character/${character}`

    const res = await fetch(apiURL)

    const data = await res.json()

    return data
}

const renderApi = async (character) => {

    characterImage.innerHTML = "Loading..."

    const data = await GetAPI(character)

    if (data) {
        characterImage.src = data.image
    } else {
        characterImage.src = "../img/interrogação.png"
    }

    characterName.innerHTML = data.name

    characterGender.innerHTML = data.gender
    
    characterSpecies.innerHTML = data.species

    if (characterOrigin.innerHTML = data["origin"].name == "Earth (Replacement Dimension)") {
        characterOrigin.innerHTML = "Earth (R-D)"
    }else {
        characterOrigin.innerHTML = data["origin"].name
    }

    if (characterLocation.innerHTML = data["location"].name == "Earth (Replacement Dimension)") {
        characterLocation.innerHTML = "Earth (R-D)"
    }else {
        characterLocation.innerHTML = data["location"].name
    }

    

    if (characterStatus.innerHTML = data.status == "Alive") {
        led.style.background = "#0fbd0f"
    }else {
        led.style.background = "red"
    }

    characterStatus.innerHTML = data.status

    name_input.value = ""

}


button.addEventListener("click", (e) => {
    e.preventDefault()

    const character_name = name_input.value

    renderApi(character_name)

})