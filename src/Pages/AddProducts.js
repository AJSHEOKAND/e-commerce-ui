import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    productName: "",
    productDesc: "",
    productPrice: "",
    productImage: "",
    productCategory: "",
    productQuantity: "",
    productAvailable: "",
  });
  const [toggle, setToggle] = useState(false);

  const handleInput = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Use the File object for file input
      setProduct((prev) => ({
        ...prev,
        [name]: e.target.files[0] || null,
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const getCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8001/api/categories/allcategories"
      );
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pname", product.productName);
    formData.append("desc", product.productDesc);
    formData.append("price", product.productPrice);
    formData.append("categoryId", product.productCategory);
    formData.append("quantity", product.productQuantity);
    formData.append("image", product.productImage);

    try {
      const response = await axios.post(
        "http://localhost:8001/api/products/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setProduct({
      productName: "",
      productCategory: "",
      productQuantity: "",
      productDesc: "",
      productPrice: "",
      productImage: "",
    });
  };
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:h-screen">
      <div className="p-5 w-full bg-gray-100 flex flex-col md:w-1/4 shadow-2xl gap-6">
        <div className=" flex justify-between md:justify-start items-center">
          <div className="font-bold text-3xl text-customColor">Bandage</div>
          {toggle ? (
            <RxCross1
              className="block md:hidden text-3xl"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          ) : (
            <FaBars
              className="block md:hidden text-3xl"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
        </div>
        <div
          className={`flex-col absolute w-full p-2 bg-gray-100 z-10 top-16 left-0 transition md:w-1/4 gap-3 ${
            toggle ? "flex" : "hidden"
          } md:flex`}
        >
          <h3 className="text-gray-400">Menu</h3>
          <Link className="flex items-center text-lg hover:text-red-600" to="/">
            <MdDashboard />
            Dashboard
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-3/4">
        <div className="md:flex p-5 justify-between hidden">
          <div className="flex gap-2 rounded-2xl items-center p-2 bg-gray-200">
            <FaMagnifyingGlass />
            <input
              onChange={handleInput}
              placeholder="Search"
              className="bg-gray-200 rounded-tr-2xl rounded-br-2xl outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="bg-gray-200 h-full p-5 gap-3 flex flex-col">
          <h1 className="font-extrabold text-3xl">Add Product</h1>
          <form
            action=""
            className="flex flex-col bg-white w-full p-5 rounded-2xl"
            encType="multipart/form-data" // Add enctype attribute
          >
            <table className="border-separate border-spacing-4">
              <tbody>
                <tr>
                  <td className="grid lg:table-cell">Product Name</td>
                  <td className="grid lg:table-cell">
                    <input
                      value={product.productName}
                      onChange={handleInput}
                      name="productName"
                      className="pl-2 border border-gray-400 rounded-lg"
                      type="text"
                    />
                  </td>
                  <td className="grid lg:table-cell">Product Category</td>
                  <td className="grid lg:table-cell">
                    <select
                      name="productCategory"
                      value={product.productCategory}
                      onChange={handleInput}
                      className="border border-gray-400 rounded-lg"
                    >
                      <option value="">--Select--</option>
                      {categories.map((item) => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="grid lg:table-cell">Product Description</td>
                  <td className="grid lg:table-cell">
                    <textarea
                      value={product.productDesc}
                      className="pl-2 resize-none border border-gray-400 rounded-lg "
                      name="productDesc"
                      onChange={handleInput}
                      cols="20"
                      rows="2"
                    ></textarea>
                  </td>
                  <td className="grid lg:table-cell">Quantity</td>
                  <td className="grid lg:table-cell">
                    <input
                      value={product.productQuantity}
                      onChange={handleInput}
                      name="productQuantity"
                      className="pl-2 border border-gray-400 rounded-lg"
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="grid lg:table-cell">Product Price</td>
                  <td className="grid lg:table-cell">
                    <input
                      value={product.productPrice}
                      onChange={handleInput}
                      className="pl-2 appearance-none border border-gray-400 rounded-lg"
                      type="number"
                      name="productPrice"
                      id=""
                    />
                  </td>
                </tr>
                <tr>
                  <td className="grid lg:table-cell">Available</td>
                  <td className="grid lg:table-cell">
                    <div className="flex gap-1">
                      <div className="flex gap-1">
                        <input
                          type="radio"
                          onChange={handleInput}
                          value="Yes"
                          name="productAvailable"
                          id=""
                        />
                        <label htmlFor="">Yes</label>
                      </div>
                      <div className="flex gap-1">
                        <input
                          type="radio"
                          onChange={handleInput}
                          value="No"
                          name="productAvailable"
                          id=""
                        />
                        <label htmlFor="">No</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="grid lg:table-cell">Product Images</td>
                  <td className="grid lg:table-cell">
                    <input
                      onChange={handleInput}
                      type="file"
                      
                     name="productImage"
                      
                      
                      id=""
                    />
                  </td>
                </tr>
                <tr>
                  <td className="grid lg:table-cell"></td>
                  <td className="grid lg:table-cell">
                    <button
                      onClick={handleSubmit}
                      className="bg-gray-500 text-white p-2 rounded-xl"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
