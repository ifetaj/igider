// script/index.js

fetch('data/plantes.json')
  .then(res => res.json())
  .then(data => {
    const planteDuMois = data.find(p => p.plante_du_mois);
    if (!planteDuMois) return;

    const section = document.querySelector('.highlight');
    section.innerHTML = `
      <h2>🌿 Plante du mois : ${planteDuMois.nom}</h2>
      <div class="plant-month">
        <img src="${planteDuMois.image}" alt="${planteDuMois.nom}" class="plant-image">
        <div class="plant-info">
          <p><strong>Nom scientifique :</strong> ${planteDuMois.nom_scientifique}</p>
          <p><strong>Famille :</strong> ${planteDuMois.famille}</p>
          <p><strong>Usages :</strong> ${planteDuMois.usages}</p>
          <p><strong>Où la trouver :</strong> ${planteDuMois.habitat}</p>
          <p><strong>Les oiseaux associes :</strong> ${planteDuMois.oiseaux_associes}</p>
          <p><strong>Les oiseaux associes :</strong> ${planteDuMois.insectes_associes}</p>
          <a href="plantes/plante.html?slug=${planteDuMois.slug}" class="btn-en-savoir-plus">En savoir plus →</a>
        </div>
      </div>
    `;
  })
  .catch(err => console.error("Erreur lors du chargement de la plante du mois :", err));
