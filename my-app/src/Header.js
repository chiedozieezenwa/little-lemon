import restauranfood from "./icons_assets/restauranfood.jpg";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We're a family-owned
          <br />
          Nigerian Restaurant
          <br />
          focused on traditional recipes <br />
          served with a modern twist
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="image">
        <img src={restauranfood} alt="Restaurant Food" />
      </div>
    </div>
  );
}

export default Header;
