import Card from "../Components/Card";
import {chefRecommend, dishes, popular} from "../../constants.js";

const Menu = () => {
  return (
    <section id="Menu">
      <h1>Menu</h1>
      <div className="container">
        <div className="cards">
          <h3>Popular</h3>
          <div className="dishes">
            {popular.map((dish, i) => {
              const { title, description, price, rating } = dish;
              return (
                <Card
                  className="card"
                  key={i}
                  title={title}
                  description={description}
                  price={price}
                  rating={rating}
                />
              );
            })}
          </div>
        </div>
        <div className="cards">
          <h3>Recommended</h3>
          <div className="dishes">
            {dishes.map((dish, i) => {
              const { title, description, price } = dish;
              return (
                <Card
                  className="card"
                  key={i}
                  title={title}
                  description={description}
                  price={price}
                />
              );
            })}
          </div>
        </div>
        <div className="cards">
          <h3>Chef's Choice</h3>
          <div className="dishes">
            {chefRecommend.map((dish, i) => {
              const { title, description, price } = dish;
              return (
                <Card
                  className="card"
                  key={i}
                  title={title}
                  description={description}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
