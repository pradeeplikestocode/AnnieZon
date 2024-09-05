import { useState } from "react";

const ImageViewer = () => {

    const images = ["https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png","https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png","https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"];

    const [current, setCurrent] = useState(images[0]);

    return (
        <div style={{minWidth: '50vh', width: '150px'}}>
            <img
                src={current}
                class="img-fluid"
                alt=""
                style={{ height: '40vh', width: "auto" }}
            />
            <div className="mt-2">
               {
                images.map(image => (
                    <img style={{ height: "50px", width: "auto" }}
                    onClick={() => setCurrent(image)}
                    src={image}
                    class="img-fluid pe-2"
                    alt=""
                />
                ))
               }
               
            </div>
        </div>
    );

};

export default ImageViewer;