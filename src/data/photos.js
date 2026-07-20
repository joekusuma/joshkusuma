const jp = import.meta.glob('../assets/photos/japan/*.webp', { eager: true });
const us = import.meta.glob('../assets/photos/us/*.webp', { eager: true });
const NAMES = {"a-quiet-academic-neighborhood-of-keio-university": "A quiet academic neighborhood of KEIO University","keio-university-dorms": "KEIO University Dorms","keio-university-sbc-dome": "Keio University SBC Dome","mount-fuji-lake-yamanaka": "Mount Fuji - Lake Yamanaka","senso-ji": "Senso-ji","senso-ji-temple-and-tree": "Senso-ji temple + tree","shibuya-dogenzaka-graffitis": "Shibuya - Dogenzaka Graffitis","shibuya-udagawacho": "Shibuya - Udagawacho","shibuya-building-landmark": "Shibuya building landmark","taito-asakusa": "Taito - Asakusa","taito-tokyo-sky-tree": "Taito Tokyo Sky Tree","waseda-university-nishiwaseda-campus-building": "Waseda University - Nishiwaseda Campus building","waseda-university-nishiwaseda-campus-interior": "Waseda University - Nishiwaseda Campus interior","waseda-university-nishiwaseda-campus-perspective-view": "Waseda University - Nishiwaseda Campus perspective view","waseda-university-nishiwaseda-campus-top-view": "Waseda University - Nishiwaseda Campus top view","dana-point-harbor": "Dana Point - Harbor","dickson-plaza-ucla-grass": "Dickson Plaza UCLA grass","getty-museum-backside": "Getty Museum backside","getty-museum": "Getty Museum","glendora-hills": "Glendora hills","griffith-park-city-view": "Griffith Park City View","griffith-park": "Griffith Park","hollywood": "Hollywood","img-8990": "Los Angeles","joshua-tree-park": "Joshua Tree Park","little-tokyo-mrt": "Little Tokyo MRT","otis-college-of-design-builidng": "OTIS College of Design Builidng","rodeo-drive-view": "Rodeo drive view","santa-ana-central-city": "Santa Ana - Central City","the-broad-ceiling": "The Broad ceiling","the-broad-exterior": "The Broad exterior","walt-disney-concert-hall-exterior": "Walt Disney Concert Hall exterior"};

function build(glob) {
  return Object.keys(glob).sort().map((path) => {
    const slug = path.split('/').pop().replace('.webp', '');
    return { img: glob[path].default, slug, name: NAMES[slug] || slug };
  });
}
export const japanPhotos = build(jp);
export const usPhotos = build(us);
