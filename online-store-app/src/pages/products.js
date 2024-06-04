import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState , useRef , useEffect } from "react";
import NavigationBar from "../components/nav";
import { Button , Card , Dropdown } from "react-bootstrap";
import TotalPrice from "../components/totalPrice.js";


// part 2 
// in products component display at least 10 products using
// https://react-bootstrap.github.io/docs/components/cards/
// make an array of objects 
// and render each product using .map()
// each product should have a responsive image, a title, a description, a price and a buy button
// should have 3 colour options, using dropdown https://react-bootstrap.github.io/docs/components/dropdowns/
// when the colour is selected the dropdown button should change to that colour

export default function Products() {
  const [totalPrice, setTotalPrice] = useState(
    () => parseFloat(localStorage.getItem("totalPrice")) || 0
  ); // tracking total price in local storage
  const [isPurchased, setIsPurchased] = useState(
    parseFloat(localStorage.getItem("totalPrice")) > 0
  ); // tracking purchases (prev = (false))

  // Effect to update localStorage when totalPrice changes
  useEffect(() => {
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [totalPrice]);

  // handler for cart
  const handleBuy = (price) => {
    setTotalPrice((prevPrice) => {
      const newTotal = prevPrice + price;
      localStorage.setItem('totalPrice', newTotal.toString());
      return newTotal;
    });
    setIsPurchased(true);
    localStorage.setItem('isPurchased', 'true');
  };

  // handler for cart
  // const handleBuy = (price) => {
  //   setTotalPrice((prevPrice) => prevPrice + price);
  //   setIsPurchased(true);
  // };

  // to mmake cart persistent on other pages
  // I couldn't figure out how to make this work
  // const navigate = useNavigate();
  // const location = useLocation();

  // creating a product array constructor
  function product(title, description, itemPrice, image) {
    this.title = title;
    this.description = description;
    this.itemPrice = itemPrice;
    this.currencyValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(itemPrice);
    this.image = image;
  }

  const productArray = [
    new product(
      "Nike Air Max",
      "The original air sole trainers!",
      100.0,
      "/images/nike-air-max.jpg"
    ),
    new product(
      "Vivo Barefoot",
      "Walk natural with bare foot shoes",
      120.0,
      "/images/vivobarefoot.jpeg"
    ),
    new product(
      "Converse All Star",
      "A classic timeless design",
      90.0,
      "/images/converse-allstar.jpg"
    ),
    new product(
      "Addidas Samba",
      "You can't beat this incredible design",
      130.0,
      "/images/addidas-samba.jpg"
    ),
    new product(
      "Air Jordan",
      "New verion of the original basketball trainer, as worn by MJ",
      170.0,
      "/images/air-jordan-1.jpeg"
    ),
    new product(
      "Reebok Pumps",
      "Strange 1990s trainers that pump up!",
      200.0,
      "/images/reebokpumps.webp"
    ),
    new product(
      "Nike Air Jordan 1 (1985)",
      "The original basketball trainer, as worn by MJ",
      42000.0,
      "/images/Jordan 1 OG White Black (1985)jpg.avif"
    ),
    new product(
      "Nike Air MAG BTTF",
      "Replica of the iconic self-lacing shoes in the movie Back to the Future II.",
      75000.0,
      "/images/nike-mag-2016-bttf.avif"
    ),
    new product(
      "Birkenstocks",
      "For those times when socks are just too much",
      110.0,
      "/images/birkenstocks.webp"
    ),
    new product(
      "Lacoste Sliders",
      "For those times when laces are just too much",
      30.0,
      "/images/lacoste-sliders.webp"
    ),
  ];

  console.table(productArray);

  // state to tracking color select
  const [colors, setColor] = useState(productArray.map(() => "Choose color"));

  // updating colours of products
  const updateColor = (newColor, index) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColor(newColors);
  };

  return (
    <div>
      <TotalPrice cartTotal={totalPrice} isPurchased={isPurchased} />
      <NavigationBar cartTotal={totalPrice} />
      <h1>Products</h1>
      <div className="card-flex">
        {productArray.map((product, index) => (
          <Card style={{ width: "30rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body className="card-items">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.currencyValue}</Card.Text>
              <Dropdown>
                <Dropdown.Toggle
                  // variant="success"
                  // id={`dropdown-basic-${index}`}
                  variant={
                    colors[index] === "Red"
                      ? "danger"
                      : colors[index] === "Blue"
                      ? "primary"
                      : colors[index] === "Green"
                      ? "success"
                      : "secondary"
                  }
                  id={`dropdown-basic-${index}`}
                >
                  {colors[index]}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => updateColor("Red", index)}>
                    Red
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => updateColor("Blue", index)}>
                    Blue
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => updateColor("Green", index)}>
                    Green
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="primary"
                style={{ margin: "10px" }}
                onClick={() => handleBuy(product.itemPrice)}
              >
                Buy now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
