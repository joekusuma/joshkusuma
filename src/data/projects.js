// Eagerly import every processed asset as ImageMetadata for <Image>.
const files = import.meta.glob('../assets/projects/*.webp', { eager: true });
const img = {};
for (const path in files) {
  const name = path.split('/').pop().replace('.webp', '');
  img[name] = files[path].default;
}
/** resolve a list of asset keys → ImageMetadata[] */
export const pics = (...keys) => keys.map((k) => img[k]).filter(Boolean);
export const pic = (k) => img[k];

/**
 * discipline groups used by /skills and /projects filtering
 */
export const DISCIPLINES = [
  { id: 'fashion',    label: 'Fashion & Product' },
  { id: 'brand',      label: 'Brand & Illustration' },
  { id: 'editorial',  label: 'Editorial & Type' },
  { id: 'industrial', label: 'Industrial & 3D' },
];

export const projects = [
  {
    slug: 'rui-clothing',
    index: '01',
    title: 'RŪI',
    tagline: 'A streetwear label, built end to end',
    discipline: 'fashion',
    disciplineLabel: 'Fashion / Brand System',
    kind: 'Tech pack + packaging',
    year: '2025',
    tools: ['Illustrator', 'CLO 3D', 'Procreate'],
    hero: 'rui-black',
    heroFit: 'cover',
    featured: true,
    blurb: 'The Boxy Masked Hoodie — specced seam-by-seam across three washed colorways, down to the bag it ships in.',
    summary: [
      'RŪI is a streetwear label designed as a whole system rather than a single garment — from the piece itself to the polybag it ships in. The flagship is the Boxy Masked Hoodie (“Dune Hoodie”): a dropped-shoulder silhouette in 400 GSM washed French Terry cotton, with a sculpted mask collar sewn directly into the neckline.',
      'The production tech pack specifies every seam and tolerance: 5-thread overlock main seams at 10–12 SPI, twin-needle topstitch on the shoulders and hood, bar-tacked pocket corners, and 1×1 ribbed cuffs blended for stretch recovery after stone-wash. Three Pantone colorways ship together — Anthracite, Maroon Banner, and Sorrel Horse.',
      'A custom embroidered mark (satin-stitched edges, soft off-white thread) and a matching matte polybag close the identity. The brief that runs through the whole thing: “From the world to Indonesia — global taste, physical access.”',
    ],
    specs: [
      ['Deliverable', 'Production tech pack + packaging'],
      ['Fabric', '400 GSM washed French Terry'],
      ['Colorways', 'Anthracite · Maroon · Sorrel'],
      ['Run', '50 units + 3 samples'],
    ],
    gallery: ['rui-techline', 'rui-maroon', 'rui-brown', 'rui-techpack-cover', 'rui-fabric', 'rui-polybag'],
  },

  {
    slug: 'matchaholic',
    index: '02',
    title: 'Matchaholic',
    tagline: 'One cat, a whole café brand',
    discipline: 'brand',
    disciplineLabel: 'Brand Identity / Illustration',
    kind: 'Mascot · logo · packaging · campaign',
    year: '2025',
    tools: ['Procreate', 'Illustrator', 'Photoshop'],
    hero: 'matcha-mascot',
    heroFit: 'contain',
    featured: true,
    blurb: 'A contented ginger cat and its oversized bowl of matcha, stretched into a full drink-brand identity.',
    summary: [
      'Matchaholic is a complete drink-brand identity carried by a single character: a blissed-out ginger cat clutching an oversized bowl of matcha, headphones in, sneakers on. The character does the heavy lifting so the brand feels warm before it says a word.',
      'The system flexes from that hand-drawn mascot to a sharper cup logo — shades on, “matchaholic” set in script — plus packaging name-tags (“Want Matcha? We gotcha!”), spot illustrations, and splashy campaign banners (“Pure Matcha, Pure Bliss — handcrafted with care, whisked to perfection”).',
      'It’s an exercise in stretching one friendly idea across every touchpoint a café actually needs, on a tight sage-and-ginger palette.',
    ],
    specs: [
      ['Assets', 'Mascot · logo · packaging · banners'],
      ['Palette', 'Matcha sage + ginger'],
      ['Tagline', '“Want Matcha? We gotcha!”'],
      ['Range', '7+ deliverables'],
    ],
    gallery: ['matcha-cuplogo', 'matcha-banner', 'matcha-nametag', 'matcha-square', 'matcha-pointing', 'matcha-green'],
  },

  {
    slug: 'tokyo-shibuya',
    index: '03',
    title: 'Screens Glow, Footsteps Sync',
    tagline: 'Shibuya as a typographic system',
    discipline: 'editorial',
    disciplineLabel: 'Editorial / Layout',
    kind: 'Single-page spread',
    year: '2026',
    tools: ['InDesign', 'Photoshop'],
    hero: 'tokyo-shibuya',
    heroFit: 'contain',
    featured: true,
    blurb: 'An editorial spread from a learning journey to Tokyo — hard grid, monospace, vertical Japanese type.',
    summary: [
      'A one-page editorial spread produced from a learning journey to Tokyo. Shibuya is treated as a typographic system: a hard modular grid, oversized “TOKYO / SHIBUYA” display cut through with diagonal rules, monospaced body columns, and vertical Japanese type running the margins.',
      'The headline text — 渋谷は光を吸い込み、動きを吐き出す街 — reads as “the city that inhales light and exhales motion,” a line the whole layout is built to perform. Black-and-white photography, film grain, and deliberate negative space set the pace of the scramble crossing.',
      'It’s a Swiss-influenced piece about rhythm: energy that never settles, circulating through streets that refuse to sleep.',
    ],
    specs: [
      ['Format', 'Single-page editorial spread'],
      ['System', 'Modular grid + monospace'],
      ['Type', 'Latin display + vertical JP'],
      ['Subject', 'Shibuya, Tokyo'],
    ],
    gallery: ['tokyo-shibuya'],
  },

  {
    slug: 'wildstyle',
    index: '04',
    title: 'AXIOM — Wildstyle',
    tagline: 'Letters engineered like architecture',
    discipline: 'editorial',
    disciplineLabel: 'Lettering / Digital Graffiti',
    kind: 'Type series (3 pieces)',
    year: '2026',
    tools: ['Procreate'],
    hero: 'wildstyle-axiom-billboard',
    heroFit: 'cover',
    featured: true,
    blurb: 'An ongoing wildstyle study under the tag AXIOM — interlocking arrows, forced perspective, illegible-then-resolved.',
    summary: [
      'An ongoing study in wildstyle lettering under the tag AXIOM (@theaxiom.one). The letterforms are engineered like architecture — interlocking arrows, bar extensions, and forced perspective that reads almost illegible on purpose, then snaps into place once you find the structure.',
      'Pieces are rendered in graphite gradients and mocked up in the wild: a full billboard takeover, and colour work like “JOSH” — violet-to-blue with a tiny figure hidden inside a letter counter. The discipline is entirely about controlling depth, weight, and negative space by hand.',
    ],
    specs: [
      ['Tag', 'AXIOM · @theaxiom.one'],
      ['Series', '3 pieces + mockups'],
      ['Medium', 'Digital (Procreate)'],
      ['Focus', 'Depth · weight · legibility'],
    ],
    gallery: ['wildstyle-axiom-grey', 'wildstyle-josh'],
  },

  {
    slug: 'tentacle-arm',
    index: '05',
    title: 'Tentacle Arm',
    tagline: 'A 43-part, cable-driven print set',
    discipline: 'industrial',
    disciplineLabel: 'Mechanical / 3D Print',
    kind: '43 STL parts',
    year: '2026',
    tools: ['Onshape', 'FDM printing'],
    hero: 'stl-tentacle-hero',
    heroFit: 'contain',
    featured: true,
    blurb: 'A cable-driven articulated tentacle: forty-plus segments that curl when the tendons pull.',
    summary: [
      'A cable-driven articulated tentacle arm, designed as a forty-plus part print set in Onshape. Stacked segments taper along the arm, threaded onto connectors and a parts-carrier, so the whole assembly curls when the internal tendons are pulled.',
      'This is the ambitious one: every vertebra, connector, and end-cap is modelled to print without supports and assemble by hand. The result is a soft-robotics-style mechanism built entirely from rigid FDM parts and tension.',
    ],
    specs: [
      ['System', 'Cable / tendon driven'],
      ['Parts', '43 print-ready STL'],
      ['Modelled in', 'Onshape'],
      ['Assembly', 'Support-free print + strung'],
    ],
    is3d: true,
    models: [
      { name: 'Arm connector', file: 'tentacle-armconnector.stl' },
      { name: 'Parts connector', file: 'tentacle-partsconnector.stl' },
      { name: 'Segment', file: 'tentacle-segment.stl' },
    ],
    partsGallery: ['stl-tentacle-p1', 'stl-tentacle-p2', 'stl-tentacle-p3', 'stl-tentacle-p4', 'stl-tentacle-p5', 'stl-tentacle-p6'],
    download: 'tentacle-arm-files.zip',
    gallery: [],
  },

  {
    slug: 'multipurpose-helmet',
    index: '06',
    title: 'Multipurpose Helmet',
    tagline: 'A modular hard shell, sketched as a product',
    discipline: 'industrial',
    disciplineLabel: 'Industrial Design',
    kind: 'Concept sketch + orthographics',
    year: '2026',
    tools: ['Procreate'],
    hero: 'helmet',
    heroFit: 'cover',
    featured: false,
    blurb: 'A concept helmet with a flip visor, AI camera, LED, and a clip-on ear-protection module with speakers.',
    summary: [
      'A concept for a modular multipurpose helmet. A hard shell with a tinted flip-visor houses an AI-integrated camera and an LED, moulded TPU internals, and an optional clip-on ear-protection module with built-in speakers.',
      'It’s presented the way a product designer would pitch it: a hero three-quarter render, orthographic views with material call-outs, and a cutaway of the padded interior — so the idea reads as a buildable object, not just a drawing.',
    ],
    specs: [
      ['Features', 'AI camera · LED · TPU shell'],
      ['Add-on', 'Ear protection + speakers'],
      ['Format', 'Concept + orthographic views'],
      ['Shell', 'Hard shell + tinted visor'],
    ],
    gallery: ['helmet'],
  },

  {
    slug: 'sis-council-blazer',
    index: '07',
    title: 'SIS Council Blazer',
    tagline: 'A school blazer, drawn as a working spec',
    discipline: 'fashion',
    disciplineLabel: 'Uniform / Product',
    kind: 'Garment spec (3 views)',
    year: '2025',
    tools: ['Procreate', 'Illustrator'],
    hero: 'sis-blazer',
    heroFit: 'cover',
    featured: false,
    blurb: 'A student-council blazer redesign: structured navy, crimson piping, padded shoulders, back slit.',
    summary: [
      'A redesign of the school student-council blazer. A structured navy body with contrast crimson piping on the lapel and cuffs, twin cuff stripes, padded shoulders, a name-plate, and the SIS crest at the chest.',
      'Drawn as a working garment spec — front, side, and back — with hand call-outs for branding placement, shoulder padding, and a small vent slit at the back. A restrained brief handled with production detail.',
    ],
    specs: [
      ['Views', 'Front · side · back'],
      ['Palette', 'Navy + crimson'],
      ['Details', 'Padded shoulders · back slit'],
      ['Marks', 'Name plate · SIS crest'],
    ],
    gallery: ['sis-blazer'],
  },

  {
    slug: 'mandala-integrity',
    index: '08',
    title: 'Mandala — Integrity',
    tagline: 'A patience piece in greyscale',
    discipline: 'brand',
    disciplineLabel: 'Illustration / Fine Art',
    kind: 'Greyscale illustration',
    year: '2024',
    tools: ['Procreate'],
    hero: 'mandala',
    heroFit: 'contain',
    featured: false,
    blurb: 'A dense, radially-symmetrical mandala shaded to read as relief rather than flat pattern.',
    summary: [
      'A dense, symmetrical mandala built by hand in greyscale — concentric rings of petals, paisley, and stippled negative space resolving to a domed metallic core.',
      'A patience piece: every layer is mirrored around a single centre and shaded with gradients and stippling so the whole thing reads as relief rather than flat pattern. Made as a school study on the value of Integrity.',
    ],
    specs: [
      ['Technique', 'Greyscale · gradient + stipple'],
      ['Symmetry', 'Radial'],
      ['Read', 'Relief, not flat'],
      ['Context', 'School study — Integrity'],
    ],
    gallery: ['mandala'],
  },

  {
    slug: 'pen-display',
    index: '09',
    title: 'Pen Display',
    tagline: 'Pens on show like specimens',
    discipline: 'industrial',
    disciplineLabel: 'Product / 3D Print',
    kind: 'Print-ready STL',
    year: '2025',
    tools: ['Onshape', 'FDM printing'],
    hero: 'stl-pen',
    heroFit: 'contain',
    featured: false,
    blurb: 'A desktop pen display and storage tray, modelled parametrically for FDM printing.',
    summary: [
      'A desktop pen display and storage tray, modelled parametrically in Onshape for FDM printing. A low plinth with angled channels holds pens on show — laid out like specimens rather than dropped into a cup.',
      'Small object, but a clean study in printable geometry: shallow overhangs, a stable base, and a profile that keeps each pen visible and easy to lift.',
    ],
    specs: [
      ['Modelled in', 'Onshape'],
      ['Output', 'Print-ready STL'],
      ['Parts', '1'],
      ['Function', 'Display + storage'],
    ],
    is3d: true,
    models: [{ name: 'Display base', file: 'pen.stl' }],
    download: 'pen-displayer-files.zip',
    gallery: [],
  },

  {
    slug: 'butterfly-knife',
    index: '10',
    title: 'Butterfly Knife — Trainer',
    tagline: 'A safe balisong that still flips',
    discipline: 'industrial',
    disciplineLabel: 'Product / 3D Print',
    kind: '2-part print set',
    year: '2025',
    tools: ['Onshape', 'FDM printing'],
    hero: 'stl-butterfly-1',
    heroFit: 'contain',
    featured: false,
    blurb: 'A print-in-two-parts balisong trainer with a blunt, safe blade for practising flips.',
    summary: [
      'A print-in-two-parts balisong trainer — a butterfly knife with a blunt, safe “blade” for practising flips without an edge. The two handle channels pivot around the bearing points.',
      'Designed to snap together and flip with real weight, so the muscle-memory transfers, while staying completely safe to handle.',
    ],
    specs: [
      ['Type', 'Balisong trainer (safe)'],
      ['Parts', '2 print-ready STL'],
      ['Modelled in', 'Onshape'],
      ['Blade', 'Blunt / non-edged'],
    ],
    is3d: true,
    models: [
      { name: 'Handle A', file: 'butterfly-1.stl' },
      { name: 'Handle B', file: 'butterfly-2.stl' },
    ],
    partsGallery: ['stl-butterfly-2'],
    download: 'butterfly-knife-files.zip',
    gallery: [],
  },
];

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug) => projects.find((p) => p.slug === slug);
