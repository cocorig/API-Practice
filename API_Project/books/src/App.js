import React, { useState, useEffect } from "react";
import axios from "axios";
import Bestseller from "./Bestseller";
import ItemNewAll from "./ItemNewAll";
import DetailBookInfo from "./DetailBookInfo";
function ProductList() {
  return (
    <>
      <Bestseller />
      <ItemNewAll />
      {/* <DetailBookInfo /> */}
    </>
  );
}

export default ProductList;
