import ImageViewer from "../components/ImageViewer";
import Rating from "../components/Rating";

const ProductPage = () => {
    return (
        <div className="container d-flex">
           <ImageViewer />
            <div>
                <h4 className="pt-5">Calvin Klein CK One</h4>
                <Rating rating={4} />
            </div>
        </div>
    )
};

export default ProductPage;
