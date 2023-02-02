window.addEventListener("DOMContentLoaded", () => {

    const game = document.querySelector(".game")
    const ansdiv = document.querySelector(".answerDiv")
    const chancesText = document.getElementById("chances")
    const answer = document.getElementById("answer")

    let word = ""
    let chances = 12
    let ansRemainig = 0


    document.getElementById("startingForm").addEventListener('submit', e => {
        e.preventDefault()
        chancesText.innerHTML = chances
        word = document.getElementById("startingForm-text-input").value
        ansRemainig = word.length
        for (let l of word) {
            const letter_box = document.createElement("div")
            letter_box.classList.add("box")
            letter_box.classList.add("boxOf" + l)
            ansdiv.appendChild(letter_box)
        }
        document.querySelector(".start").classList.add("visibilty_off")
        game.classList.toggle("visibilty_on")
    })

   

    document.getElementById("answerForm").addEventListener('submit', e => {
        e.preventDefault()
        

        if (word.includes(answer.value)) {
            document.querySelectorAll(".boxOf" + answer.value).forEach(f => {
                f.innerHTML = answer.value
                ansRemainig--
            })
        } else if (chances > 1) {
            chances--
            chancesText.innerHTML = chances
        } else {
            game.classList.toggle("visibilty_on")
            document.querySelector(".gameOver").classList.toggle("visibilty_on")
            document.getElementById("overTitle").innerHTML = "Game Over"
        }
        if (ansRemainig < 1) {
  
            game.classList.toggle("visibilty_on")
            document.querySelector(".gameOver").classList.toggle("visibilty_on")
            document.getElementById("overTitle").innerHTML = "Won"
        }
        answer.value = ""
    })


})