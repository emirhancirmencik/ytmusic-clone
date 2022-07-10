import mozart from "../image/covers182/cover18.jpg";
import freesound from "../image/covers182/cover0.jpg";
import schubert from "../image/covers182/cover17.jpg";

const artistList = [
  {
    name: "Freesound.org",
    cover: freesound,
  },
  {
    name: "Franz Schubert",
    cover: schubert,
  },
  {
    name: "Amadeus Mozart",
    cover: mozart,
  },
];

export default artistList.sort(() => Math.random() - 0.5);
