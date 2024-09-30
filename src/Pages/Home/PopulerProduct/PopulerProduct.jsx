import { useEffect, useState } from "react";
import PoProductCard from "./PoProductCard";

const PopulerProduct = () => {
  const [populerProducts, setPopulerProducts] = useState([]);
  useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setPopulerProducts(data))
  }, [])


  return (
    <div className="py-16">
      <div className="py-8">
        <h3 className="text-2xl font-bold text-[#ff2200] text-center py-4">
          Populer Products
        </h3>
        <h1 className="text-4xl font-bold text-center text-black py-2">Browse Our Products</h1>
        <p className="text-xl text-center mt-2">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br></br>
          words which dont look even slightly believable.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
         {
          populerProducts.map(populerProduct => <PoProductCard 
          key={populerProduct.id}
          populerProduct={populerProduct}
          >
          </PoProductCard>)
         }
      </div>
    </div>
  );
};

export default PopulerProduct;
