import React from "react";
import { useSelector } from "react-redux";
import { Header } from ".";

const Home = () => {
  const { products } = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <Header />
      <div classaName="container">
        <div className="row">
          {products.map((value) => (
            //console.log("value.image ", value.image),
            <div className="col-3" key={value.id}>
              <div className="product">
                <div className="product_img">
                  <img src={value.image} alt="image name" />
                </div>
                <div className="product_name">{value.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product_price">{value.price}</div>
                  </div>
                  <div className="col-6">
                    <div className="disc_price">{value.discountPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
