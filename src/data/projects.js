const files = import.meta.glob('../assets/projects/*.webp', { eager: true });
const img = {};
for (const path in files) { img[path.split('/').pop().replace('.webp', '')] = files[path].default; }
export const pics = (...keys) => keys.map((k) => img[k]).filter(Boolean);
export const pic = (k) => img[k];

export const DISCIPLINES = [
  { id: 'fashion',    label: 'Fashion & Product' },
  { id: 'brand',      label: 'Brand & Illustration' },
  { id: 'editorial',  label: 'Editorial & Type' },
  { id: 'industrial', label: 'Industrial & 3D' },
];

export const projects = [
  {
    slug: 'rui-clothing', index: '01', title: 'RŪI',
    tagline: 'A streetwear label, built end to end',
    discipline: 'fashion', disciplineLabel: 'Fashion / Brand System',
    kind: 'Tech pack + packaging', year: '2026',
    tools: ['Illustrator', 'Procreate'],
    heroType: 'pdf',
    pdfPages: ['rui-tp-01','rui-tp-02','rui-tp-03','rui-tp-04','rui-tp-05','rui-tp-06','rui-tp-07','rui-tp-08','rui-tp-09','rui-tp-10','rui-tp-11'],
    hero: 'rui-black', heroFit: 'cover', featured: true,
    blurb: 'The Boxy Masked Hoodie — specced seam-by-seam across three washed colorways, down to the bag it ships in.',
    summary: [
      'RŪI is a streetwear label designed as a whole system rather than a single garment — from the piece itself to the polybag it ships in. The flagship is the Boxy Masked Hoodie: a dropped-shoulder silhouette in 400 GSM washed French Terry cotton, with a sculpted mask collar sewn into the neckline.',
      'The production tech pack specifies every seam and tolerance: 5-thread overlock main seams, twin-needle topstitch on the shoulders and hood, bar-tacked pocket corners, and ribbed cuffs blended for stretch recovery after wash. Three Pantone colorways ship together — Maroon, Anthracite, and Sorrel Horse.',
    ],
    process: [
      { img: 'rui-techline',       step: '01', label: 'First prototype', sub: 'Measurement, prototyping & views' },
      { img: 'rui-techpack-cover', step: '02', label: 'Tech pack',       sub: 'Full production spec' },
      { img: 'rui-maroon',         step: '03', label: 'Colourway',       sub: 'Maroon' },
      { img: 'rui-black',          step: '03', label: 'Colourway',       sub: 'Anthracite' },
      { img: 'rui-brown',          step: '03', label: 'Colourway',       sub: 'Sorrel horse' },
    ],
    processNote: 'From first prototype, to the tech pack, to the three finished colourways.',
    plates: [
      { img: 'rui-techline',       caption: 'Measurement, prototyping and views' },
      { img: 'rui-maroon',         caption: 'Maroon color' },
      { img: 'rui-black',          caption: 'Anthracite color' },
      { img: 'rui-brown',          caption: 'Sorrel horse color' },
      { img: 'rui-techpack-cover', caption: 'Tech pack — full PDF', download: 'rui-techpack.pdf' },
      { img: 'rui-polybag',        caption: 'RUI polybag — PDF', download: 'rui-polybag.pdf' },
    ],
    specs: [
      ['Deliverable', 'Production tech pack + packaging'],
      ['Fabric', '400 GSM washed French Terry'],
      ['Colorways', 'Maroon · Anthracite · Sorrel'],
      ['Run', '50 units + 3 samples'],
    ],
  },

  {
    slug: 'matchaholic', index: '02', title: 'Matchaholic',
    tagline: 'One cat, a whole café brand',
    discipline: 'brand', disciplineLabel: 'Brand Identity / Illustration',
    kind: 'Mascot · logo · packaging · campaign', year: '2025',
    tools: ['Procreate', 'Illustrator', 'Photoshop'],
    heroType: 'image', hero: 'matcha-final-nobg', heroFit: 'contain', featured: true,
    blurb: 'A contented ginger cat and its oversized bowl of matcha, stretched into a full drink-brand identity.',
    summary: [
      'Matchaholic is a complete drink-brand identity carried by a single character: a blissed-out ginger cat clutching an oversized bowl of matcha, headphones in, sneakers on. The character does the heavy lifting so the brand feels warm before it says a word.',
      'The system was built in order — from a first logo prototype to the final mark, then out to packaging (a cup sticker) and campaign banners. It ran live at the school Business Fair, on a tight sage-and-ginger palette.',
    ],
    briefPhotos: [
      { img: 'matcha-brief1', caption: 'Matchaholic — live at the Business Fair' },
      { img: 'matcha-brief2', caption: 'The Matchaholic stand' },
      { img: 'matcha-brief3', caption: 'The team' },
    ],
    process: [
      { img: 'matcha-proto1',  step: '01', label: 'First prototype', sub: '1st prototype of the logo' },
      { img: 'matcha-final',   step: '02', label: 'Final logo',      sub: 'Final logo design' },
      { img: 'matcha-sticker', step: '03', label: 'Packaging',       sub: 'Cup sticker design' },
      { img: 'matcha-banner1', step: '04', label: 'Campaign',        sub: 'Stand banner design 1' },
      { img: 'matcha-banner2', step: '05', label: 'Campaign',        sub: 'Banner design 2' },
    ],
    processNote: 'From the first logo prototype to the final mark, then packaging and campaign banners.',
    plates: [
      { img: 'matcha-proto1',  caption: '1st prototype of the logo' },
      { img: 'matcha-banner1', caption: 'Stand banner design 1' },
      { img: 'matcha-sticker', caption: 'Cup sticker design' },
      { img: 'matcha-final',   caption: 'Final logo design' },
      { img: 'matcha-banner2', caption: 'Banner design 2' },
      { img: 'matcha-brief1',  caption: 'Business Fair — the stand' },
      { img: 'matcha-brief2',  caption: 'Business Fair — serving' },
      { img: 'matcha-brief3',  caption: 'Business Fair — the team' },
    ],
    specs: [
      ['Assets', 'Mascot · logo · packaging · banners'],
      ['Palette', 'Matcha sage + ginger'],
      ['Tagline', '“Want Matcha? We gotcha!”'],
      ['Shown at', 'School Business Fair'],
    ],
  },

  {
    slug: 'tokyo-shibuya', index: '03', title: 'Screens Glow, Footsteps Sync',
    tagline: 'Shibuya as a typographic system',
    discipline: 'editorial', disciplineLabel: 'Typography & Graphic Design',
    kind: 'Editorial spread', year: '2026',
    tools: ['Illustrator'],
    heroType: 'image', hero: 'tokyo-shibuya', heroFit: 'contain', featured: true,
    blurb: 'An editorial spread from a learning journey to Tokyo — hard grid, monospace, vertical Japanese type.',
    summary: [
      'A piece of typography and graphic design produced from a learning journey to Tokyo. Shibuya is treated as a typographic system: a hard modular grid, oversized “TOKYO / SHIBUYA” display cut through with diagonal rules, monospaced body columns, and vertical Japanese type running the margins.',
      'The headline — 渋谷は光を吸い込み、動きを吐き出す街 — reads as “the city that inhales light and exhales motion,” a line the whole layout is built to perform. Black-and-white photography, film grain, and deliberate negative space set the pace of the scramble crossing.',
    ],
    plates: [
      { img: 'tokyo-shibuya',    caption: 'Shibuya editorial — full spread (PDF)', download: 'tokyo-shibuya.pdf' },
      { img: 'learning-journey', caption: 'Learning Journey in Japan — full booklet (PDF)', download: 'learning-journey-japan.pdf' },
    ],
    specs: [
      ['Format', 'Editorial spread'],
      ['System', 'Modular grid + monospace'],
      ['Type', 'Latin display + vertical JP'],
      ['Subject', 'Shibuya, Tokyo'],
    ],
  },

  {
    slug: 'wildstyle', index: '04', title: 'AXIOM — Wildstyle', tagline: '',
    discipline: 'editorial', disciplineLabel: 'Digital Graffiti',
    kind: 'Lettering series', year: '2026',
    tools: ['Procreate'],
    heroType: 'fitted', hero: 'wildstyle-axiom-grey', heroFit: 'contain', featured: true,
    blurb: 'An ongoing wildstyle study under the tag AXIOM — interlocking arrows, forced perspective, illegible-then-resolved.',
    summary: [
      'An ongoing study in wildstyle lettering under the tag AXIOM (@theaxiom.one). The letterforms are engineered like architecture — interlocking arrows, bar extensions, and forced perspective that reads almost illegible on purpose, then snaps into place once you find the structure.',
      'Pieces are rendered in graphite gradients, controlling depth, weight, and negative space entirely by hand. The same structure is pushed into a second tag, “JOSH”.',
    ],
    plates: [
      { img: 'wildstyle-josh-grey', caption: 'JOSH — wildstyle' },
    ],
    specs: [
      ['Tag', 'AXIOM · @theaxiom.one'],
      ['Medium', 'Digital (Procreate)'],
      ['Focus', 'Depth · weight · legibility'],
    ],
  },

  {
    slug: 'tentacle-arm', index: '05', title: 'Tentacle Arm',
    tagline: 'A cable-driven arm — school physics project',
    discipline: 'industrial', disciplineLabel: 'Mechanical / 3D Print',
    kind: 'School physics project · 3D print', year: '2026',
    tools: ['Onshape', 'FDM printing'],
    heroType: '3d', hero: 'tentacle-desc1', heroFit: 'contain', featured: true, is3d: true,
    blurb: 'A cable-driven articulated tentacle built for physics: segments that curl when the tendons pull.',
    summary: [
      'A cable-driven articulated tentacle arm, built as a school physics project to demonstrate tension, moments, and mechanical advantage. Stacked segments taper along the arm and thread onto a central carrier, so the whole assembly curls when the internal tendons are pulled.',
      'It is a soft-robotics-style mechanism made entirely from rigid FDM parts and tension. Every vertebra and connector was modelled in Onshape to print without supports and assemble by hand — taken from a first prototype through three iterations to a working final arm.',
    ],
    descImages: [
      { img: 'tentacle-desc1', caption: 'Design — overview' },
      { img: 'tentacle-desc2', caption: 'Design — mechanism' },
    ],
    // main display: full assembly + every stage, switchable in one 3D viewer
    models: [
      { name: 'Full assembly (final)', file: 'tentacle-full.stl' },
      { name: 'Prototype 3', file: 'tentacle-proto3.stl' },
      { name: 'Prototype 2', file: 'tentacle-proto2.stl' },
      { name: 'Prototype 1', file: 'tentacle-proto1.stl' },
    ],
    download: 'tentacle-parts-print-ready.zip',
    prototypes: [
      { name: 'Prototype 1', download: 'tentacle-prototype-1.zip',
        desc: 'The first proof of concept — a short stack of segments on a single tendon, testing whether pulling one cable would curl the arm at all.' },
      { name: 'Prototype 2', download: 'tentacle-prototype-2.zip',
        photo: 'tentacle-proto2photo', video: 'uploads/tentacle/prototype-2-mechanism.mp4', poster: 'uploads/tentacle/prototype-2-mechanism-poster.webp',
        desc: 'Reworked segment geometry and a cleaner tendon routing. This is the stage where the mechanism actually held its curl — the clip shows it moving.' },
      { name: 'Prototype 3', download: 'tentacle-prototype-3.zip',
        desc: 'Tapered the segments along the length and tightened tolerances so the parts print without supports and slide together by hand.' },
      { name: 'Final — Tentacle arm project', download: 'tentacle-final.zip',
        desc: 'The finished arm: a full taper of segments on a central carrier, print-ready as a 19-part set that assembles into the complete tentacle.' },
    ],
    specs: [
      ['Project', 'School physics project'],
      ['System', 'Cable / tendon driven'],
      ['Iterations', '3 prototypes → final'],
      ['Parts', '19 print-ready STL'],
      ['Modelled in', 'Onshape'],
    ],
  },

  {
    slug: 'multipurpose-helmet', index: '06', title: 'Multipurpose Helmet',
    tagline: 'A modular hard shell, sketched as a product',
    discipline: 'industrial', disciplineLabel: 'Industrial Design',
    kind: 'Concept + orthographic views', year: '2026',
    tools: ['Procreate'],
    heroType: 'image', hero: 'helmet-design', heroFit: 'contain', featured: false,
    blurb: 'A multipurpose helmet concept: polycarbonate shell, AI camera, LED, ear-protection extension, air vents and a back visor.',
    summary: [
      'The problem: most helmets are simple, heavy, and built for a single purpose. In heat you sweat, and an exposed neck burns in the sun. This concept answers all of that in one modular hard shell.',
      'Built-in tech does the heavy lifting. An AI-integrated camera takes voice prompts through a built-in microphone — a construction worker or architect can get an accurate distance reading between two objects instead of reaching for a tape, and the same assistant helps day to day (navigating terrain on a bike, identifying raw ore while mining). LED lighting lets the user see in the dark without a separate flashlight, and a clip-on ear-protection extension guards against loud site noise, so one helmet covers many jobs.',
      'The build keeps it light and comfortable: a polycarbonate shell for strength at low weight, a soft TPU cushion printed with a gyroid structure for breathable impact absorption, and a black strap to hold it in place. Air vents cool the head and cut sweat, and a back visor shades the neck from the sun.',
    ],
    plates: [
      { img: 'helmet-frontpersp', caption: 'Front perspective — scaffolding view' },
      { img: 'helmet-side',       caption: 'Side view — scaffolding' },
      { img: 'helmet-top',        caption: 'Top view — scaffolding' },
      { img: 'helmet-bottom',     caption: 'Bottom view — scaffolding' },
      { img: 'helmet-bottompersp',caption: 'Bottom perspective — scaffolding view' },
    ],
    specs: [
      ['Shell', 'Polycarbonate (light + strong)'],
      ['Cushion', 'Soft TPU · gyroid infill'],
      ['Tech', 'AI camera + mic · LED'],
      ['Add-on', 'Ear-protection extension'],
      ['Cooling', 'Air vents + back visor'],
      ['Retention', 'Black strap'],
    ],
  },

  {
    slug: 'student-council-designs', index: '07', title: 'Student Council Designs',
    tagline: 'Official design work for the SIS Student Council',
    discipline: 'brand', disciplineLabel: 'Student Council / Brand & Product',
    kind: 'Council design collection', year: '2025',
    tools: ['Procreate'],
    heroType: 'image', hero: 'council-blazer', heroFit: 'cover', featured: false,
    blurb: 'The official design set for the SIS Student Council — blazer, stamp, event stories, passport and prom invitations.',
    summary: [
      'A collection of official design work made for the SIS Student Council. The centrepiece is the council blazer: a structured navy body (#0A2142) with contrast crimson piping on the lapel and cuffs, twin cuff stripes, padded shoulders, a name-plate, and the SIS crest at the chest.',
      'Around the blazer sits the rest of the council identity: a council stamp, event stories (Semester Break, Kartini Day), a student passport, and prom invitations for The Soirée ’26.',
    ],
    links: [{ label: 'Prom invitations — live site (The Soirée ’26)', url: 'https://thesoiree26.my.canva.site/prom-test' }],
    plates: [
      { img: 'council-blazer',   caption: 'Council blazer design' },
      { img: 'council-stamp',    caption: 'SIS Student Council stamp' },
      { img: 'council-semester', caption: 'Semester Break story' },
      { img: 'council-kartini',  caption: 'Kartini Day story' },
      { img: 'council-passport', caption: 'SIS passport — PDF', download: 'council-passport.pdf' },
      { img: 'council-prom',     caption: 'Prom invitations — PDF', download: 'council-prom.pdf' },
    ],
    specs: [
      ['Set', 'Blazer · stamp · stories · passport · prom'],
      ['Navy', '#0A2142'],
      ['Blazer', 'Padded shoulders · crimson piping'],
      ['For', 'SIS Student Council'],
    ],
  },

  {
    slug: 'digital-drawings', index: '08', title: 'Digital Drawings',
    tagline: 'Hand-drawn digital illustration',
    discipline: 'brand', disciplineLabel: 'Illustration',
    kind: 'Digital illustration collection', year: '2024',
    tools: ['Procreate'],
    heroType: 'image', hero: 'mandala', heroFit: 'contain', featured: false,
    blurb: 'A set of standalone digital illustrations, drawn by hand in Procreate.',
    summary: [
      'A growing set of standalone digital illustrations, all drawn by hand in Procreate — pieces made across the early years of secondary school.',
      'The mandala is a patience piece: a dense, symmetrical greyscale build — concentric rings of petals, paisley, and stippled negative space mirrored around a single centre and shaded with gradients so the whole thing reads as relief rather than flat pattern.',
    ],
    plates: [
      { img: 'mandala',         caption: 'Mandala — greyscale study' },
      { img: 'drawing-blackcat',caption: 'Black cat' },
    ],
    specs: [
      ['Medium', 'Digital (Procreate)'],
      ['Pieces', 'Mandala · Black cat'],
      ['Technique', 'Gradient + stipple shading'],
    ],
  },

  {
    slug: 'pen-display', index: '09', title: 'Pen Display',
    tagline: 'Pens on show like specimens',
    discipline: 'industrial', disciplineLabel: 'Product / 3D Print',
    kind: 'Print-ready STL', year: '2025',
    tools: ['Onshape', 'FDM printing'],
    heroType: '3d', hero: 'pen-thumb', heroFit: 'contain', featured: false, is3d: true,
    blurb: 'A desktop pen display and storage tray, modelled parametrically for FDM printing.',
    summary: [
      'A desktop pen display and storage tray, modelled parametrically in Onshape for FDM printing. A low plinth with angled channels holds pens on show — laid out like specimens rather than dropped into a cup.',
      'A clean study in printable geometry: shallow overhangs, a stable base, and a profile that keeps each pen visible and easy to lift.',
    ],
    models: [{ name: 'Display base', file: 'pen.stl' }],
    download: 'pen-displayer-files.zip',
    plates: [],
    specs: [
      ['Modelled in', 'Onshape'],
      ['Output', 'Print-ready STL'],
      ['Parts', '1'],
      ['Function', 'Display + storage'],
    ],
  },

  {
    slug: 'butterfly-knife', index: '10', title: 'Butterfly Knife — Trainer',
    tagline: 'A safe balisong that still flips',
    discipline: 'industrial', disciplineLabel: 'Product / 3D Print',
    kind: 'Assembled product + print set', year: '2025',
    tools: ['Onshape', 'FDM printing'],
    heroType: '3d', hero: 'butterfly-thumb', heroFit: 'contain', featured: false, is3d: true,
    blurb: 'A balisong trainer with a blunt, safe blade — spin the assembled product, then grab the print-ready parts.',
    summary: [
      'A balisong (butterfly knife) trainer, printed as a set of parts. It swaps the edge for a blunt, safe trainer blade so flips can be practised without any risk of a cut.',
      'Both handles counter-rotate around shared pivot pins, exactly like a real balisong — the bite handle and safe handle swing so the fundamental flips, rollovers, and aerials all carry straight over to a live knife, while the blunt blade keeps it safe to learn on.',
    ],
    models: [
      { name: 'Assembled product', file: 'butterfly-product.stl' },
      { name: 'Handle A (print-ready)', file: 'butterfly-printready-1.stl' },
      { name: 'Handle B (print-ready)', file: 'butterfly-printready-2.stl' },
    ],
    download: 'butterfly-print-ready.zip',
    plates: [],
    specs: [
      ['Type', 'Balisong trainer (safe)'],
      ['Views', 'Assembled + print-ready parts'],
      ['Parts', '2 print-ready STL'],
      ['Modelled in', 'Onshape'],
    ],
  },
];

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug) => projects.find((p) => p.slug === slug);
