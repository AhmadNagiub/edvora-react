function Card(){
    return(

        <div className="card">
        <div className="contain">
            <div className="image">
                <img src="https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png" alt=""/>
            </div>
            <div className="productDetails">
                <h3>Product Name</h3>
                <h4>Brand Name</h4>
                <span>$ 29.99</span>
            </div>
        </div>
        <div className="info">
            <div className="location">Location</div>
            <div className="date">Date:10-12-2021</div>
        </div>
        <div className="description">Its a good product</div>
    </div>
    )
}

export default Card