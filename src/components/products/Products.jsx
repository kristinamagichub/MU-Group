import Card from "../card/Card";
import "./Products.css";

const ProductList = [
  {
    id: 0,
    title: "Ultimate Guitar",
    description:
      "The best platform for music makers to play songs they love. Home to the world's largest music community.",
    link: "#",
    bgColor: "#FFC800",
  },
  {
    id: 1,
    title: "MuseScore",
    description:
      "Create, play back, and print sheet music with free open source notation software.",
    link: "#",
    bgColor: "#2E68C0",
  },
  {
    id: 2,
    title: "audio.com",
    description: "The easiest way to share any sound online.",
    link: "#",
    bgColor: "#EA1542",
  },
  {
    id: 3,
    title: "Audacity",
    description: "The world's most popular audio editing and recording app.",
    link: "#",
    bgColor: "#1D4ED8",
  },
];

export function Products({}) {
  return (
    <section className="products__section">
      <h2 className="products__title h1">Our products</h2>
      <div className="cards__container">
        {ProductList.map(({ id, title, description, link, bgColor }) => (
          <Card
            key={id}
            title={title}
            description={description}
            link={link}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
