const imgs = import.meta.glob('../assets/research/*.webp', { eager: true });
const R = {};
for (const p in imgs) { R[p.split('/').pop().replace('.webp','')] = imgs[p].default; }
export const researchImg = (k) => R[k];
export const research = [
 {
  "slug": "plasma-star-formation",
  "title": "Recreating Cosmic Star Formation in the Laboratory",
  "subtitle": "A breakthrough in plasma physics",
  "deck": "Princeton physicists recreated magnetorotational instability — the turbulence that lets gas clouds collapse into stars — with spinning liquid metal, confirming a 20-year-old theory.",
  "field": "Plasma physics · astrophysics",
  "img": "plasma-star-formation",
  "blocks": [
   {
    "t": "img",
    "v": "plasma-star-formation"
   },
   {
    "t": "h",
    "v": "Introduction"
   },
   {
    "t": "p",
    "v": "Most of us know that stars and planets are formed when swirling disks of gas and dust collapse under their own gravity. However, several scientists have wondered what allows this collapse to actually happen. Simple gravity alone cannot explain the turbulence needed. There is a process called magnetorotational instability (MRI) which was proposed several years ago to explain how disks of matter around young stars and black holes become unstable, stir up turbulence, and push matter inward."
   },
   {
    "t": "p",
    "v": "Not long ago, researchers at the Princeton Plasma Laboratory (PPPL) and Princeton University successfully recreated this cosmic process in a laboratory. This took more than 20 years of work and preparation for this huge achievement. They later earned the 2025 John Dawson Award for Excellence in Plasma Physics Research from American Physical Society."
   },
   {
    "t": "h",
    "v": "The Process of MRI"
   },
   {
    "t": "p",
    "v": "Magnetorotational instability happens when magnetic fields interact with rotating plasma or gas. This causes the disk to wobble in a way that creates turbulence. This turbulence transfers angular momentum outward which allows the material at the center to collapse and form stars, planets, or even black holes."
   },
   {
    "t": "p",
    "v": "Without MRI, stars like our Sun could not exist. Proving this theory in the lab is one of the most important steps in understanding astrophysics."
   },
   {
    "t": "h",
    "v": "Laboratory Recreation"
   },
   {
    "t": "p",
    "v": "Recreating something extremely complex like this on Earth can be extremely difficult. Unlike the vastness of space, laboratory experiments are confined by walls that interfere with the instability. Instead of plasma, the PPPL team used liquid metals as they can flow like water and conduct electricity."
   },
   {
    "t": "p",
    "v": "By spinning liquid metals inside specially designed nested cylinders and applying magnetic fields, the scientists were able to reproduce MRI conditions. After lots of experiments, they finally isolated the instability and observed the predicted wobble, confirming the theory."
   },
   {
    "t": "h",
    "v": "Conclusion"
   },
   {
    "t": "p",
    "v": "For more than 20 years, scientists questioned whether a cosmic process responsible for star formation be recreated on Earth? Currently, the answer is yes. By demonstrating how magnetorotational instability works, researchers have taken a huge step in explaining how the universe’s building blocks like stars and planets are born."
   }
  ]
 },
 {
  "slug": "nuclear-fusion",
  "title": "Advances in Nuclear Fusion Research",
  "subtitle": "Progress toward practical energy",
  "deck": "A survey of the race for fusion power — NIF, JET, and the Wendelstein 7-X stellarator that held plasma for 43 seconds in 2025 — and why the grid is still decades away.",
  "field": "Nuclear / energy",
  "img": null,
  "blocks": [
   {
    "t": "h",
    "v": "Introduction"
   },
   {
    "t": "p",
    "v": "Nuclear fission is the current and conventional way of generating electricity in a typical nuclear power plant. However, scientists might have discovered an alternative way to create electricity by the use of nuclear fusion instead of nuclear fission."
   },
   {
    "t": "p",
    "v": "Nuclear fusion has long been viewed as a potential source of clean energy. Recently, the Wendelstein 7-X stellarator in Germany and the Joint European Torus (JET) in the United Kingdom, alongside progress at the U.S. National Ignition Facility (NIF), suggested that controlled fusion may be closer to reality than what they had thought possible."
   },
   {
    "t": "p",
    "v": "Nuclear fusion is the process that allows stars to survive and to make them shine in vast and dark space. This involves combining light atomic nuclei such as hydrogen isotopes like deuterium to form heavier nuclei, helium. This will result in producing large amounts of energy. Unlike nuclear fission, nuclear fusion produces more short-lived radioactive waste than long -lived radioactive waste."
   },
   {
    "t": "p",
    "v": "Even so, attaining a controlled fusion on Earth is extremely difficult as it requires extreme conditions and lots of fuel. In addition, it requires temperatures hotter than the Sun and stable confinement of plasma, making it one of the greatest challenges in Physics."
   },
   {
    "t": "h",
    "v": "Current Projects"
   },
   {
    "t": "p",
    "v": "NIF, located in California, uses powerful lasers to compress tiny fuel pellets of hydrogen until they fuse together. This process is called inertial confinement fusion. NIF had made a big breakthrough by producing more energy from a fusion reaction than it used to start it."
   },
   {
    "t": "p",
    "v": "JET is currently the largest operating tokamak, a doughnut-shaped fusion reactor machine that uses magnetic fields to confine plasma. In 2022, JET set a world record by producing 59 megajoules of energy in a single experiment. This proves that large-scale fusion reactions are possible."
   },
   {
    "t": "p",
    "v": "In May 2025, the Wendelstein 7-X reactor successfully confined plasma for 43 seconds, several times longer than its previous record. This specific device uses powerful superconducting magnets to stabilize the plasma without relying on internal current, a design that improves the stability. However, researchers are trying to lengthen confinement to more than 30 minutes in the future."
   },
   {
    "t": "h",
    "v": "The Future of Fusion"
   },
   {
    "t": "p",
    "v": "Several experts believe that fusion will not be ready to produce electricity before 2050 which means that fusion cannot help us quickly stop climate change. Instead, we have to rely on solar, wind, and nuclear fission for now. However, Nuclear fusion could become an important part of the global energy system, providing clean and unlimited power for future generations."
   },
   {
    "t": "h",
    "v": "Conclusion"
   },
   {
    "t": "p",
    "v": "Nuclear fusion has been called the “energy of the future” for more than 70 years. Even though progress has been slow, scientists are now closer than ever. Fusion will not solve today’s climate emergency, but it may one day give the world a safe, clean, and almost endless supply of energy."
   }
  ]
 },
 {
  "slug": "matter-antimatter",
  "title": "Why Matter Wins Over Antimatter",
  "subtitle": "A new discovery at CERN",
  "deck": "A new CERN result: beauty baryons decay slightly differently from their antimatter partners (CP violation) — a clue to why the universe is made of matter at all.",
  "field": "Particle physics",
  "img": "matter-antimatter",
  "blocks": [
   {
    "t": "p",
    "v": "The universe is mostly made of matter and a small portion of antimatter. From what we have learnt at school, the universe started with the Big Bang. According to the Big Bang theory, there should be an equal amount of matter and antimatter formed in the process. Since matter and antimatter destroy each other when they meet, the universe should have ended up with only radiation and no galaxies, stars, or people. Yet, clearly, matter survived."
   },
   {
    "t": "p",
    "v": "Many physicists believe that there is something called charge-parity (CP) violation which causes this reason, meaning that matter and antimatter do not behave in the exact same way."
   },
   {
    "t": "h",
    "v": "Experiments at CERN"
   },
   {
    "t": "p",
    "v": "Scientists at the Large Hadron Collider (LHC) in Geneva collided protons together with lots of energy. This often produced short-lived particles and a special type of baryon called the beauty-lambda baryon . Baryon is a particle which is made up of three smaller particles called quarks. Protons and neutrons are baryons. The scientists studied how these baryons decayed into other particles, and compared the results with their antimatter partners, called anti-beauty-lambda baryons ."
   },
   {
    "t": "p",
    "v": "Since both matter particles and their antimatter partners are created, this means that beauty-lambda baryons and anti-beauty-lambda baryons appear together in the detector. Scientists further studied how these baryons decayed into other particles by comparing the results with their antimatter partners and by reconstructing the decay tracks of both."
   },
   {
    "t": "h",
    "v": "Results"
   },
   {
    "t": "p",
    "v": "Researchers recorded about 80,000 decays and found that beauty baryons decay slightly more often than anti-beauty baryons. Surprisingly, this difference was only a few percent, but it was highly significant with less than one in five million chances of being a random result. This proved that CP violation also happens in baryons."
   },
   {
    "t": "p",
    "v": "Even though this is a major step, the effect is still not large enough to explain why matter survived after the Big Bang. There is a current theory called the Standard Model. This can explain small CP violations, but probably not enough to account for the entire imbalance."
   },
   {
    "t": "p",
    "v": "Physicists are now looking at other particles, especially neutrinos, which may also hide CP violation. Large experiments in underground labs are being built to test this."
   },
   {
    "t": "p",
    "v": "The discovery of CP violation in baryons at CERN is a breakthrough. It shows that matter and antimatter do not behave in exactly the same way, even in the particles that make up everyday matter. While it does not completely solve the mystery of why the universe exists, it brings us closer to the solution and points the way for more discoveries in the future."
   }
  ]
 },
 {
  "slug": "metamaterials",
  "title": "Strong and Stretchy Metamaterials",
  "subtitle": "MIT's double-network design",
  "deck": "MIT engineers broke the usual strength-versus-flexibility trade-off with a 'double-network' structure that stretches to three times its length without losing toughness.",
  "field": "Materials science",
  "img": "metamaterials",
  "blocks": [
   {
    "t": "h",
    "v": "What are Metamaterials?"
   },
   {
    "t": "p",
    "v": "Metamaterials are specially designed synthetic materials with microscopic structures, making them both strong and stretchy. They are made up of specially designed materials with microscopic structures that enable them to have unique properties. Traditionally, creating a material stronger also makes it less flexible. This suggests that many strong metamaterials tend to be brittle and can crack easily. Led by Professor Carlos Portela, MIT researchers have finally discovered an effective method to resolve this trade-off. Their research was subsequently detailed in Nature Materials ."
   },
   {
    "t": "h",
    "v": "The Double-Network Design and Testing"
   },
   {
    "t": "img",
    "v": "metamaterials"
   },
   {
    "t": "p",
    "v": "To overcome this situation, a “double-network” structure was created by the MIT team by combining and joining two different microscopic designs in one material. As the name implies, the design contains two distinct networks. The first network consists of a rigid lattice made up of minuscule struts and trusses. On the other hand, the second network was a woven pattern made of tiny coil s that were laced around each strut. Both networks were printed together utilising a special, high-precision method called two-photon lithography."
   },
   {
    "t": "p",
    "v": "Researchers underwent a number of stress tests by attaching either end of the sample to a unique nanomechanical press, simultaneously measuring the force it took to pull the material apart. High-quality videos were also recorded to observe the locations and ways in which the material stretched and tore."
   },
   {
    "t": "h",
    "v": "Observations"
   },
   {
    "t": "p",
    "v": "The new double-network design was found to stretch three times its own length and 10 times farther than a conventional lattice-patterned metamaterial printed with the same acrylic plastic. According to Portela, the material's stretchy resistance stems from the interactions between its rigid struts and the coiled weave when stressed."
   },
   {
    "t": "p",
    "v": "“Think of this woven network as a mess of spaghetti tangled around a lattice. As we break the monolithic lattice network, those broken parts come along for the ride, and now all this spaghetti gets entangled with the lattice pieces,” Portela explains. “That promotes more entanglement between woven fibres, which means you have more friction and more energy dissipation.”"
   },
   {
    "t": "p",
    "v": "The soft material woven around the rigid structure takes on more stress because the broken, stiff parts create many knots and tangles. Since this stress doesn't travel evenly, a crack is unlikely to tear straight through the material quickly. Furthermore, the team learned that adding planned holes, or \"defects,\" can help the material absorb and spread out stress even more, making it very stretchy and resistant to breaking at the same time."
   },
   {
    "t": "h",
    "v": "Conclusion"
   },
   {
    "t": "p",
    "v": "With this groundbreaking discovery, MIT engineers have opened a new path in metamaterials research by creating a structure with a new design that is both sturdy and stretchable. They achieve a material that absorbs more energy and resists tearing by combining a stiff lattice with a softer woven network. There are basically more ways to make use of this material for real-life applications that can be beneficial for society."
   }
  ]
 },
 {
  "slug": "quantum-tunneling",
  "title": "Macroscopic Quantum Tunneling in Superconducting Circuits",
  "subtitle": "The 2025 Nobel Prize in Physics",
  "deck": "The 2025 Nobel Prize — Clarke, Devoret, and Martinis showed quantum tunnelling and energy quantization happen in a chip-scale superconducting circuit, the groundwork for quantum computing.",
  "field": "Quantum / superconductivity",
  "img": null,
  "blocks": [
   {
    "t": "p",
    "v": "The 2025 Nobel Prize was awarded to John Clarke, Michel H. Devoret, and John M. Martinis for their discovery of macroscopic quantum mechanical tunneling and energy quantization in an electric circuit. Their experiments proved that quantum effects, which was once thought to exist only in atoms and subatomic particles, can emerge in circuits visible without the use of a microscope. This research became the foundation for modern superconducting qubits used in quantum computing."
   },
   {
    "t": "p",
    "v": "The behavior of particles at the smallest scales, where energy quantization and tunneling are common, is described by quantum mechanics. However, it was long believed that these effects disappear at larger, macroscopic scales."
   },
   {
    "t": "p",
    "v": "The 2025 Nobel laureates challenged this belief. Using superconducting circuits built with Josephson junctions, they demonstrated that a large, engineered system could still behave according to the laws of quantum mechanics. This discovery provided the first ever clear evidence that quantum tunneling and energy quantization can occur in electrical systems made of trillions of particles."
   },
   {
    "t": "h",
    "v": "Key Experiment and Discovery"
   },
   {
    "t": "p",
    "v": "The researchers used superconducting loops which were cooled to temperatures close to absolute zero in their experiments. Every loop had a Josephson junction, which allowed electron pairs (also known as Cooper pairs) to tunnel through a thin layer of insulation."
   },
   {
    "t": "p",
    "v": "They measured the system's transition between energy states by applying microwave radiation and then carefully controlling the current. Thermal activation caused these switches to occur at high temperatures. However, the switching continued as the temperature dropped, indicating that quantum tunneling rather than thermal escape was taking place."
   },
   {
    "t": "p",
    "v": "The circuit could only absorb energy at specific frequencies when exposed to microwave radiation, exposing discrete energy levels, which are a defining feature of quantum mechanics."
   },
   {
    "t": "p",
    "v": "These findings demonstrated that a superconducting circuit can work as a single quantum object even though it is macroscopic."
   },
   {
    "t": "h",
    "v": "Significance"
   },
   {
    "t": "p",
    "v": "The difference between the quantum and classical worlds became unclear as a result of this discovery. It demonstrated that quantum laws hold true for both engineered macroscopic systems and particles."
   },
   {
    "t": "p",
    "v": "Superconducting qubits, the fundamental components of modern quantum computers, also became possible by their hard work. Similar Josephson junctions are used by these qubits to store and control quantum data."
   },
   {
    "t": "h",
    "v": "Conclusion"
   },
   {
    "t": "p",
    "v": "Their discovery that transformed modern day physics was recognized with the 2025 Nobel Prize in Physics. By proving that the bizarre effects of quantum mechanics may occur in systems big enough to see, Clarke, Devoret, and Martinis changed our insight of reality and opened the door to potential change for quantum technology."
   }
  ]
 }
];
