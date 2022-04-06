import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutation";
import idbPromise from "../utils/promise";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {}

    saveOrder();
    if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
      
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the homepage</h2>
      </Jumbotron>
    </div>
  );
}
