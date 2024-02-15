import { Modal } from "./modal.js"
import {AlertError} from "./alert-error.js"
import {IMC, notANumber} from "./utils.js"

// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = (event) => {
    event.preventDefault()


    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotAnumber = notANumber(weight) || notANumber(height)
    
    if (weightOrHeightIsNotAnumber) {
      AlertError.open()
        return;
    }
    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// fechar Janela de erro ao digitar no campo

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()




