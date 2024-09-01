const Rating = ({rating}) => {
    const rate = Math.floor(rating);
    const remainingRate = rating % 1;
    const emptyStars = 5 - rate - 1;

    return <div className="flex">
        {Array(rate).fill("").map((d, i) => <i class="bi bi-star-fill pe-1" style={{color: "#de7a21"}} key={i}></i>)}
        {remainingRate > 0.49 ? <i class="bi bi-star-half pe-1" style={{color: "#de7a21"}}></i> : <i class="bi bi-star pe-1"></i>}
        {Array(emptyStars).fill("").map((d, i) => <i class="bi bi-star pe-1" key={i}></i>)}
    </div>
}

export default Rating;