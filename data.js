window.researchMapData = {
  "generatedAt": "2026-04-25T18:03:35.041Z",
  "themes": [
    "All",
    "Applied GeoAI Tooling",
    "Computer Vision Segmentation",
    "Disaster Assessment",
    "Generative Vision",
    "Geo-Privacy",
    "Multimodal Learning",
    "Spatial Intelligence",
    "Urban Greening"
  ],
  "nodes": [
    {
      "id": "arcgis-sam-tree-segmentation",
      "shortTitle": "ArcGIS Text SAM",
      "title": "Object Detection and Segmentation of Trees using Text SAM in ArcGIS Online",
      "year": 2025,
      "venue": "Security First: Geospatial Workflows for a Safe and Equitable World",
      "type": "Book Chapter",
      "status": "Published",
      "authors": "Yifan Yang, Dominic Borrelli",
      "summary": "Presents a step-by-step GeoAI workflow for tree object detection and segmentation from high-resolution aerial imagery using Text SAM in ArcGIS Online Notebooks and the ArcGIS API for Python. The workflow produces vectorized tree polygons that can be opened in ArcGIS Online Map Viewer or analyzed further in ArcGIS Pro.",
      "impact": "This chapter is important because it turns GeoAI from an abstract model capability into a teachable, reproducible ArcGIS workflow. It gives the research portfolio a practical GIS education and urban greening branch while staying connected to the larger theme of spatial intelligence.",
      "themes": [
        "Applied GeoAI Tooling",
        "Computer Vision Segmentation",
        "Spatial Intelligence",
        "Urban Greening"
      ],
      "methods": [
        "ArcGIS Online Notebooks",
        "Text SAM",
        "Segment Anything Model",
        "Aerial Imagery",
        "ArcGIS API for Python",
        "Vectorized Tree Polygons"
      ],
      "links": [
        {
          "label": "Book",
          "url": "https://www.esri.com/en-us/esri-press/browse/security-first-geospatial-workflows-for-a-safe-and-equitable-world"
        },
        {
          "label": "Chapter",
          "url": "https://www.researchgate.net/publication/396514864_Object_detection_and_segmentation_of_trees_using_Text_SAM_in_ArcGIS_Online"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/ArcGIS-SAM-TreeSegmentation"
        }
      ],
      "connections": [
        {
          "target": "geolocator",
          "label": "shares the broader spatial intelligence goal of grounding AI outputs in geographic context"
        },
        {
          "target": "satellite-to-street",
          "label": "connects overhead or aerial imagery with downstream ground-level environmental interpretation"
        },
        {
          "target": "hyperlocal-disaster",
          "label": "extends the portfolio from damage-oriented visual analysis to urban environmental feature extraction"
        }
      ],
      "repository": {
        "name": "ArcGIS-SAM-TreeSegmentation",
        "url": "https://github.com/rayford295/ArcGIS-SAM-TreeSegmentation",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/ArcGIS-SAM-TreeSegmentation",
        "language": "Python",
        "stars": 1,
        "forks": 0,
        "commits": 4
      },
      "position": {
        "x": 430,
        "y": 535
      },
      "color": "#2f8f6f",
      "radius": 35
    },
    {
      "id": "damagearbiter",
      "shortTitle": "DamageArbiter",
      "title": "DamageArbiter: A CLIP-Enhanced Multimodal Arbitration Framework for Hurricane Damage Assessment from Street-View Imagery",
      "year": 2026,
      "venue": "arXiv Preprint",
      "type": "Preprint",
      "status": "Preprint",
      "authors": "Yifan Yang, Lei Zou, Wenjing Gong, Kani Fu, Zongrong Li, Siqin Wang, Bing Zhou, Heng Cai, Hao Tian",
      "summary": "Introduces a CLIP-enhanced multimodal arbitration framework for more reliable hurricane damage assessment from street-view imagery.",
      "impact": "This paper consolidates the disaster branch into a more trustworthy and explainable multimodal system, making the research narrative clearer and more mature.",
      "themes": [
        "Disaster Assessment",
        "Multimodal Learning",
        "Spatial Intelligence"
      ],
      "methods": [
        "CLIP",
        "Multimodal Arbitration",
        "Street-View Imagery"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://arxiv.org/abs/2603.14837"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/DamageArbiter"
        },
        {
          "label": "Dataset",
          "url": "https://doi.org/10.6084/m9.figshare.28801208.v2"
        },
        {
          "label": "Hugging Face",
          "url": "https://huggingface.co/datasets/Rayford295/BiTemporal-StreetView-Damage"
        }
      ],
      "connections": [
        {
          "target": "hyperlocal-disaster",
          "label": "extends the practical damage assessment pipeline with stronger multimodal arbitration"
        },
        {
          "target": "disastervlp",
          "label": "formalizes semantic damage reasoning into a robust framework"
        },
        {
          "target": "satellite-to-street",
          "label": "pairs with generative work that can expand post-disaster street-view availability"
        }
      ],
      "repository": {
        "name": "DamageArbiter",
        "url": "https://github.com/rayford295/DamageArbiter",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/DamageArbiter",
        "language": "Python",
        "stars": 1,
        "forks": 1,
        "commits": 61
      },
      "position": {
        "x": 705,
        "y": 255
      },
      "color": "#0f1f34",
      "radius": 42
    },
    {
      "id": "disastervlp",
      "shortTitle": "DisasterVLP",
      "title": "Perceiving Multidimensional Disaster Damages from Street-View Images Using Visual-Language Models",
      "year": 2025,
      "venue": "International Cartographic Conference",
      "type": "Conference Paper",
      "status": "Published",
      "authors": "Yifan Yang, Lei Zou",
      "summary": "Explores multidimensional disaster damage understanding with visual-language models, moving beyond single-score damage classification.",
      "impact": "This paper marks the shift from pure recognition to richer semantic interpretation, which directly informs later multimodal arbitration work.",
      "themes": [
        "Disaster Assessment",
        "Multimodal Learning",
        "Spatial Intelligence"
      ],
      "methods": [
        "Visual-Language Models",
        "Street-View Imagery",
        "Damage Semantics"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.5194/ica-abs-10-310-2025"
        },
        {
          "label": "DOI",
          "url": "https://doi.org/10.5194/ica-abs-10-310-2025"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/DisasterVLP"
        },
        {
          "label": "Dataset",
          "url": "https://doi.org/10.6084/m9.figshare.28801208.v2"
        }
      ],
      "connections": [
        {
          "target": "hyperlocal-disaster",
          "label": "broadens the earlier street-view damage pipeline into semantic damage perception"
        },
        {
          "target": "damagearbiter",
          "label": "provides the conceptual bridge to multimodal arbitration with CLIP-style reasoning"
        }
      ],
      "repository": {
        "name": "DisasterVLP",
        "url": "https://github.com/rayford295/DisasterVLP",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/DisasterVLP",
        "language": "Jupyter Notebook",
        "stars": 2,
        "forks": 3,
        "commits": 26
      },
      "position": {
        "x": 560,
        "y": 390
      },
      "color": "#4b9dd5",
      "radius": 36
    },
    {
      "id": "geolocator",
      "shortTitle": "GeoLocator",
      "title": "GeoLocator: A Location-Integrated Large Multimodal Model for Inferring Geo-Privacy",
      "year": 2024,
      "venue": "Applied Sciences",
      "type": "Journal Article",
      "status": "Published",
      "authors": "Yifan Yang, Siqin Wang, Daoyang Li, Shuju Sun, Qingyang Wu",
      "summary": "Introduces a location-integrated large multimodal model that reasons about geo-privacy signals and location inference from visual content.",
      "impact": "This paper established an early foundation for combining visual understanding with spatial reasoning, which later expands into disaster intelligence and multimodal geographic inference.",
      "themes": [
        "Geo-Privacy",
        "Multimodal Learning",
        "Spatial Intelligence"
      ],
      "methods": [
        "Large Multimodal Model",
        "Geo-Privacy Inference",
        "Location Integration"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://www.mdpi.com/2076-3417/14/16/7091"
        },
        {
          "label": "DOI",
          "url": "https://doi.org/10.3390/app14167091"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/GeoLocator"
        },
        {
          "label": "Demo",
          "url": "https://gpts-privacy.github.io/auto-demo/"
        }
      ],
      "connections": [
        {
          "target": "disastervlp",
          "label": "extends multimodal geographic reasoning into disaster understanding"
        },
        {
          "target": "hyperlocal-disaster",
          "label": "precedes later work on location-aware street-view damage analysis"
        }
      ],
      "repository": {
        "name": "GeoLocator",
        "url": "https://github.com/rayford295/GeoLocator",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/GeoLocator",
        "language": "HTML",
        "stars": 1,
        "forks": 1,
        "commits": 22
      },
      "position": {
        "x": 180,
        "y": 470
      },
      "color": "#d7a13b",
      "radius": 34
    },
    {
      "id": "hyperlocal-disaster",
      "shortTitle": "Hyperlocal Disaster",
      "title": "Hyperlocal Disaster Damage Assessment Using Bi-temporal Street-View Imagery and Pre-trained Vision Models",
      "year": 2025,
      "venue": "Computers, Environment and Urban Systems",
      "type": "Journal Article",
      "status": "Published",
      "authors": "Yifan Yang, Lei Zou, Bing Zhou, Daoyang Li, Binin Lin, Joynal Abedin, Mengyang Yang",
      "summary": "Builds a hyperlocal disaster assessment pipeline from paired pre- and post-event street-view imagery using pre-trained vision models.",
      "impact": "This work anchors the disaster-assessment branch of the graph and introduces a practical street-view centered task that later papers refine with richer multimodal reasoning.",
      "themes": [
        "Disaster Assessment",
        "Spatial Intelligence"
      ],
      "methods": [
        "Street-View Imagery",
        "Bi-temporal Analysis",
        "Pre-trained Vision Models"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://www.sciencedirect.com/science/article/pii/S0198971525000311"
        },
        {
          "label": "DOI",
          "url": "https://doi.org/10.1016/j.compenvurbsys.2025.102335"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/Bi-Temporal-StreetView"
        },
        {
          "label": "Dataset",
          "url": "https://doi.org/10.6084/m9.figshare.28801208.v2"
        },
        {
          "label": "Hugging Face",
          "url": "https://huggingface.co/datasets/Rayford295/BiTemporal-StreetView-Damage"
        }
      ],
      "connections": [
        {
          "target": "disastervlp",
          "label": "moves from vision-only damage estimation to visual-language understanding"
        },
        {
          "target": "damagearbiter",
          "label": "becomes a precursor for arbitration-based multimodal assessment"
        },
        {
          "target": "satellite-to-street",
          "label": "creates the street-view demand that motivates satellite-to-street generation"
        }
      ],
      "repository": {
        "name": "Bi-Temporal-StreetView",
        "url": "https://github.com/rayford295/Bi-Temporal-StreetView",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/Bi-Temporal-StreetView",
        "language": "Python",
        "stars": 7,
        "forks": 2,
        "commits": 44
      },
      "position": {
        "x": 370,
        "y": 300
      },
      "color": "#157bc0",
      "radius": 38
    },
    {
      "id": "satellite-to-street",
      "shortTitle": "Satellite-to-Street",
      "title": "Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models",
      "year": 2026,
      "venue": "IGARSS 2026",
      "type": "Conference Paper",
      "status": "Accepted",
      "authors": "Yifan Yang, Lei Zou, Wendy Jepson",
      "summary": "Uses generative vision models to synthesize post-disaster street-level views from satellite imagery, bridging remote sensing and ground-level interpretation.",
      "impact": "This paper opens a new branch in the graph by moving from analysis to generation, which makes the broader research program feel forward-looking and distinctive.",
      "themes": [
        "Generative Vision",
        "Disaster Assessment",
        "Spatial Intelligence"
      ],
      "methods": [
        "Generative Vision Models",
        "Satellite Imagery",
        "Street-Level Synthesis"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://arxiv.org/abs/2603.20697"
        },
        {
          "label": "Code",
          "url": "https://github.com/rayford295/Sat2Street-DisasterGen"
        }
      ],
      "connections": [
        {
          "target": "hyperlocal-disaster",
          "label": "responds to the need for street-view evidence where post-disaster imagery is sparse"
        },
        {
          "target": "damagearbiter",
          "label": "complements assessment models by generating new post-event visual inputs"
        }
      ],
      "repository": {
        "name": "Sat2Street-DisasterGen",
        "url": "https://github.com/rayford295/Sat2Street-DisasterGen",
        "preview": "https://opengraph.githubassets.com/rayford-geograph/rayford295/Sat2Street-DisasterGen",
        "language": "Python",
        "stars": 1,
        "forks": 1,
        "commits": 106
      },
      "position": {
        "x": 790,
        "y": 500
      },
      "color": "#b97a16",
      "radius": 40
    }
  ]
};
