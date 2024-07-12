import "./Menu.css";

const MenuData = [
  {
    name: "Classic Margherita Pizza",
    price: "10$",
    description:
      "A classic Margherita pizza is a timeless Italian creation, renowned for its simplicity and deliciousness.",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  },
  {
    name: "Vegetarian Stir-Fry",
    price: "12$",
    description:
      "A vegetarian stir-fry is a vibrant and flavorful dish that typically includes a variety of colorful vegetables quickly cooked in a wok or skillet.",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
  },
  {
    name: "Chocolate Chip Cookie",
    price: "5$",
    description:
      "A chocolate chip cookie is a beloved classic in the realm of desserts, known for its soft, chewy texture and bursts of chocolate in every bite.",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
  },
  {
    name: "Quinoa Salad with Avocado",
    price: "13$",
    description:
      "A quinoa salad with avocado is a fresh and nutritious dish that combines the wholesome goodness of quinoa with creamy avocado and a medley of vibrant vegetables and herbs.",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
  },
];

const MenuCard = ({ props }: any) => {
  return (
    <div className="menu_item">
      <div
        className="menu_item_image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="menu_item_detail">
        <div className="menu_item_name_price">
          <h3 className="menu_item_name">{props.name}</h3>
          <p className="menu_item_price">{props.price}</p>
        </div>
        <p className="menu_item_description">{props.description}</p>
      </div>
    </div>
  );
};

export const Menu = () => {
  return (
    <div className="menu  app_container app_wrapper" id="Menu">
      <div className="menu_header">
        <h1 className="menu_title">Menu</h1>
      </div>
      <div className="menu_cards_box">
        <div className="menu_cards">
          {MenuData.map((item, index) => (
            <MenuCard props={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
