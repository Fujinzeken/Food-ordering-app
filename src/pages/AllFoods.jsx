import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fakeData/product";
import ProductCard from "../components/Ul/product-card/ProductCard";
import "../styles/allFoods.css";
import ReactPaginate from "react-paginate";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNum, setPageNum] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return null;
  });
  const productPerPage = 8;
  const visitedPage = pageNum * productPerPage;

  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget">
                <input
                  type="text"
                  placeholder="I'm looking for... "
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPageNum(0);
                  }}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Sort by..</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6">
                <ProductCard key={item.id} item={item} className="mb-4" />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
