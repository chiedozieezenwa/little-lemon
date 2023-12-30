import lemondessert from "./icons_assets/lemondessert.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";
import greeksalad from "./icons_assets/greeksalad.jpg";

function Main() {
  return (
    <div className="main">
      <h1>This Weeks Specials</h1>
      <div className="image">
        <figure>
          <img src={greeksalad} alt="" />
          <figcaption>
            <p>Greek Salad</p>
            <p>$12.99</p>
          </figcaption>
          <p>
            The famous greek Salad of crispy lettuce, peppers, olives and our
            chicago style cheese.garnished with crunchy garlic.
          </p>
          <h5>Order a delivery</h5>
        </figure>
        <figure>
          <img src={bruchetta} alt="" />
          <figcaption>
            <p>Bruchetta</p>
            <p>$5.99</p>
          </figcaption>
          <p>
            Our bruschetta is made from grilled bread that has been garnished
            with crunchy garlic.
          </p>
          <h5>Order a delivery</h5>
        </figure>
        <figure>
          <img src={lemondessert} alt="" />
          <figcaption>
            <p>Lemmon Dessert</p>
            <p>$5.00</p>
          </figcaption>
          <p>This comes straight from grandma's recipe book.</p>
          <h5>Order a delivery</h5>
        </figure>
      </div>
    </div>
  );
}

export default Main;
