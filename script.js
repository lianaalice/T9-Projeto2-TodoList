//projeto 2 - liana e ode :)
// ## Requisitos
// - Adicionar itens na lista ---- checked
// - Marcar itens concluídos individualmente
// - Excluir itens individualmente
// - Validar campo de texto para não entrar itens vazios
// - Limpar campo de texto depois que insere o item na lista ---- checked

// **BÔNUS**

// - Marcar todos os itens como feito
// - Excluir todos os itens da lista
// - Reorganizar a ordem "arrastando" os cards utilizando drag and drop


window.addEventListener('DOMContentLoaded', function(){

const lista = document.querySelector('#todoLista')

const inputText = document.querySelector('#todoInput')
const inputSubmit = document.querySelector('#todoSubmit')

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    let itemLista = document.createElement('li')
    itemLista.innerText = inputText.value
    lista.appendChild(itemLista)
    if(inputText.value > "") {
        inputText.value = ""
    } 
    
})

})