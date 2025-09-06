// script/explorer.js

const container = document.getElementById('plantesContainer');
const searchInput = document.getElementById('searchInput');
let allPlantes = [];

fetch('data/plantes.json')
  .then(res => res.json())
  .then(data => {
    allPlantes = data;
    afficherPlantes(allPlantes);
  })
  .catch(err => {
    container.innerHTML = "<p>Erreur lors du chargement des plantes.</p>";
    console.error(err);
  });

function afficherPlantes(plantes) {
  container.innerHTML = plantes.map(plante => `
    <div class="carte-plante">
      <a href="plantes/plante.html?slug=${plante.slug}">
        <img src="${plante.image}" alt="${plante.nom}" class="carte-img"/>
        <h2>${plante.nom}</h2>
        <p><em>${plante.nom_scientifique}</em></p>
        <div class="badges">
          ${plante.badges.map(b => `<span class="badge">${b}</span>`).join('')}
        </div>
      </a>
    </div>
  `).join('');
}

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtres = allPlantes.filter(plante =>
    plante.nom.toLowerCase().includes(query) ||
    plante.nom_scientifique.toLowerCase().includes(query) ||
    plante.autres_noms.toLowerCase().includes(query)
  );
  afficherPlantes(filtres);
});
