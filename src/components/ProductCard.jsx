import Rating from "./Rating";

const ProductCard = ({product}) => {
    return <>
        <div className="container card d-flex flex-row p-0 my-2">
            <div className="bg-secondary-subtle col-3 d-grid" style={{placeContent: "center"}}>
                <img
                    src={product?.thumbnail}
                    className="img-fluid rounded-top" style={{ height: '150px', width: "fit-content" }}
                    alt=""
                />
            </div>
            <div className="d-flex flex-column justify-content-evenly p-4 col-9">
                <h6 className="fw-bolder"> {product.title}</h6>
                <Rating rating={product.rating}/>
                <small style={{fontSize: '0.7rem'}}>{product.description}</small>
                <div className="fw-bolder">${product.price}</div>
                <button type="button" class="btn btn-warning btn-sm mt-4" style={{width: '120px'}}>Add to cart</button>
            </div>
        </div>

    </>;
}

export default ProductCard;