import axios from 'axios';
import { useState, useEffect } from "react";


export default function SellItem() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemUrl, setItemUrl] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCategory, setItemCategory] = useState('');
  const [itemAdded, setItemAdded] = useState(false);

  function handleNameChange(event) {
    event.preventDefault();
    setItemName(event.target.value)
  }

  function handleDescriptionChange(event) {
    event.preventDefault();
    setItemDescription(event.target.value);
  }

  function handleImgUrlChange(event) {
    event.preventDefault();
    setItemUrl(event.target.value);
  }

  function handleItemPriceChange(event) {
    event.preventDefault();
    setItemPrice(event.target.value);
  }

  function handleItemCategoryChange(event) {
    event.preventDefault();
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
    .post("https://nc-marketplace-sem-4.onrender.com/api/items", {item_name: itemName, description: itemDescription, img_url: itemUrl, price: itemPrice, category_name: itemCategory})
    .then((response) => {
      if (response) {
        setItemAdded(true);
      }
    })
  }

  if (itemAdded === true) {
    setItemAdded(false);
    alert("Item added");
  }

  return (
    <div>
      <h2>Fill form to sell your item</h2>
      <div id="wrapper"></div>
      <form onSubmit={handleSubmit} className="newitemform">
          <label htmlFor="itemName">Item's Name</label>
          <input type="text" id="itemName" required onChange={handleNameChange} />
          <label htmlFor="itemDescription">Item's Description</label>
          <input type="text" id="itemDescription" onChange={handleDescriptionChange} />
          <label htmlFor="imgUrl">Item's Picture</label>
          <input type="text" id="imgUrl" required onChange={handleImgUrlChange} />
          <label htmlFor="itemPrice">Price</label>
          <input type="text" id="itemPrice" required onChange={handleItemPriceChange}/>
          <label htmlFor="itemCategory">Category</label>
          <input type="text" id="itemCategory" onChange={handleItemCategoryChange} />
        <button type="submit" className="itemsubmitbutton" value="Submit">Submit</button>
      </form>
    </div>
  );
}
