const accords = [
  {
    gj: 1,
    id: "MOU-PTF-WB-TRANSNUM-RURAL-2019-AM1",
    titre: "Avenant à l’Accord de Financement – Projet de Transformation Numérique des Zones Rurales",
    type: "Convention de financement",
    partenaire: "Banque mondiale / IDA",
    domaine: "Inclusion numérique",
    statut: "En cours",
    maturite: "Mature",
    documentation: "À compléter"
  },
  {
    gj: 2,
    id: "MOU-BILAT-BEN-RWA-NUM-2023",
    titre: "Accord de coopération Bénin – Rwanda dans le domaine du numérique",
    type: "MoU / Lettre d’intention",
    partenaire: "Rwanda",
    domaine: "Gouvernance numérique",
    statut: "À préciser",
    maturite: "Dormant",
    documentation: "À compléter"
  },
  {
    gj: 3,
    id: "PROJ-BEN006-LUX-XXXX",
    titre: "Projet BEN006",
    type: "Projet",
    partenaire: "Luxembourg",
    domaine: "Gouvernance numérique",
    statut: "En cours",
    maturite: "Intermédiaire",
    documentation: "À compléter"
  },
  {
    gj: 4,
    id: "MOU-BILAT-BEN-CHN-MEDIA-2023",
    titre: "Mémorandum d’Entente Bénin – Chine sur le partenariat dans le domaine des médias publics",
    type: "MoU",
    partenaire: "Chine",
    domaine: "Médias & communication digitale",
    statut: "Terminé",
    maturite: "Intermédiaire",
    documentation: "Disponible"
  },
  {
    gj: 5,
    id: "MOU-BILAT-BEN-CHN-NUM-2023",
    titre: "Accord Bénin – Chine dans le domaine du numérique",
    type: "Accord de coopération",
    partenaire: "Chine",
    domaine: "Économie numérique",
    statut: "En cours",
    maturite: "Intermédiaire",
    documentation: "À compléter"
  },
  {
    gj: 6,
    id: "MOU-BILAT-BEN-ZAF-ECONUM-YYYY",
    titre: "Accord de coopération entre le Bénin et l’Afrique du Sud dans le domaine de l’économie numérique",
    type: "Accord de coopération",
    partenaire: "Afrique du Sud",
    domaine: "Économie numérique",
    statut: "À préciser",
    maturite: "Intermédiaire",
    documentation: "À compléter"
  },
  {
    gj: 7,
    id: "PROT-SADA-MND-BEN-2022",
    titre: "Protocole d’accord relatif à la mise en œuvre de Smart Africa Digital Academy (SADA) au Bénin",
    type: "Protocole d’accord",
    partenaire: "Smart Africa",
    domaine: "Développement des compétences numériques",
    statut: "Terminé",
    maturite: "Mature",
    documentation: "Disponible"
  },
  {
    gj: 8,
    id: "DECL-SATA-SAA-2023",
    titre: "Déclaration d’établissement de la Smart Africa Trust Alliance (SATA)",
    type: "Déclaration",
    partenaire: "Smart Africa",
    domaine: "Cybersécurité et confiance numérique",
    statut: "À préciser",
    maturite: "Dormant",
    documentation: "À compléter"
  },
  {
    gj: 9,
    id: "PROJ-IDECT-SAA-2024",
    titre: "Projet de Soutien Institutionnel aux Politiques de Paiement Numérique et de Commerce Électronique pour le Commerce Transfrontalier (IDECT)",
    type: "Projet",
    partenaire: "Smart Africa",
    domaine: "Paiements numériques",
    statut: "En cours",
    maturite: "Dormant",
    documentation: "À compléter"
  },
  {
    gj: 10,
    id: "BP-SWG-SAA-2024",
    titre: "Blueprint continental Smart Women & Girls in ICT (SWG)",
    type: "Blueprint",
    partenaire: "Smart Africa",
    domaine: "Inclusion numérique",
    statut: "En cours",
    maturite: "Intermédiaire",
    documentation: "À compléter"
  },
  {
    gj: 11,
    id: "ACF-MULTI-BEN-UIT-TIC-2017",
    titre: "Accord Cadre de Coopération entre le Bénin et l’Union internationale des télécommunications (UIT)",
    type: "Accord-cadre",
    partenaire: "UIT",
    domaine: "Infrastructures numériques",
    statut: "À préciser",
    maturite: "Mature",
    documentation: "Disponible"
  },
  {
    gj: 12,
    id: "CCP-NAT-BEN-CCIB-MND-2019",
    titre: "Convention Cadre de Partenariat entre la CCIB et le MND",
    type: "Convention de partenariat",
    partenaire: "CCIB",
    domaine: "Développement des compétences numériques",
    statut: "Terminé",
    maturite: "Intermédiaire",
    documentation: "Disponible"
  },
  {
    gj: 13,
    id: "MOU-SECTORIEL-BEN-AFRINIC-INTERNET-2021",
    titre: "Protocole d’accord entre le MND Bénin et AFRINIC Ltd",
    type: "Partenariat technique",
    partenaire: "AFRINIC",
    domaine: "Infrastructures numériques",
    statut: "Terminé",
    maturite: "Mature",
    documentation: "Disponible"
  },
  {
    gj: 14,
    id: "CON-MULTI-BEN-KFW-PRSCGII-2021",
    titre: "Convention séparée au Contrat d’Aide Financière du PRSCG II avec la KfW",
    type: "Convention de financement",
    partenaire: "KfW",
    domaine: "Infrastructures numériques",
    statut: "En cours",
    maturite: "Mature",
    documentation: "Disponible"
  },
  {
    gj: 15,
    id: "MOU-BILAT-BEN-CHN-INFOCOM-2023",
    titre: "Mémorandum d’entente entre la République du Bénin et la République populaire de Chine dans le domaine de l’information et de la communication",
    type: "MoU",
    partenaire: "Chine",
    domaine: "Médias & communication digitale",
    statut: "Confirmé",
    maturite: "Intermédiaire",
    documentation: "Disponible"
  },
  {
    gj: 16,
    id: "MOU-BILAT-BEN-EST-EGA-2016",
    titre: "Mémorandum d’entente relatif au partenariat stratégique entre le Gouvernement de la République du Bénin et la e-Governance Academy d’Estonie",
    type: "MoU",
    partenaire: "Estonie",
    domaine: "Gouvernance numérique et e-gouvernance",
    statut: "À vérifier",
    maturite: "Activable",
    documentation: "Disponible"
  },
  {
    gj: 17,
    id: "NEG-BILAT-BEN-IND-ITELLC-XXXX",
    titre: "Projet de Memorandum of Understanding entre l’Inde et le Bénin pour l’établissement d’un IT Centre and English Language Learning Centre",
    type: "Projet de MoU",
    partenaire: "Inde",
    domaine: "Développement des compétences numériques",
    statut: "En négociation",
    maturite: "En négociation",
    documentation: "Projet disponible"
  },
  {
    gj: 18,
    id: "NEG-BILAT-BEN-IND-DIGSOL-XXXX",
    titre: "Projet de Memorandum of Understanding avec l’Inde sur le partage de solutions numériques réussies pour la transformation digitale",
    type: "Projet de MoU",
    partenaire: "Inde",
    domaine: "Transformation digitale",
    statut: "En négociation",
    maturite: "En négociation",
    documentation: "Projet disponible"
  },
  {
    gj: 19,
    id: "EXEC-MEDIA-BEN-CHN-NRTA-SRTB-2025",
    titre: "Mémorandum d’entente spécifique entre la SRTB et la NRTA dans le cadre du projet DREAM, dans le secteur des médias",
    type: "Instrument spécifique",
    partenaire: "Chine / SRTB",
    domaine: "Médias & archivage numérique",
    statut: "En cours",
    maturite: "Intermédiaire",
    documentation: "Disponible"
  }
];

const tableBody = document.getElementById("tableBody");
const cardsContainer = document.getElementById("cardsContainer");

const filterType = document.getElementById("filterType");
const filterPartenaire = document.getElementById("filterPartenaire");
const filterStatut = document.getElementById("filterStatut");
const filterMaturite = document.getElementById("filterMaturite");
const searchInput = document.getElementById("searchInput");
const resetFilters = document.getElementById("resetFilters");

const resultCount = document.getElementById("resultCount");

const totalAccords = document.getElementById("totalAccords");
const totalActifs = document.getElementById("totalActifs");
const totalNegociation = document.getElementById("totalNegociation");
const totalVerifier = document.getElementById("totalVerifier");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.getElementById("sidebar");

function getBadgeClass(statut) {
  const value = statut.toLowerCase();

  if (value.includes("cours") || value.includes("confirmé")) {
    return "confirmed";
  }

  if (value.includes("négociation")) {
    return "negotiating";
  }

  if (value.includes("terminé")) {
    return "terminated";
  }

  return "review";
}

function fillSelect(select, values) {
  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initializeFilters() {
  const types = [...new Set(accords.map(a => a.type))].sort();
  const partenaires = [...new Set(accords.map(a => a.partenaire))].sort();
  const statuts = [...new Set(accords.map(a => a.statut))].sort();
  const maturites = [...new Set(accords.map(a => a.maturite))].sort();

  fillSelect(filterType, types);
  fillSelect(filterPartenaire, partenaires);
  fillSelect(filterStatut, statuts);
  fillSelect(filterMaturite, maturites);
}

function filterAccords() {
  const typeValue = filterType.value;
  const partenaireValue = filterPartenaire.value;
  const statutValue = filterStatut.value;
  const maturiteValue = filterMaturite.value;
  const searchValue = searchInput.value.toLowerCase().trim();

  return accords.filter(accord => {
    const matchType = typeValue === "Tous" || accord.type === typeValue;
    const matchPartenaire = partenaireValue === "Tous" || accord.partenaire === partenaireValue;
    const matchStatut = statutValue === "Tous" || accord.statut === statutValue;
    const matchMaturite = maturiteValue === "Tous" || accord.maturite === maturiteValue;

    const fullText = `
      ${accord.id}
      ${accord.titre}
      ${accord.type}
      ${accord.partenaire}
      ${accord.domaine}
      ${accord.statut}
      ${accord.maturite}
      ${accord.documentation}
    `.toLowerCase();

    const matchSearch = fullText.includes(searchValue);

    return matchType && matchPartenaire && matchStatut && matchMaturite && matchSearch;
  });
}

function renderTable(data) {
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="10">Aucun accord ne correspond aux critères sélectionnés.</td>
      </tr>
    `;
    return;
  }

  data.forEach(accord => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${accord.gj}</td>
      <td>${accord.id}</td>
      <td>${accord.titre}</td>
      <td>${accord.type}</td>
      <td>${accord.partenaire}</td>
      <td>${accord.domaine}</td>
      <td><span class="badge ${getBadgeClass(accord.statut)}">${accord.statut}</span></td>
      <td>${accord.maturite}</td>
      <td>${accord.documentation}</td>
      <td>
        <button class="table-action" onclick="openModal(${accord.gj})">
          Voir
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

function renderCards(data) {
  cardsContainer.innerHTML = "";

  const selectedCards = data.slice(0, 6);

  if (selectedCards.length === 0) {
    cardsContainer.innerHTML = `
      <article class="agreement-card">
        <h3>Aucun accord trouvé</h3>
        <p>Modifiez les filtres ou réinitialisez la recherche.</p>
      </article>
    `;
    return;
  }

  selectedCards.forEach(accord => {
    const card = document.createElement("article");
    card.className = "agreement-card";

    card.innerHTML = `
      <div class="card-top">
        <span class="badge ${getBadgeClass(accord.statut)}">${accord.statut}</span>
        <span class="type">${accord.type}</span>
      </div>

      <h3>${accord.titre}</h3>

      <p><strong>Partenaire :</strong> ${accord.partenaire}</p>
      <p><strong>Domaine :</strong> ${accord.domaine}</p>
      <p><strong>ID :</strong> ${accord.id}</p>

      <div class="card-footer">
        <span class="maturity">Maturité : ${accord.maturite}</span>
        <button onclick="openModal(${accord.gj})">Voir la fiche</button>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

function updateStats(data) {
  totalAccords.textContent = accords.length;

  totalActifs.textContent = accords.filter(a =>
    a.statut === "En cours" || a.statut === "Confirmé"
  ).length;

  totalNegociation.textContent = accords.filter(a =>
    a.statut === "En négociation"
  ).length;

  totalVerifier.textContent = accords.filter(a =>
    a.statut === "À vérifier" || a.statut === "À préciser"
  ).length;

  resultCount.textContent = data.length;
}

function updateDisplay() {
  const filtered = filterAccords();
  renderTable(filtered);
  renderCards(filtered);
  updateStats(filtered);
}

function openModal(gj) {
  const accord = accords.find(a => a.gj === gj);

  if (!accord) return;

  modalBody.innerHTML = `
    <h2>${accord.titre}</h2>

    <div class="modal-list">
      <p><strong>ID Accord :</strong> ${accord.id}</p>
      <p><strong>Type :</strong> ${accord.type}</p>
      <p><strong>Partenaire :</strong> ${accord.partenaire}</p>
      <p><strong>Domaine principal :</strong> ${accord.domaine}</p>
      <p><strong>État :</strong> <span class="badge ${getBadgeClass(accord.statut)}">${accord.statut}</span></p>
      <p><strong>Niveau de maturité :</strong> ${accord.maturite}</p>
      <p><strong>Documentation :</strong> ${accord.documentation}</p>
    </div>
  `;

  modal.classList.add("show");
}

window.openModal = openModal;

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

filterType.addEventListener("change", updateDisplay);
filterPartenaire.addEventListener("change", updateDisplay);
filterStatut.addEventListener("change", updateDisplay);
filterMaturite.addEventListener("change", updateDisplay);
searchInput.addEventListener("input", updateDisplay);

resetFilters.addEventListener("click", () => {
  filterType.value = "Tous";
  filterPartenaire.value = "Tous";
  filterStatut.value = "Tous";
  filterMaturite.value = "Tous";
  searchInput.value = "";
  updateDisplay();
});

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".menu a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    if (window.innerWidth <= 980) {
      sidebar.classList.remove("open");
    }
  });
});

initializeFilters();
updateDisplay();