var dscc = require('dscc');

function draw(data) {
  const container = document.getElementById('menu');
  container.innerHTML = `
    <div class="menu">
      <button onclick="alert('Filtro São Paulo aplicado!')">São Paulo</button>
      <button onclick="alert('Filtro MS aplicado!')">Mato Grosso do Sul</button>
    </div>
  `;
}

dscc.subscribeToData(draw, {transform: dscc.tableTransform});
