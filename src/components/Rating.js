const Rating = ({rating, totalReview}) => {
    let fullStart = Math.floor(rating);
    const remainingRate = rating % 1;
    let halfStar = 0;
    if(0.3 < remainingRate && remainingRate < 0.7) {
        halfStar = 1;
    } else if (remainingRate >= 0.7) {
        fullStart = fullStart + 1;
    };
    const emptyStars = 5 - fullStart - halfStar;

    return <div className="flex">
        {Array(fullStart).fill("").map((d, i) => <i className="bi bi-star-fill pe-1" style={{color: "#de7a21"}} key={i}></i>)}
        {halfStar ? <i className="bi bi-star-half pe-1" style={{color: "#de7a21"}}></i> :  ""}
        {Array(emptyStars).fill("").map((d, i) => <i className="bi bi-star pe-1" key={i}></i>)}
        <small>{totalReview ? (` (reviewed by ${totalReview} customers)`) : ""}</small>
    </div>
}

export default Rating;