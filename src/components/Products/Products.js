import React from "react";
import Products from "./Product-card";
import { useState } from "react";



const Shop_products = ({ products }) => {

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products?.data?.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handlePrevious = () => {
        handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        handlePageChange(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <>
            <div className="shop-products">
                <div className="row">
                    {products?.data?.slice(startIndex, endIndex).map(item => (
                        <Products key={item.id} id={item.id} data={item.attributes} />
                    ))}
                </div>
                <div>
                    <ul className="pagination">
                        <li className="page-li">
                        <button onClick={handlePrevious} disabled={currentPage === 1} className="prev-btn"><i className="fa-solid fa-chevron-left"></i></button>
                        </li>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className="page-btn">
                                <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                            </li>
                        ))}

                        <li className="page-li">
                        <button onClick={handleNext} disabled={currentPage === totalPages} className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Shop_products;