function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const mensagemErro = document.getElementById("mensagemErro");
    const lista = document.getElementById("listaTarefas");
  
    if (input.value.trim() === "") {
      mensagemErro.textContent = "Por favor, insira uma tarefa.";
      input.focus();
      return;
    }
  
    mensagemErro.textContent = "";
  
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = input.value;
  
    novaTarefa.onclick = function () {
      this.classList.toggle("concluida");
    };
  
    const botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = '<i class="fas fa-trash"></i>';
    botaoRemover.className = "remover-btn";
    botaoRemover.onclick = function (e) {
      e.stopPropagation();
      lista.removeChild(novaTarefa);
    };
  
    novaTarefa.appendChild(botaoRemover);
    lista.appendChild(novaTarefa);
  
    input.value = "";
    input.focus();
  }
  