import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'
import React, { useState } from 'react';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const AddProduct = async () => {
        if (!image) {
            alert("Please upload an image");
            return;
        }

        let formData = new FormData();
        formData.append('product', image);  // Ensure the field name matches 'product' in backend

        try {
            const uploadResponse = await fetch('http://localhost:4000/api/files/upload', {
                method: 'POST',
                body: formData,
            });

            const responseData = await uploadResponse.json();

            if (responseData.success) {
                productDetails.image = responseData.image_url;
                console.log(productDetails);

                const addResponse = await fetch('http://localhost:4000/api/books/addbook', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(productDetails),
                });

                const addData = await addResponse.json();

                if (addData.success) {
                    alert('Product Added');
                } else {
                    alert('Failed to add product');
                }
            } else {
                alert('Image upload failed');
            }
        } catch (error) {
            console.error("Error:", error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input type="text" name="name" placeholder="Type here" onChange={changeHandler} />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name="new_price" value={productDetails.new_price} onChange={changeHandler} placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select name="category" value={productDetails.category} onChange={changeHandler} className="add-product-selector">
                    <option value="women">Fiction</option>
                    <option value="men">Magazines</option>
                    <option value="kid">Biography</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input" className="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumbnail-img" />
                </label>
                <input type="file" onChange={imageHandler} name="image" id="file-input" hidden />
            </div>
            <button onClick={AddProduct} className="addproduct-btn">ADD</button>
        </div>
    );
};

export default AddProduct;
