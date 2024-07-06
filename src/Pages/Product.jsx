import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';

export const Product = () => {
    const { all_books } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_books.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
        </div>
    );
}
