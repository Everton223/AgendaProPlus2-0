function showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("visible"));
    document.getElementById(tab).classList.add("visible");
}

let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

document.getElementById("formAgendamento").addEventListener("submit", function(e) {
    e.preventDefault();

    let novo = {
        horario: horario.value,
        data: data.value,
        cliente: cliente.value,
        servico: servico.value,
        valor: Number(valor.value),
        pagamento: pagamento.value
    };

    agendamentos.push(novo);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    alert("Agendamento salvo!");
    this.reset();
});

function atualizarLista() {
    let hoje = new Date().toISOString().split("T")[0];

    let lista = agendamentos.filter(a => a.data === hoje);

    document.getElementById("listaAgendamentos").innerHTML =
        lista.map(a => `
        <div class="card">
            <b>${a.horario}</b> - ${a.cliente}<br>
            ${a.servico}<br>
            R$ ${a.valor.toFixed(2)}<br>
            <button class="share" onclick="shareWhatsApp('${a.cliente}', '${a.data}', '${a.horario}', '${a.servico}', '${a.valor}')">WhatsApp</button>
        </div>
    `).join("");

    let total = lista.reduce((t, a) => t + a.valor, 0);

    document.getElementById("totalDia").innerHTML =
        `Total do dia: R$ ${total.toFixed(2)}`;
}

function shareWhatsApp(cliente, data, hora, servico, valor) {
    let texto = `Olá ${cliente}, aqui está seu agendamento:
📅 ${data}
⏰ ${hora}
💈 Serviço: ${servico}
💰 Valor: R$ ${valor}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`);
}

setInterval(atualizarLista, 500);
