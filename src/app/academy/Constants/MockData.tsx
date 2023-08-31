import {
  acaIcon,
  acaPhoto,
  defaultOffre,
  diagIcon,
  diagPhoto,
  eveIcon,
  evePhoto,
} from "@/assets";
export const defaultOffer = {
  title: "Offre adaptée",
  primarybg: "bg-aca-0",
  text: (
    <span>
      Sessions spécifiques qui peuvent être organisées à l’intention, des
      organismes professionnels, des collectivités locales, des administrations
      ou des entreprises. Afin de renforcer les compétences et concrétiser les
      objectifs communs.
    </span>
  ),
  photo: defaultOffre,
};

export const Offres = [
  {
    id: 1,
    icon: diagIcon,
    title: "Diagnostic compétences",
    text: `Diagnostic des compétences conjointement avec
       les entités métier et les Ressources Humaines afin d'évaluer
        la capitalisation du savoir-faire à date, ainsi que le gap
         à combler, puis accompagnement en vue de con-tribuer
          à un alignement stratégique avec la vision Corporate

        `,
    color: "bg-[#d8d9ff]",
    primarybg: "bg-secondary-0",
    primaryText: "text-secondary-0",
    width: "w-8",
    photo: diagPhoto,
  },
  {
    id: 2,
    icon: acaIcon,
    title: "académie d'entreprise",
    text: `Solution intégrée clé en main d'Académie d'entreprise,
       basée sur une approche ergonomique permettant aux employés
        de s'auto-former de manière sereine sur des modules universels ou métier.
         Tailoring du bouquet de formation inhouse, pour des cursus prédéfinis.
          Statistiques d'utilisation et du retour sur investissement.`,
    color: "bg-[#ddcfff]",
    primarybg: "bg-secondary-1",
    primaryText: "text-secondary-1",
    width: "w-14",
    photo: acaPhoto,
  },
  {
    id: 3,
    icon: eveIcon,
    title: "Evènement d'entreprise",
    text: `Evènement d'entreprise autour de la formation,
      de l'intégration des talents et pour favoriser le travail
      en équipe tels que les team buildings à forte valeur ajoutée.
      Campagnes de Micro-formation pour des sujets spots liés notamment
      à la santé, la sécurité informatique, l'ergonomie, la qualité
      `,
    color: "bg-[#d3f2ff]",
    primarybg: "bg-aca-0",
    primaryText: "text-aca-0",
    width: "w-8",
    photo: evePhoto,
  },
];

export const categories = [
  {
    id: 1,
    title:
      "Database, Business Intelligence, Big Data & Artificial Intelligence",
    link: "database-business-intelligence-big-data-artificial-intelligence",
    background: null,
    shortDescription: `Les sources de données sont aujourd’hui abondantes et riches.
    Elles constituent un potentiel infini pour les entreprises en quête
    d'innovation et de développement. Utilisez les outils les plus appropriés et performants pour
     ressortir et valoriser les informations précieuses et cachées afin de créer de la valeur pour votre entreprise.`,
    Image: "media/categories/1734267780652242.png",
    description: [
      {
        id: 1,
        title: "Bases de données et Big Data",
        content:
          "Notre offre de formation intégrée couvre l’essentiel des bases de données sur le marché pour vous aider à structurer au mieux vos données opérationnelles avec des outils tels qu'Oracle, Db2, Mysql, ainsi que le Big Data pour gérer vos entrepôts de données complexes et hétérogènes notamment avec Cassandra, MongoDB, Couchbase, Splunk et Hadoop ainsi que le data mining.",
      },
      {
        id: 2,
        title: "Business Intelligence",
        content:
          "Notre offre complète vous permet de pousser l’analyse et le reporting via les solutions de Business Intelligence (notamment via SAP BI, MicroStrategy, Datapine, SAS Business Intelligence, Yellowfin, QlikSense, Zoho, Sisense, MS Power BI, Looker, Clear, Tableau, Oracle, Domo, Cognos).",
      },
      {
        id: 3,
        title:
          "IA - Intelligence Artificielle, Machine Learning et Deep Learning",
        content:
          "Notre offre comprend l’essentiel de la boîte à outils à ce niveau, à savoir les fondamentaux de l’intelligence artificielle, l’analyse de données, les aspects statistiques, le Text Mining, le text processing, le Machine Learning, le Deep Learning et la représentation de données, pour identifier des sources de valeur durable. Plusieurs outils et plateformes du marché sont couverts tels que Google Cloud Machine Learning, Azure Machine Learning Studio, Python NLTK, Apache Mahout, IBM Watson et Amazon Alexa, ainsi que les chatbots.",
      },
    ],
    created_at: "2022-05-30 17:04:00",
    updated_at: "2022-06-18 17:40:56",
  },
  {
    id: 3,
    title: "Qualité, Lean, Référentiels SI & Tests",
    link: "qualite-lean-referentiels-si-tests",
    shortDescription: null,
    Image: "media/categories/1734267470913231.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Management Qualité, Excellence Opérationnelle et Audit",
        content:
          "Tracez le chemin de vos entreprises vers l’excellence opérationnelle en partant de la voix des clients pour définir, mesurer, analyser, améliorer et contrôler vos processus de production afin d’atteindre le standing internationalement reconnu du LEAN 6 SIGMA et en mettant en oeuvre la TPM - Total Productive Maintenance. Vous pourrez ainsi produire plus, réduire les gaspillages, et entretenir vos assets de manière durable pour atteindre des résultats spectaculaires en termes de disponibilité, performance et qualité. L’excellence opérationnelle est également complétée par l’analyse de workflow d’entreprise et leur représentation avec l’outil K2 que nous couvrons ainsi que la Business analysis avec une préparation à la certification IIBA - ECBA. Le bouquet Qualité et excellence opérationnelle que nous proposons inclut par ailleurs une maîtrise des standards qualité ISO 9001 et des outils d’audit les plus aboutis tel l’IRCA, CIA en vue de fiabiliser et durabiliser vos systèmes qualités mis en oeuvre.",
      },
      {
        id: 2,
        title: "Normes et Réglementations",
        content:
          "La multiplication des normes exige des entreprises une mise à niveau régulière afin d'être en ligne avec les aspects réglementaires, légaux ainsi que les meilleures pratiques du marché. Optez pour une approche systématique de screening et une mise à niveau pour assurer une conformité aux meilleurs standards normatifs internationaux, notamment ISO, OHSAS, ANSI, BS, IMANOR, DIN et NF.",
      },
      {
        id: 3,
        title: "Automation",
        content:
          "Vous souhaitez industrialiser et orchestrer votre production informatique avec une volumétrie importante et une grande complexité de flux applicatifs et de traitements, en prenant en compte la nature des applications, les processus et l’architecture technique. Faites le choix des outils et techniques les plus aboutis du marché tel que IREB, ISTQB, TMap Next® et Robot Framework et suivez notre programme sur mesure pour une optimisation et une automatisation idéale.",
      },
      {
        id: 4,
        title: "Testing",
        content:
          "Vous réalisez un nombre conséquent de tests informatiques complexes et vous souhaitez mettre en oeuvre une démarche rigoureuse et systématique notre bouquet de formation expert vous fournira les outils appropriés pour cadrer convenablement vos tests, les concevoir, dérouler le cycle de vie de Testing et déployer des systèmes complets d’acceptation des livrables.",
      },
      {
        id: 5,
        title: "Référentiels du Système d'Information",
        content:
          "En vue d’atteindre vos objectifs stratégiques en termes de gouvernance du Système d’Information, nous vous proposons un séminaire complet qui couvre les grands référentiels du marché, notamment COBIT et ITIL pour mieux organiser votre système d'information, améliorer son efficacité, réduire les risques et augmenter la qualité des services informatiques. Ce bouquet vous permettra également de couvrir les aspects sécurité de l'information, opérationnaliser l'audit et atteindre la conformité avec la législation et la réglementation, notamment pour les opérations financières et la responsabilité sociale de l'entreprise.",
      },
    ],
    created_at: "2022-05-30 16:59:04",
    updated_at: "2022-06-18 17:40:56",
  },
  {
    id: 4,
    title: "Langues & Bureautique",
    link: "langues-bureautique",
    shortDescription: null,
    Image: "media/categories/1734267502769140.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Langues & Bureautique",
        content:
          "Dans un monde connecté à outrance, la maîtrise des langues et des outils bureautiques est devenue un véritable atout pour les entreprises souhaitant se développer à l'international et optimiser leur efficacité opérationnelle. Chez notre centre de formation, nous proposons des parcours de formation spécifiques pour vous permettre de maîtriser les aspects les plus ancrés d'une langue, ainsi que les outils bureautiques les plus utilisés en entreprise.",
      },
      {
        id: 2,
        title: "Langues",
        content:
          "Nos méthodes pédagogiques innovantes et reconnues vous plongent dans les aspects les plus pratiques et professionnels d'une langue pour vous permettre d'atteindre l'excellence. Nous couvrons les grandes langues internationales, avec un focus spécifique sur l'anglais à un niveau professionnel avancé. Notre offre de formation vous permettra de développer vos compétences en communication interculturelle et de mieux comprendre les enjeux de la globalisation.",
      },
      {
        id: 3,
        title: "Bureautique",
        content:
          "Les outils bureautiques et la messagerie sont des éléments clés dans la gestion quotidienne d'une entreprise. Nous proposons des parcours de formation pour vous permettre de maîtriser les fonctionnalités avancées de la suite Microsoft, notamment Word, Excel, PowerPoint, Outlook et OneNote. Grâce à notre formation en bureautique, vous pourrez optimiser votre efficacité opérationnelle, produire des livrables de qualité et mieux gérer votre temps.",
      },
      {
        id: 4,
        title: "Développez vos Compétences",
        content:
          "Que ce soit pour renforcer vos compétences en langues étrangères ou en bureautique, nos parcours de formation sur-mesure sont adaptés à vos besoins spécifiques et vous permettent d'acquérir les compétences dont vous avez besoin pour réussir dans votre carrière professionnelle. Choisissez notre centre de formation pour booster votre carrière et votre employabilité.",
      },
    ],
    created_at: "2022-05-30 16:59:35",
    updated_at: "2023-04-26 13:51:41",
  },
  {
    id: 5,
    title: "Marketing digital, Photo Vidéo, CMS, UX Design",
    link: "marketing-digital-photo-video-cms-ux-design",
    shortDescription: null,
    Image: "media/categories/1734267525471329.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Design et Marketing Digital",
        content:
          "Votre métier est en pleine croissance en ligne et vous souhaitez mettre en avant un design cohérent dans votre communication, tout en organisant de manière équilibrée les éléments visuels pour une valorisation élevée de votre marque.",
      },
      {
        id: 2,
        title: "Marketing Digital sur Internet et les Réseaux Sociaux",
        content:
          "Vous devez également élaborer et mettre en oeuvre une stratégie de marketing digital percutante et adaptée afin de renforcer davantage votre compétitivité et maximiser votre exposition face à un marché très concurrentiel. A ce titre, nos formations vous permettront de profiter pleinement de ce potentiel. Nos cursus couvrent également une batterie de formations pour maîtriser les leviers des médias sociaux, notamment Facebook, Instagram et Pinterest en vue de cibler de manière optimale vos prospects.",
      },
      {
        id: 3,
        title: "Design",
        content:
          "Vous pourrez également, via le présent bouquet, améliorer votre design et vos photographies métier en vue de produire un catalogue séduisant démontrant votre force et la création de valeurs pour vos clients avec des outils tels ADOBE ILLUSTRATOR, INDESIGN et PHOTOSHOP.",
      },
      {
        id: 4,
        title: "Marketing Digital et Moteurs de Recherche",
        content:
          "Enfin, nos formations vous permettront d’intégrer les listings locaux de Google de manière optimale, d’évaluer et améliorer votre site internet actuel, pour une vitrine virtuelle élégante ainsi qu’un positionnement SEO fort.",
      },
    ],
    created_at: "2022-05-30 16:59:56",
    updated_at: "2022-06-18 17:40:56",
  },
  {
    id: 6,
    title: "Comptabilité Finance et Contrôle de Gestion",
    link: "comptabilite-finance-et-controle-de-gestion",
    shortDescription: null,
    Image: "media/categories/1734267625204840.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Comptabilité, Finance et Contrôle de Gestion",
        content:
          "Que vous soyez un décideur ou un acteur clé au sein de votre entreprise, la rigueur financière est primordiale pour assurer une gestion saine et pérenne des actifs. Nous vous proposons un bouquet de formation en Comptabilité, Finance et Contrôle de Gestion pour vous aider à maîtriser les principes fondamentaux de ces domaines et à prendre des décisions éclairées.\n\nNotre programme de formation complet couvre les principaux aspects de la comptabilité, du contrôle de gestion et de la fiscalité, en mettant l'accent sur les normes internationales telles que les IFRS et SYSCOHADA. Vous apprendrez à maîtriser les principes de la comptabilité générale, de la comptabilité analytique, du contrôle des comptes et de la consolidation, ainsi que les opérations courantes telles que la clôture et la gestion des immobilisations et des fournisseurs.\n\nNous offrons également une formation approfondie en Contrôle de Gestion, vous permettant de mieux comprendre les mécanismes de pilotage de l'activité de votre entreprise. Vous apprendrez à élaborer et à suivre un budget, à définir des indicateurs de performance pertinents, à analyser les écarts et à prendre des mesures correctives.\n\nEnfin, nous vous proposons une formation en fiscalité d'entreprise, avec un focus particulier sur la TVA. Vous serez en mesure de comprendre les règles fiscales applicables à votre entreprise et d'optimiser votre situation fiscale.\n\nNotre bouquet de formation est conçu pour être opérationnel et pragmatique, avec une boîte à outils de business skills pour vous armer dans l'environnement financier ultra-compétitif d'aujourd'hui. Avec notre formation en Comptabilité, Finance et Contrôle de Gestion, vous serez mieux équipé pour prendre des décisions éclairées et assurer une gestion financière saine et efficace pour votre entreprise.",
      },
    ],
    created_at: "2022-05-30 17:01:31",
    updated_at: "2023-04-26 14:29:37",
  },
  {
    id: 7,
    title: "ERP, Développment logiciel, Web et DEVOPS",
    link: "erp-developpment-logiciel-web-et-devops",
    shortDescription: null,
    Image: "media/categories/1735870371439129.webp",
    background: null,
    description: [
      {
        id: 1,
        title: "Progiciels et Systèmes",
        content:
          "Les systèmes ERP généralistes et spécialisés sont le coeur de la gestion des transactions opérationnelles des entreprises et nécessitent une organisation rigoureuse et des processus rodés afin d’assurer une grande fluidité et une traçabilité complète. Nous vous proposons à ce titre de vous apporter le savoir-faire nécessaire aux choix, à l’intégration, au paramétrage, au développement spécifiques puis à la fiabilisation de vos systèmes. Les solutions couvertes sont notamment SAP, SAGE, Oracle, Infor. La partie CRM spécifiquement vous assurera une meilleure Organisation des contacts, un reporting précis et une segmentation efficace de votre clientèle, en maîtrisant les solutions les plus abouties du marché, notamment Salesforce, Adobe, Oracle, SAP et Microsoft Dynamics. Nous proposons également la maîtrise des outils intégrés spécialisés pour la gestion des projets (MS Project, Primavera), la collaboration des équipes incluant la gestion de contenu tel Sharepoint et EMC, ainsi que les outils dédiés aux environnements Agiles tel Jira et Trello.",
      },
      {
        id: 2,
        title: "Excellence du Développement Logiciel & DevOps",
        content:
          "Vous souhaitez atteindre des cycles de développement logiciels plus courts, une augmentation de la fréquence des déploiements et des livraisons continues, pour mieux atteindre vos objectifs économiques. Optez pour notre bouquet de l’excellence pour le développement logiciel basé sur DevOps et qui repose sur l'unification et l'administration des infrastructures informatiques, notamment pour la partie système ainsi que l’automatisation rigoureuse du suivi des étapes de création des logiciels, incluant le développement, l'intégration, les tests, la livraison jusqu'au déploiement, puis l'exploitation et la maintenance des infrastructures.",
      },
      {
        id: 3,
        title: "Développement Web et Mobile",
        content:
          "Vous souhaitez bénéficier d'une grande technicité du développement informatique Web. Optez pour nos solutions intégrées couvrant les grands langages de programmation web notamment le monde Java, Python, ASP, Javascript, PHP et .NET, ainsi que les plateformes, les bibliothèques, les API et les frameworks les plus ancrés sur le marché.",
      },
    ],
    created_at: "2022-05-30 17:01:42",
    updated_at: "2023-07-10 13:42:53",
  },
  {
    id: 8,
    title: "Virtualisation OS, Réseaux, Télécom & Cloud",
    link: "virtualisation-os-reseaux-telecom-cloud",
    shortDescription:
      "Virtualisation, systèmes d'exploitation, réseaux et Cloud : les fondations de l'infrastructure informatique moderne",
    Image: "media/categories/1735734145779336.jpg",
    background: null,
    description: [
      {
        id: 2,
        title: "Réseaux et Protocoles de Communication",
        content:
          "Les réseaux et protocoles de communication sont indispensables pour les professionnels des infrastructures de communication informatiques, en particulier pour l'installation de la fibre optique. Il est crucial de maîtriser et d'obtenir les certifications liées aux routeurs, à la connectivité, au matériel et aux protocoles les plus fiables, notamment pour les technologies Cisco, HP, Dell, Huawei, Microsoft et Checkpoint. Ces compétences permettent d'assurer une communication fluide et sécurisée entre les différents éléments d'un système d'information.",
      },
      {
        id: 3,
        title: "Systèmes d'Exploitation Serveurs et Virtualisation",
        content:
          "Les systèmes d'exploitation serveurs et la virtualisation constituent l'épine dorsale des systèmes d'information, garantissant la stabilité et l'intégration des composants applicatifs dans un ensemble flexible et cohérent. Notre offre de formation couvre les principaux systèmes d'exploitation du marché, tels que UNIX, LINUX, WINDOWS, IBM et VMS, ainsi que les Mainframes, pour une utilisation et une administration optimales. La virtualisation est également abordée avec des solutions telles que VMware, Windows, Citrix, Odin, Huawei, Oracle et Red Hat, ainsi que la conteneurisation avec des outils comme Docker et Kubernetes. Ces compétences permettent d'optimiser l'utilisation des ressources matérielles et de faciliter la gestion des environnements applicatifs.",
      },
      {
        id: 4,
        title: "Architecture SI et Cloud",
        content:
          "Maîtriser l'architecture SI est essentiel pour structurer de manière durable et rationnelle vos systèmes d'information, tant au niveau de la conception que de la mise en œuvre des architectures générales, applicatives, techniques et physiques. Nos formations spécialisées couvrent un large éventail de compétences clés, notamment l'urbanisation des SI pour plus de modularité et de réactivité, l'optimisation du déploiement des applications distribuées, l'intégration de la sécurité et la certification TOGAF. Pour mettre en place un système Cloud efficace et flexible tout en réduisant les coûts d'exploitation, optez pour notre cycle de formations Cloud complet. Il couvre les aspects serveurs, stockage, bases de données, réseau, logiciels, outils d'analyse et les dernières avancées en intelligence artificielle. Maîtrisez les solutions internationales telles qu'Amazon Web Services, Microsoft Azure, Google Cloud Platform, Alibaba, Salesforce, SAP, Cisco, Oracle et Workday, pour répondre aux besoins spécifiques de votre organisation.",
      },
    ],
    created_at: "2022-05-30 17:01:54",
    updated_at: "2023-04-26 13:13:49",
  },
  {
    id: 9,
    title: "Softskills, Leadership et Développement personnel",
    link: "softskills-leadership-et-developpement-personnel",
    shortDescription:
      "Le capital humain est l'un des actifs les plus critiques et sensibles des entreprises. Pour assurer le succès de votre entreprise, il est essentiel de catalyser le leadership et de développer les compétences en soft skills leadership et développement personnel au sein de vos équipes.",
    Image: "media/categories/1734267664109969.png",
    background: null,
    description: [
      {
        id: 2,
        title: "Leadership",
        content:
          "Chez notre entreprise, nous proposons des techniques innovantes et une pédagogie disruptive pour inculquer les valeurs essentielles de votre entreprise de manière durable et catalyser un mindset de créativité collective, d'innovation et d’entraide. Nous offrons également un accompagnement et coaching des groupes et des managers avec une phase de diagnostic puis une mise en conformité avec les standards les plus exigeants. Nous créons ainsi les synergies nécessaires pour développer un leadership fort et efficace.",
      },
      {
        id: 3,
        title: "Profiling",
        content:
          "Pour développer les compétences en soft skills leadership et développement personnel, plusieurs outils seront utilisés, tels que le Profiling, la méthode DISC et la PNL. Ce bouquet couvre également la maîtrise des aspects de négociation business avec une méthodologie rationnelle pour mieux connaître votre environnement, votre contexte et préparer votre stratégie et tactiques de négociation. Nous nous appuyons sur un benchmarking des meilleures pratiques existantes en vue d'établir le contact, préparer un protocole et forger un argumentaire solide afin d’aboutir à des deals gagnant-gagnant pour une collaboration long terme avec vos grands comptes.",
      },
      {
        id: 4,
        title: "Communication",
        content:
          "La communication interpersonnelle est également un aspect important du développement des compétences en soft skills leadership et développement personnel. Elle présente avant tout une démarche rationnelle pour la prise de conscience de l’impact de sa propre communication, la mise en avant de la forme et du fond du message pour un contenu utile et une mise en confiance de votre audience. Elle vous permettra de neutraliser l’incompréhension et de maintenir un équilibre relationnel tout en construisant une argumentation étayée et raisonnée pour un message percutant et efficace.",
      },
      {
        id: 5,
        title: "Management",
        content:
          "Enfin, pour assurer le développement des compétences en soft skills leadership et développement personnel, nous vous proposons une boîte à outils complète du manager pour optimiser l'utilisation du temps et créer de la valeur dans des environnements complexes et changeants, tout en gardant une aisance et une clairvoyance à toute épreuve. Ce bouquet permettra ainsi de mieux gérer vos échéanciers et d’être un vecteur des bonnes pratiques au sein de votre entreprise.",
      },
      {
        id: 6,
        title: "Résumé",
        content:
          "En résumé, le développement des compétences en soft skills leadership et développement personnel est essentiel pour le succès de votre entreprise. Chez notre entreprise, nous proposons une approche complète et innovante pour catalyser le leadership, développer les compétences en soft skills et améliorer la performance de votre entreprise.",
      },
    ],
    created_at: "2022-05-30 17:02:09",
    updated_at: "2023-04-26 13:38:41",
  },
  {
    id: 10,
    title: "Industrie",
    link: "industrie",
    shortDescription: null,
    Image: "media/categories/1734267681980861.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Formation Industrie",
        content:
          "Nous proposons une offre intégrée de formations industrielles pour accompagner votre entreprise dans la maîtrise des applications industrielles. Cette offre riche et variée permet de couvrir un panel de formations allant des installations électriques, en passant par leurs standards et leur construction, jusqu'à leur exploitation pour des performances optimales. Nous proposons également des formations spécifiques aux énergies renouvelables telles que le solaire, l'éolien, l'hydraulique, les Smart Grids, le dessalement et le traitement d'eau, ainsi que des formations en instrumentation, application de revêtements, soudures et contrôles y afférents, ainsi que le génie civil et les inspections de matériel complexe.",
      },
      {
        id: 2,
        title: "Formations PLM/CAO/PAO",
        content:
          "Nous proposons également des formations PLM/CAO/PAO pour la gestion de produits, projets et installations complexes avec un nombre important de références et de versions. Nos formations vous permettront de maîtriser les outils les plus aboutis du marché de la gestion de configuration pour une conception précise de la structure et du fonctionnement des produits, tout en anticipant chaque modification et en gérant les différentes instances.",
      },
      {
        id: 3,
        title: "Formations BIM (Building Information Modeling)",
        content:
          "Enfin, nous proposons des formations pour le secteur du bâtiment avec une approche intégrée grâce à notre bouquet complet BIM (Building Information Modeling). Ce dernier permet de modéliser vos données Bâtiment et infrastructures via une maquette digitale intelligente et structurée pour partager des informations physiques et fonctionnelles en phases conception, construction et exploitation, ainsi que d'effectuer des analyses et simulations fiables de manière collaborative.",
      },
      {
        id: 4,
        title: "Avantages",
        content:
          "Optez pour nos formations industrielles pour améliorer la qualité de vos conceptions, rationaliser vos coûts de modification et permettre une meilleure détection des risques avant la mise en chantier.",
      },
    ],
    created_at: "2022-05-30 17:02:26",
    updated_at: "2023-04-26 14:00:38",
  },
  {
    id: 11,
    title: "Sécurité des SI & Risk",
    link: "securite-des-si-risk",
    shortDescription: null,
    Image: "media/categories/1735734042534501.jpg",
    background: null,
    description: [
      {
        id: 1,
        title: "Sécurité des Systèmes d'Information",
        content:
          "La sécurité des systèmes d'information est un enjeu majeur pour les entreprises. Les actifs informationnels sont une ressource précieuse qu'il convient de protéger contre les risques usuels et exceptionnels, en adoptant une démarche rigoureuse et systématique. Pour garantir la disponibilité, l'intégrité et la confidentialité de vos actifs, il est essentiel de mettre en place des politiques, outils, concepts et mécanismes de sécurité conformes aux standards internationaux tels que ISO 27001 et CISSP.",
      },
      {
        id: 2,
        title: "Infrastructures de Sécurité",
        content:
          "Le management de la sécurité des systèmes d'information implique également la mise en œuvre de solutions d'infrastructures de sécurité, telles que des firewalls logiciels et des protections physiques. Chez [nom de l'entreprise], nous vous proposons des solutions matures et éprouvées du marché, comme Fortinet et Palo Alto, pour renforcer la sécurité de vos actifs informationnels.",
      },
      {
        id: 3,
        title: "Gestion des Risques",
        content:
          "La gestion des risques est également une composante essentielle de la sécurité des systèmes d'information. Chez [nom de l'entreprise], nous proposons une analyse complète et une mise en conformité aux normes et bonnes pratiques internationales, conformément à la norme ISO 31000. Notre approche rigoureuse et systématique vous permet de mieux comprendre les risques encourus et de mettre en place les mesures adéquates pour les gérer efficacement.",
      },
      {
        id: 4,
        title: "Services de Hacking Éthique",
        content:
          "Enfin, nous vous proposons également des services de hacking éthique avec CEH pour tester la sécurité de votre système d'information et mettre en évidence les éventuelles failles à corriger. Chez [nom de l'entreprise], nous nous engageons à protéger vos actifs informationnels et à garantir la sécurité de votre système d'information.",
      },
    ],
    created_at: "2022-05-30 17:02:50",
    updated_at: "2023-04-26 13:25:53",
  },
  {
    id: 12,
    title: "Hygiène Santé et Sécurite",
    link: "hygiene-sante-et-securite",
    shortDescription: null,
    Image: "media/categories/1734267740485088.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Sécurité des Systèmes d'Information",
        content:
          "La sécurité des systèmes d'information est un enjeu majeur pour les entreprises. Les actifs informationnels sont une ressource précieuse qu'il convient de protéger contre les risques usuels et exceptionnels, en adoptant une démarche rigoureuse et systématique. Pour garantir la disponibilité, l'intégrité et la confidentialité de vos actifs, il est essentiel de mettre en place des politiques, outils, concepts et mécanismes de sécurité conformes aux standards internationaux tels que ISO 27001 et CISSP.",
      },
      {
        id: 2,
        title: "Infrastructures de Sécurité",
        content:
          "Le management de la sécurité des systèmes d'information implique également la mise en œuvre de solutions d'infrastructures de sécurité, telles que des firewalls logiciels et des protections physiques. Chez [nom de l'entreprise], nous vous proposons des solutions matures et éprouvées du marché, comme Fortinet et Palo Alto, pour renforcer la sécurité de vos actifs informationnels.",
      },
      {
        id: 3,
        title: "Gestion des Risques",
        content:
          "La gestion des risques est également une composante essentielle de la sécurité des systèmes d'information. Chez [nom de l'entreprise], nous proposons une analyse complète et une mise en conformité aux normes et bonnes pratiques internationales, conformément à la norme ISO 31000. Notre approche rigoureuse et systématique vous permet de mieux comprendre les risques encourus et de mettre en place les mesures adéquates pour les gérer efficacement.",
      },
      {
        id: 4,
        title: "Services de Hacking Éthique",
        content:
          "Enfin, nous vous proposons également des services de hacking éthique avec CEH pour tester la sécurité de votre système d'information et mettre en évidence les éventuelles failles à corriger. Chez [nom de l'entreprise], nous nous engageons à protéger vos actifs informationnels et à garantir la sécurité de votre système d'information.",
      },
      {
        id: 5,
        title: "Santé, Sécurité et Environnement",
        content:
          "Notre société accorde une grande importance à la santé, la sécurité et l'hygiène des collaborateurs, ainsi qu'au respect de l'environnement. Nous offrons des formations complètes et pointues pour assurer une maîtrise totale des référentiels internationaux les plus complets en matière de HSSE, tels que NEBOSH, IOSH, OSHA, l’ISO 45001 et l’ISO 14001, ainsi que les habilitations réglementaires nécessaires pour le secteur industriel et électrique.",
      },
      {
        id: 6,
        title: "Bouquet HSSE Intégré",
        content:
          "Notre bouquet HSSE intégré couvre tous les aspects de la responsabilité en matière de HSSE, y compris les risques courants, les équipements en vigueur, la protection incendie, la manutention, les espaces confinés, les travaux en hauteur et les produits dangereux. Nous mettons également l'accent sur la composante transport pour assurer une sécurité optimale dans toutes les étapes de la chaîne logistique.",
      },
      {
        id: 7,
        title: "Formation en Santé et Sécurité",
        content:
          "Nous sommes conscients de l'importance de la santé et de la sécurité sur le lieu de travail et nous nous efforçons de fournir des formations pratiques et théoriques pour améliorer la sécurité et minimiser les risques pour la santé des collaborateurs. Nous offrons également des formations en matière d'hygiène pour garantir un environnement de travail sain et propre, tout en minimisant l'impact environnemental de l'entreprise.",
      },
      {
        id: 8,
        title: "Bouquet HSSE Intégré - Niveau Industriel",
        content:
          "Notre bouquet HSSE intégré est conçu pour fournir une formation complète et approfondie pour tous les niveaux de personnel dans le secteur industriel. Nous nous engageons à offrir des solutions personnalisées pour répondre aux besoins spécifiques de chaque entreprise et à fournir une formation de qualité pour assurer une sécurité et une hygiène optimales sur le lieu de travail.",
      },
    ],
    created_at: "2022-05-30 17:03:21",
    updated_at: "2023-04-26 14:14:56",
  },
  {
    id: 20,
    title: "Management de Projet, Agilité et outils collaboratifs",
    link: "management-de-projet-agilite-et-outils-collaboratifs",
    shortDescription: null,
    Image: "media/categories/1734267764040464.png",
    background: null,
    description: [
      {
        id: 1,
        title: "Gestion de Projets",
        content:
          "Dans un contexte de rupture constante et d'opacité accrue, développez le sens du projet de manière durable et opérationnalisez des Frameworks solides ayant démontré leur force à l'international tel PMP, PRINCE2 et IPMA ainsi que le SUIVI et EVALUATION et la GESTION AXEE RESULTATS, pour des livrables de qualité et un suivi rigoureux des aspects les plus complexes de la gestion de projet.",
      },
      {
        id: 2,
        title: "Agilité",
        content:
          "La flexibilité et l'innovation sont la clé de la survie des entreprises. Pour cela, les Frameworks Agile sont à votre service pour construire des équipes soudées, innovantes et épanouies qui vont créer la valeur et capitaliser le savoir-faire, notamment SCRUM, SAFE, XP, KANBAN et SCRUMBAN que nous vous invitons à explorer, maîtriser et mettre en œuvre via nos packages de formation Agile. Notre bouquet permet également de prendre en compte les dernières tendances Design Thinking et Gamification.",
      },
    ],
    created_at: "2022-05-30 17:03:44",
    updated_at: "2022-06-18 17:40:56",
  },
];
