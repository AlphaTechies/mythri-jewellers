import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchResult();
  }, [dispatch]);

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [trendingFilter, setTrendingFilter] = useState(false);
  const [offerFilter, setOfferFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // Number of products per page

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleTrendingChange = (e) => {
    setTrendingFilter(e.target.checked);
  };

  const handleOfferChange = (e) => {
    setOfferFilter(e.target.checked);
  };

  // Filtering the products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (categoryFilter !== "All" && product.category !== categoryFilter)
      return false;
    if (priceFilter !== "All" && product.price > parseInt(priceFilter, 10))
      return false;
    if (trendingFilter && !product.trending) return false;
    if (offerFilter && !product.offer) return false;
    return true;
  });

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  // Get the products for the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="bg-white p-8 shadow-md rounded-md pt-24">
      <div className="mb-6">
        <label htmlFor="categoryFilter" className="mr-2">
          Category:
        </label>
        <select
          id="categoryFilter"
          className="px-4 py-2 border rounded-md"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Necklace">Necklace</option>
          <option value="Bangles">Bangles</option>
          <option value="Rings">Rings</option>
          <option value="Watches">Watches</option>
          {/* Add more categories here */}
        </select>

        <label htmlFor="priceFilter" className="ml-4 mr-2">
          Price:
        </label>
        <select
          id="priceFilter"
          className="px-4 py-2 border rounded-md"
          value={priceFilter}
          onChange={handlePriceChange}
        >
          <option value="All">All</option>
          <option value="50">Less than 50</option>
          <option value="100">Less than 100</option>
          {/* Add more price options here */}
        </select>

        <label htmlFor="trendingFilter" className="ml-4 mr-2">
          Trending:
        </label>
        <input
          type="checkbox"
          id="trendingFilter"
          checked={trendingFilter}
          onChange={handleTrendingChange}
        />

        <label htmlFor="offerFilter" className="ml-4 mr-2">
          Offer:
        </label>
        <input
          type="checkbox"
          id="offerFilter"
          checked={offerFilter}
          onChange={handleOfferChange}
        />
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-secondary">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Trending</th>
            <th className="px-4 py-2">Offer</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td className="border text-center px-4 py-2">{product._id}</td>
              <td className="border text-center px-4 py-2">{product.name}</td>
              <td className="border text-center px-4 py-2">
                {product.category}
              </td>
              <td className="border text-center px-4 py-2">{product.price}</td>
              <td className="border text-center px-4 py-2">
                {product.trending ? "Yes" : "No"}
              </td>
              <td className="border text-center px-4 py-2">
                {product.offer ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="flex mt-4 justify-center"
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        activeClassName="text-primary"
        disabledClassName="text-gray-500 cursor-not-allowed"
        pageClassName="px-2 cursor-pointer"
        previousClassName="px-2 cursor-pointer"
        nextClassName="px-2 cursor-pointer"
        breakClassName="px-2"
      />
    </div>
  );
};

export default Dashboard;
