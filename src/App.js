import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/ProductComparison">
        <MDBBtn className="ms-3 mt-3">Product Comparison</MDBBtn>
      </Link>
      <Link to="/EcommerceCategoryProduct">
        <MDBBtn className="ms-3 mt-3">Ecommerce Category Product</MDBBtn>
      </Link>
      <Link to="/EcommerceProductListing">
        <MDBBtn className="ms-3 mt-3">Ecommerce Product Listing</MDBBtn>
      </Link>
      <Link to="/QuickBuy">
        <MDBBtn className="ms-3 mt-3">Quick Buy</MDBBtn>
      </Link>
      <Link to="/BestsellersListing">
        <MDBBtn className="ms-3 mt-3">Bestsellers Listing</MDBBtn>
      </Link>
      <Link to="/ProductCards">
        <MDBBtn className="ms-3 mt-3">Product Cards</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
