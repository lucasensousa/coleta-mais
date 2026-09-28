const pontosColeta = [
    {
        nome: "Ponto de Coleta 1",
        endereco: "Lavras - MG",
        status: "ativo",
        materiais: [
            "Computadores",
            "Celulares",
            "Periféricos"
        ],
        horarios: [
            "Segunda a sexta, das 08h às 17h"
        ],
        condicoes: [
            "Equipamentos devem ser entregues desligados."
        ]
    },
    {
        nome: "Ponto de Coleta 2",
        endereco: "Lavras - MG",
        status: "ativo",
        materiais: [
            "Pilhas",
            "Baterias",
            "Pequenos eletrônicos"
        ],
        horarios: [
            "Segunda a sábado, das 09h às 18h"
        ],
        condicoes: [
            "Baterias devem ser separadas dos demais equipamentos."
        ]
    }
];

const listaPontos = document.getElementById("lista-pontos");

const pontosAtivos = pontosColeta.filter(
    ponto => ponto.status === "ativo"
);

if (pontosAtivos.length === 0) {
    listaPontos.innerHTML = `
        <div class="card">
            <p>Nenhum ponto de coleta disponível.</p>
        </div>
    `;
} else {
    pontosAtivos.forEach(ponto => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${ponto.nome}</h2>

            <p>
                <strong>Localização:</strong>
                ${ponto.endereco}
            </p>

            <p>
                <strong>Materiais aceitos:</strong>
                ${ponto.materiais.join(", ")}.
            </p>

            <p>
                <strong>Horário:</strong>
                ${ponto.horarios.join(" | ")}
            </p>

            <p>
                <strong>Condições de entrega:</strong>
                ${ponto.condicoes.join(" ")}
            </p>
        `;

        listaPontos.appendChild(card);
    });
}