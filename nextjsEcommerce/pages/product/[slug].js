import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";

function ProductScreen() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductScreen;

/**
 * Creating Params in Next
 * insert the param name in a square bracket and file name
 */
