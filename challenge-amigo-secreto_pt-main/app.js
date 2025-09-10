//Array, que armazenará os nomes dos amigos inseridos.
let amigos = [];
//Implementa uma função para agregar amigos
function adicionarAmigo () {
    let nomesAmigos = document.querySelector('input').value;
console.log(nomesAmigos);
//Verificar se o campo não esta vazio
    if (nomesAmigos==''){
        alert("Por favor, insira um nome.");
//Se o campo não estiver vazio adicionar o nome na lista
    } else {
        amigos.push(nomesAmigos);
        atualizarLista();
        console.log(amigos);
        limparCampo();
    } 
    
}
//Implementa uma função para atualizar a lista de amigos
function atualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";
    //loop for para percorrer a lista.
        for (let i= 0; i < amigos.length; ++i) {
            console.log(amigos[i]);
//Criar novo elemento<li>
    let novoItem = document.createElement("li")
    // inserir o nome com 
    novoItem.innerHTML =amigos[i];
//adicionar o <li> a lista com appendChild
    lista.appendChild(novoItem);
        }
   
}
//Implementa uma função para sortear os amigos
function sortearAmigo() {
    if (amigos.length === 0){
        console.log('Lista vazia');
    } else {
        let nome = Math.floor(Math.random() * amigos.length);
        amigos[nome];
        exibirNomeSorteado('resultado',`O amigo secreto sorteado foi: ${amigos[nome]}`);
    }
    console.log(nome);
}

  //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
  function exibirNomeSorteado(tag,texto) {
    let elemento = document.getElementById(tag);
    elemento.innerHTML= texto;
  }

//Função para limpar o Campo
function limparCampo() {
    let input = document.querySelector('input');
    input.value = "";
}
