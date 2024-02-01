import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import ItemHolder from "./Components/ItemHolder";
import { Routes, Route } from "react-router-dom";
import SellItem from "./Components/SellItem";

function App() {
  const [category, setCategory] = useState("");
  const [isSelling, setIsSelling] = useState(false);

  return (
    <>
      <main>
        <Header />

        <Routes>
          <Route
            path=""
            element={
              <>
                <a key="sell-item-link" href="http://localhost:5173/sellitem">
                  <button key="sell-item button">SELL YOUR ITEM</button>
                </a>

                <ItemHolder category={category} setCategory={setCategory} />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/sellitem" element={<SellItem />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

//https://nc-marketplace-sem-4.onrender.com/api/items/?category_name=Electronics
