//projeto 2 (em dupla) - liana e ode :)
// ## Requisitos
// - Adicionar itens na lista ---- checked
// - Marcar itens concluídos individualmente ---- checked
// - Excluir itens individualmente ---- checked
// - Validar campo de texto para não entrar itens vazios --- checked
// - Limpar campo de texto depois que insere o item na lista ---- checked

// **BÔNUS**

// - Marcar todos os itens como feito ---checked
// - Excluir todos os itens da lista  ----checked
// - Reorganizar a ordem "arrastando" os cards utilizando drag and drop


window.addEventListener('DOMContentLoaded', function(){

const lista = document.querySelector('#todoLista')
const inputText = document.querySelector('#todoInput')
const inputSubmit = document.querySelector('#todoSubmit')

//const tarefas = document.querySelector('#todoTarefas')

//const divLista = document.querySelector('.todo__tarefas-lista')

const btnMarcar = document.querySelector('#todoMarcarTodos')
const btnRemover = document.querySelector('#todoRemoverTodos')




inputSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    let boxLista = document.createElement('span')
    
    let itemLista = document.createElement('li')
    let btnLista = document.createElement('button')
    btnLista.innerText = 'X'
    
    itemLista.innerText = inputText.value
    
    // - Validar campo de texto para não entrar itens vazios
    if (inputText.value.trim() == ""){
        alert("Tem que pôr uma tarefa pra funcionar o bagulho, bem");
        return false;
    }
    // limpar campos de texto depois
    if(inputText.value > "") {
        inputText.value = ""
    } 
    
    boxLista.style.display = 'flex'
    boxLista.style.justifyContent = 'space-between'
    
    boxLista.appendChild(itemLista)
    boxLista.appendChild(btnLista)
    lista.appendChild(boxLista)
    
    btnLista.addEventListener('click', () => {
        lista.removeChild(boxLista)
    })
    
    itemLista.addEventListener('click', () => {
        itemLista.classList.toggle('checked')
        itemLista.classList.toggle('over')
    })

    btnRemover.addEventListener('click', function(){
        lista.removeChild(boxLista)

    })

    btnMarcar.addEventListener('click', function(){
        itemLista.classList.toggle('checked')
        itemLista.classList.toggle('over')    
    })


})

})