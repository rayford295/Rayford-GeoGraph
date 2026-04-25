window.researchMapData = {
  themes: [
    "All",
    "Disaster Assessment",
    "Multimodal Learning",
    "Geo-Privacy",
    "Generative Vision",
    "Spatial Intelligence"
  ],
  nodes: [
    {
      id: "geolocator",
      shortTitle: "GeoLocator",
      title: "GeoLocator: A Location-Integrated Large Multimodal Model for Inferring Geo-Privacy",
      year: 2024,
      venue: "Applied Sciences",
      type: "Journal Article",
      status: "Published",
      authors: "Yifan Yang, Siqin Wang, Daoyang Li, Shuju Sun, Qingyang Wu",
      summary: "Introduces a location-integrated large multimodal model that reasons about geo-privacy signals and location inference from visual content.",
      impact: "This paper established an early foundation for combining visual understanding with spatial reasoning, which later expands into disaster intelligence and multimodal geographic inference.",
      themes: ["Geo-Privacy", "Multimodal Learning", "Spatial Intelligence"],
      methods: ["Large Multimodal Model", "Geo-Privacy Inference", "Location Integration"],
      links: [
        { label: "Paper", url: "https://www.mdpi.com/2076-3417/14/16/7091" },
        { label: "DOI", url: "https://doi.org/10.3390/app14167091" },
        { label: "Code", url: "https://github.com/rayford295/GeoLocator" }
      ],
      connections: [
        { target: "disastervlp", label: "extends multimodal geographic reasoning into disaster understanding" },
        { target: "hyperlocal", label: "precedes later work on location-aware street-view damage analysis" }
      ],
      position: { x: 180, y: 470 },
      color: "#d7a13b",
      radius: 34
    },
    {
      id: "hyperlocal",
      shortTitle: "Hyperlocal Disaster",
      title: "Hyperlocal Disaster Damage Assessment Using Bi-temporal Street-View Imagery and Pre-trained Vision Models",
      year: 2025,
      venue: "Computers, Environment and Urban Systems",
      type: "Journal Article",
      status: "Published",
      authors: "Yifan Yang, Lei Zou, Bing Zhou, Daoyang Li, Binin Lin, Joynal Abedin, Mengyang Yang",
      summary: "Builds a hyperlocal disaster assessment pipeline from paired pre- and post-event street-view imagery using pre-trained vision models.",
      impact: "This work anchors the disaster-assessment branch of the graph and introduces a practical street-view centered task that later papers refine with richer multimodal reasoning.",
      themes: ["Disaster Assessment", "Spatial Intelligence"],
      methods: ["Street-View Imagery", "Bi-temporal Analysis", "Pre-trained Vision Models"],
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0198971525000311" },
        { label: "DOI", url: "https://doi.org/10.1016/j.compenvurbsys.2025.102335" },
        { label: "Code", url: "https://github.com/rayford295" }
      ],
      connections: [
        { target: "disastervlp", label: "moves from vision-only damage estimation to visual-language understanding" },
        { target: "damagearbiter", label: "becomes a precursor for arbitration-based multimodal assessment" },
        { target: "satellite-to-street", label: "creates the street-view demand that motivates satellite-to-street generation" }
      ],
      position: { x: 370, y: 300 },
      color: "#157bc0",
      radius: 38
    },
    {
      id: "disastervlp",
      shortTitle: "DisasterVLP",
      title: "Perceiving Multidimensional Disaster Damages from Street-View Images Using Visual-Language Models",
      year: 2025,
      venue: "International Cartographic Conference",
      type: "Conference Paper",
      status: "Published",
      authors: "Yifan Yang, Lei Zou",
      summary: "Explores multidimensional disaster damage understanding with visual-language models, moving beyond single-score damage classification.",
      impact: "This paper marks the shift from pure recognition to richer semantic interpretation, which directly informs later multimodal arbitration work.",
      themes: ["Disaster Assessment", "Multimodal Learning", "Spatial Intelligence"],
      methods: ["Visual-Language Models", "Street-View Imagery", "Damage Semantics"],
      links: [
        { label: "Paper", url: "https://doi.org/10.5194/ica-abs-10-310-2025" },
        { label: "DOI", url: "https://doi.org/10.5194/ica-abs-10-310-2025" },
        { label: "Code", url: "https://github.com/rayford295" }
      ],
      connections: [
        { target: "hyperlocal", label: "broadens the earlier street-view damage pipeline into semantic damage perception" },
        { target: "damagearbiter", label: "provides the conceptual bridge to multimodal arbitration with CLIP-style reasoning" }
      ],
      position: { x: 560, y: 390 },
      color: "#4b9dd5",
      radius: 36
    },
    {
      id: "damagearbiter",
      shortTitle: "DamageArbiter",
      title: "DamageArbiter: A CLIP-Enhanced Multimodal Arbitration Framework for Hurricane Damage Assessment from Street-View Imagery",
      year: 2026,
      venue: "arXiv Preprint",
      type: "Preprint",
      status: "Preprint",
      authors: "Yifan Yang, Lei Zou, Wenjing Gong, Kani Fu, Zongrong Li, Siqin Wang, Bing Zhou, Heng Cai, Hao Tian",
      summary: "Introduces a CLIP-enhanced multimodal arbitration framework for more reliable hurricane damage assessment from street-view imagery.",
      impact: "This paper consolidates the disaster branch into a more trustworthy and explainable multimodal system, making the research narrative clearer and more mature.",
      themes: ["Disaster Assessment", "Multimodal Learning", "Spatial Intelligence"],
      methods: ["CLIP", "Multimodal Arbitration", "Street-View Imagery"],
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2602.15257" },
        { label: "Code", url: "https://github.com/rayford295/DamageArbiter" }
      ],
      connections: [
        { target: "hyperlocal", label: "extends the practical damage assessment pipeline with stronger multimodal arbitration" },
        { target: "disastervlp", label: "formalizes semantic damage reasoning into a robust framework" },
        { target: "satellite-to-street", label: "pairs with generative work that can expand post-disaster street-view availability" }
      ],
      position: { x: 705, y: 255 },
      color: "#0f1f34",
      radius: 42
    },
    {
      id: "satellite-to-street",
      shortTitle: "Satellite-to-Street",
      title: "Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models",
      year: 2026,
      venue: "IGARSS 2026",
      type: "Conference Paper",
      status: "Accepted",
      authors: "Yifan Yang, Lei Zou, Wendy Jepson",
      summary: "Uses generative vision models to synthesize post-disaster street-level views from satellite imagery, bridging remote sensing and ground-level interpretation.",
      impact: "This paper opens a new branch in the graph by moving from analysis to generation, which makes the broader research program feel forward-looking and distinctive.",
      themes: ["Generative Vision", "Disaster Assessment", "Spatial Intelligence"],
      methods: ["Generative Vision Models", "Satellite Imagery", "Street-Level Synthesis"],
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2603.10087" },
        { label: "Code", url: "https://github.com/rayford295/Satellite-to-Street" }
      ],
      connections: [
        { target: "hyperlocal", label: "responds to the need for street-view evidence where post-disaster imagery is sparse" },
        { target: "damagearbiter", label: "complements assessment models by generating new post-event visual inputs" }
      ],
      position: { x: 790, y: 500 },
      color: "#b97a16",
      radius: 40
    }
  ]
};
