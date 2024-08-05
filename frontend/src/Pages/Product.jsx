import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
    const { allBooks } = useContext(ShopContext); // Ensure context name matches
    const { productId } = useParams();
    
    // Compare as strings to avoid conversion issues
    const product = allBooks.find((e) => e.id.toString() === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProducts product={product} />
        </div>
    );
};
