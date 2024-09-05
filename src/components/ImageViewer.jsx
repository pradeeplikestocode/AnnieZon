import { useState } from "react";

const ImageViewer = ({images}) => {
    const [current, setCurrent] = useState(images[0]);

    return (
        <div style={{ minWidth: '50vh', width: '150px', textAlign: "center" }}>
            <img
                src={current}
                className="img-fluid"
                alt=""
                style={{ height: '40vh', width: "auto" }}
            />
            <div className="mt-2 text-start">
                {
                    images.map((image, i) => (
                        <img key={i} style={{ height: "50px", width: "auto" }}
                            onClick={() => setCurrent(image)}
                            src={image}
                            className="img-fluid pe-2"
                            alt=""
                        />
                    ))
                }
            </div>
        </div>
    );

};

export default ImageViewer;