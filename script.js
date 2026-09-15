let total = 0;

const campoQuantidade = document.querySelector("#quantidade");
const botaoRegistrar = document.querySelector("#registrar");
const totalQuestoes = document.querySelector("#totalQuestoes");
const mensagem = document.querySelector("#mensagem");

botaoRegistrar.addEventListener("click", () => {
    const quantidade = Number(campoQuantidade.value);

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        mensagem.textContent = "Digite uma quantidade válida.";
        mensagem.style.color = "#b42318";
        return;
    }

    total += quantidade;

    totalQuestoes.textContent =
        `${total} ${total === 1 ? "questão resolvida" : "questões resolvidas"}`;

    mensagem.textContent = "Progresso registrado com sucesso!";
    mensagem.style.color = "#147d64";
    campoQuantidade.value = "";
});