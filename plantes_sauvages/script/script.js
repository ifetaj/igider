// Récupérer le slug de l'URL
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

if (!slug) {
  document.getElementById('fiche-container').innerHTML = `<p>Aucune plante sélectionnée.</p>`;
} else {
  fetch('../data/plantes.json')
    .then(response => response.json())
    .then(plantes => {
      const plante = plantes.find(p => p.slug === slug);
      if (!plante) {
        document.getElementById('fiche-container').innerHTML = `<p>Plante introuvable.</p>`;
        return;
      }

      // Générer le contenu HTML
      const ficheHTML = `
        <section class="fiche-header">
          <img src="${plante.image}" alt="${plante.nom}" class="fiche-image">
          <div class="fiche-titre">
            <h1>${plante.nom}</h1>
            <div class="badges">
              ${plante.badges.map(b => `<span class="badge">${b}</span>`).join('')}
            </div>
            <p class="nom-scientifique"><em>${plante.nom_scientifique}</em></p>
          </div>
        </section>

        <section class="fiche-contenu">
          <h2>Description</h2>
          <p>${plante.description}</p>

          <h2>Usages médicinaux</h2>
          <ul>${plante.usages.map(u => `<li>${u}</li>`).join('')}</ul>

          <h2>Habitat</h2>
          <p>${plante.habitat}</p>

          <h2>Récolte & précautions</h2>
          <p>${plante.recolte}</p>

          <h2>Autres noms</h2>
          <p>${plante.autres_noms}</p>
        </section>
      `;

      document.getElementById('fiche-container').innerHTML = ficheHTML;
    })
    .catch(error => {
      console.error("Erreur lors du chargement :", error);
      document.getElementById('fiche-container').innerHTML = `<p>Erreur lors du chargement des données.</p>`;
    });
}
