import { useEffect, useState } from "react";

function ItemHolder(props) {
  const { category, setCategory } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://nc-marketplace-sem-4.onrender.com/api/items/?category_name=${category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result.items);
      });
  }, [category]);

  function handleClick(event) {
    event.preventDefault();
    if (event.target.innerText === "ELECTRONICS") {
      setCategory("Electronics");
    }
    if (event.target.innerText === "HOUSEHOLD") {
      setCategory("Household");
    }
    if (event.target.innerText === "CLOTHING") {
      setCategory("Clothing");
    }
  }

  return (
    <section key="items">
      <button key="button1" onClick={handleClick}>
        ELECTRONICS
      </button>
      <button key="button2" onClick={handleClick}>
        HOUSEHOLD
      </button>
      <button key="button3" onClick={handleClick}>
        CLOTHING
      </button>
      {items.map((item) => {
        return (
          <div key={item.item_id}>
            <h2 key="item-name">{item.item_name}</h2>
            <h3 key="item-description">{item.description}</h3>
            <h4 key="item-price">{item.price}</h4>
            <img
              key="image"
              src={item.img_url}
              alt="image describing item for sale"
            />
          </div>
        );
      })}
    </section>
  );
}

export default ItemHolder;
