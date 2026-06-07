// ============================================================
// ADEF Consulting — contenu du site (source unique)
// ============================================================

export const NAV = [
  { href: "#cabinet", label: "Le cabinet" },
  { href: "#domaines", label: "Domaines" },
  { href: "#formation", label: "Formation" },
  { href: "#equipe", label: "Équipe" },
  { href: "#references", label: "Références" },
  { href: "#contact", label: "Contact" },
];

export const COUNTRIES = ["Sénégal", "Burkina Faso", "Togo", "Bénin", "Maroc", "Canada"];

export const STATS = [
  { num: "2005", lab: "Année de création du cabinet" },
  { num: "3", lab: "Pôles d'expertise complémentaires" },
  { num: "6", lab: "Nationalités au sein du réseau" },
];

export const VALUES = [
  { n: "01", t: "Respect des délais", d: "Des engagements tenus, à chaque étape de la mission." },
  { n: "02", t: "Professionnalisme", d: "Des méthodes éprouvées et des experts reconnus." },
  { n: "03", t: "Éthique", d: "Une conduite rigoureuse et transparente." },
  { n: "04", t: "Honnêteté", d: "La sincérité au cœur de la relation de conseil." },
  { n: "05", t: "Égalité de genre", d: "La promotion de l'égalité dans chaque intervention." },
];

export const PILLARS = [
  {
    num: "Pôle I",
    title: "Études & Recherches",
    intro: "Diagnostic, faisabilité, évaluation d'impact et recherche quantitative comme qualitative.",
    cats: [
      {
        h: "Marchés · Finances · Comptabilité · Banques",
        items: [
          "Cartographie des risques",
          "Cadre des Dépenses à Moyen Terme & Budget-Programme",
          "Manuel de procédures",
          "Étude de marché & business plan",
          "Plan d'action commerciale & de communication",
          "Tableau de bord de contrôle et de gestion",
        ],
      },
      {
        h: "Agriculture · Environnement · Énergie",
        items: [
          "Études & notices d'impact environnemental et social",
          "Plan de Gestion Environnementale et Sociale (PGES)",
          "Restructuration des filières agricoles, forestières et halieutiques",
          "Sécurité alimentaire & mécanismes de développement propre",
          "Transition énergétique dans les pays du Sud",
          "Système d'Information Géographique & télédétection",
        ],
      },
      {
        h: "Gestion de projet & programme",
        items: [
          "Diagnostic & identification de projets",
          "Faisabilité technique, financière et socio-économique",
          "Dispositif efficace de suivi-évaluation",
          "Évaluation des impacts du projet",
          "Plan de communication",
        ],
      },
      {
        h: "Économie · Société · Santé",
        items: [
          "Recherche participative, quantitative et qualitative",
          "Études socio-économiques & d'impact social",
          "Santé de la reproduction & filets sociaux de sécurité",
          "Ingénierie sociale",
          "Enquêtes de satisfaction",
        ],
      },
    ],
  },
  {
    num: "Pôle II",
    title: "Appui aux collectivités territoriales",
    intro: "Conseil, ingénierie financière et accompagnement de la décentralisation.",
    cats: [
      {
        h: "Finance & audits des collectivités",
        items: [
          "Mise en place de structures décentralisées de SFD",
          "Stratégies et modalités d'implantation des SFD",
          "Identification & évaluation des besoins de formation des dirigeants",
          "Ingénierie financière & services financiers décentralisés",
          "Manuel de procédures & business plans",
          "Audit, diagnostic institutionnel et organisationnel",
        ],
      },
      {
        h: "Accompagnement & pilotage",
        items: [
          "Cadres locaux de concertation",
          "Plans de développement locaux (PLD, PIC, PAGT)",
          "Élaboration de budgets des collectivités locales",
          "Plans de développement stratégiques et/ou opérationnels",
          "Préparation, planification et pilotage de projets",
          "Exécution, suivi & évaluation de projets",
          "Conseil en management des organisations",
          "Sondages, études & enquêtes d'opinion",
        ],
      },
    ],
  },
  {
    num: "Pôle III",
    title: "Formation",
    intro: "Des missions de formation pour structures privées, gouvernementales et ONG.",
    cats: [
      {
        h: "Ce que nous transmettons",
        items: [
          "Renforcement des capacités sur mesure",
          "Formation-action ancrée dans les réalités du terrain",
          "Animateurs & facilitateurs expérimentés",
          "Production de supports de communication",
        ],
      },
      {
        h: "Pour qui",
        items: [
          "Structures privées",
          "Institutions gouvernementales",
          "Organisations non gouvernementales",
          "Collectivités & partenaires techniques et financiers",
        ],
      },
    ],
  },
];

export const THEMES = [
  {
    tag: "MF",
    t: "Marchés · Finances · Comptabilité · Banques",
    items: [
      "Cartographie des risques & gestion des performances",
      "Démarche d'élaboration du CDMT et Budget-Programme",
      "Gestion budgétaire",
      "Tableau de bord & mise en place du contrôle de gestion",
    ],
  },
  {
    tag: "EM",
    t: "Environnement · Mines · Carrières · Qualité",
    items: [
      "Suivi et mise en œuvre du Plan de Gestion Environnementale et Sociale",
      "Système d'Information Géographique & télédétection",
    ],
  },
  {
    tag: "GP",
    t: "Gestion de projet & programme",
    items: [
      "Gestion des projets axée sur les résultats",
      "Informatique appliquée au suivi-évaluation",
      "Gestion des projets sous MS-Project",
    ],
  },
  {
    tag: "MG",
    t: "Management · Diplomatie · Transport · Logistique",
    items: [
      "Conduite du changement organisationnel",
      "Management par objectifs & évaluation des compétences",
    ],
  },
  {
    tag: "SS",
    t: "Économie · Société · Santé",
    items: [
      "Promotion de la santé de la reproduction des adolescent·e·s et jeunes",
      "Curriculum d'animation & approche par les compétences",
      "Ingénierie sociale pour les politiques de filets sociaux",
      "Analyse socio-économique · Genre & ressources naturelles",
    ],
  },
];

export const TEAM = [
  { n: "01", t: "Socio-économiste", d: "Planification de programmes de développement organisationnel & micro-finance" },
  { n: "02", t: "Sociologue — Doctorat 3ᵉ cycle", d: "Santé de la reproduction & filets sociaux de sécurité" },
  { n: "03", t: "Juriste privatiste", d: "Certifié de Findlay University (Ohio)" },
  { n: "04", t: "Expert en communication", d: "« Communication pour l'Impact Comportemental » — Centre Méditerranéen de l'OMS, Tunis" },
  { n: "05", t: "Journaliste-formateur", d: "Spécialiste de la production de supports de communication" },
  { n: "06", t: "Facilitateur de développement local", d: "Spécialiste suivi-évaluation" },
  { n: "07", t: "Économiste-Planificateur", d: "Expert en suivi-évaluation de projets et programmes" },
];

export const NETWORK = [
  "Statisticien",
  "Géographe — environnement & foresterie",
  "Inspecteur de l'enseignement",
  "Sciences de l'éducation (Canada)",
  "Fiscaliste",
  "Sociologue",
  "Économiste",
  "Animateurs socio-éducatifs",
  "Juristes",
  "Animateurs polyvalents",
  "Enquêteurs expérimentés",
];

export const TIMELINE = [
  { y: "2021 – 2022", t: "Dix sessions de préparation à l'employabilité des jeunes pour les CDEPS de Dakar, Ziguinchor, Mbour, Thiès et Fatick,", org: " dans le cadre de l'initiative de l'État sous l'égide du Ministère de la Jeunesse." },
  { y: "2014 & 2016", t: "Organisation de la colonie de vacances de l'", org: "Office National de l'Assainissement du Sénégal (ONAS)." },
  { y: "2014", t: "Formation en animation socio-éducative destinée au personnel du ", org: "Port Autonome de Dakar." },
  { y: "2011", t: "Session de formation en animation socio-éducative pour le ", org: "CDEPS de Dakar-Plateau." },
  { y: "2010", t: "Formation des élus locaux à la bonne gouvernance avec l'", org: "ONG CONCEPT, à travers le Programme PAGITIC." },
  { y: "2009", t: "Formation aux techniques de communication des chargés de communication des CRETEF (Fatick, Kaolack, Diourbel), ", org: "pour le compte de la Coopération Technique Belge." },
  { y: "2003 – 2011", t: "Accompagnement de l'ONG Forum du Futur Africain dans la stratégie de « Communication pour un Impact Comportemental » — projet sous-régional ", org: "« Kpote Kiosque » (Bénin, Côte d'Ivoire, Niger, Sénégal), financé par le Ministère français des affaires étrangères, avec l'appui d'Équilibres & Populations." },
  { y: "~ 10 ans", t: "Organisation de la colonie de vacances de l'", org: "Hôpital Principal de Dakar." },
  { y: "Depuis 3 ans", t: "Organisation, à titre privé, d'activités de loisirs destinées aux enfants — ", org: "Sénégal, Gambie, Tunisie et Maroc." },
];

export const REFERENCES = [
  { inst: "ONG CONCEPT", serv: "Formation d'élus locaux à la bonne gouvernance.", ref: "Amadou Dione", role: "Président de l'ONG" },
  { inst: "Croix-Rouge Espagnole", serv: "Évaluation à mi-parcours du projet « Assistance et protection des migrants les plus vulnérables en Afrique de l'Ouest » (Sénégal, Gambie, Burkina Faso, Niger, Mali).", ref: "Estanislao Cobo Peinado", role: "Responsable de projet" },
  { inst: "Frères des Hommes (Suisse)", serv: "Analyse d'impact du projet de redynamisation des groupements paysans de l'UGPM — partenariat UGPM, FdH & Agence Française de Développement (AFD).", ref: "Marie-Pierre Djekou", role: "Chargée d'accompagnement" },
  { inst: "Ministère de la Jeunesse — Cellule d'Appui à l'Emploi", serv: "Formation en entrepreneuriat & accompagnement à l'élaboration de projets d'insertion professionnelle.", ref: "Doudou Sankharé", role: "Coordonnateur CAPE" },
  { inst: "CNDREAO — PRODEREAO", serv: "Sessions de formation à la création d'activités génératrices de revenus (2015–2017), Projet de Développement des Réseaux d'Éducation en Afrique de l'Ouest.", ref: "Coordination du projet", role: "" },
];
