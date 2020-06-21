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

window.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector("#todoLista");
  const inputText = document.querySelector("#todoInput");
  const inputSubmit = document.querySelector("#todoSubmit");

  const btnMarcar = document.querySelector("#todoMarcarTodos");
  const btnRemover = document.querySelector("#todoRemoverTodos");

  //função add item
  function addLista(itemLista) {
    itemLista.innerText = inputText.value;
  }

  //função exclui item
  function excluirLista(boxLista) {
    lista.removeChild(boxLista);
  }

  //função marcar todos itens
  function marcarTodosItems (itemLista){
    itemLista.classList.add("checked");
  }

//evento geral -
  inputSubmit.addEventListener("click", (event) => {
    //previnindo comportamento padrão do click no submit e atualização imediata da pagina ao click
    event.preventDefault();

    //criando lista. Igualando valor escrito no input ao texto da 'li'
    const boxLista = document.createElement("span");
    const itemLista = document.createElement("li");

    let btnLista = document.createElement("button");
    btnLista.innerText = "X";

    //estilo do span boxLista
    boxLista.style.display = "flex";
    boxLista.style.justifyContent = "space-between";

    //dando parentesco, add itens sobre itens
    boxLista.appendChild(itemLista);
    boxLista.appendChild(btnLista);
    lista.appendChild(boxLista);

    //function add
    addLista(itemLista);
 
    // - Validar campo de texto para não entrar itens vazios
    if (inputText.value.trim() == "") {
      alert("Tem que pôr uma tarefa pra funcionar a lista, bem");
      return false;
    }
 
    // limpar campos de texto depois de usado
    if (inputText.value > "") {
      inputText.value = "";
    }

    //remove individual event and function
    btnLista.addEventListener("click", () => {
      lista.removeChild(boxLista);
    });

    //checklist individual event and function
    itemLista.addEventListener("click", () => {
      itemLista.classList.toggle("checked");
    });


    //eventos dos btn
    btnMarcar.addEventListener("click", function () {
    marcarTodosItems (itemLista);
});

    btnRemover.addEventListener("click", function () {
      excluirLista(boxLista);
    });
});


});
