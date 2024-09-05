import { useParams } from "react-router-dom";
import Header from "../components/header";
import ImageViewer from "../components/ImageViewer";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";

const ProductPage = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    return (
        <>
            <Header />
            {product ? <div className="container d-flex">
                <ImageViewer images={product.images} />
                <div>
                    <h4 className="pt-5 mb-0">{product.title}</h4>
                    <small>Brand: {product.brand}</small>
                    <h6>{product.description}</h6>
                    <Rating rating={product.rating} totalReview={product.reviews.length} />
                    <h4><small className="text-danger">-{product.discountPercentage * 100}%</small> $ {product.price}</h4>
                    <button type="button" className="btn btn-warning btn-sm mt-4" style={{width: '120px'}}>Add to cart</button>
                    <hr />
                    <span className="badge text-bg-success my-2">{product.availabilityStatus}</span>
                    <ul className="h6">
                        <li>Return Policy: {product.returnPolicy}</li>
                        <li>Shipping: {product.shippingInformation}</li>
                        <li>Warranty: {product.warrantyInformation}</li>
                        <li>Weight: {product.weight} LB</li>
                    </ul>
                    <hr />
                    <h1>Reviews {product.reviews.length}</h1>
                    {product.reviews.map(review => (
                        <div key={review.reviewerEmail} className="py-3">
                            <div>{review.reviewerName}</div>
                            <Rating rating={review?.rating || 0} />
                            <div>{review.reviewerEmail}</div>
                            <div>{review.comment}</div>
                            <div className="h6 fw-bold">Reviewed on: {new Date(review.date).toDateString()}  {new Date(review.date).toLocaleTimeString()}</div>
                        </div>
                    ))}
                </div>
            </div> : (
                <div className="position-absolute top-50 start-50">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>)}
        </>
    )
};

export default ProductPage;
