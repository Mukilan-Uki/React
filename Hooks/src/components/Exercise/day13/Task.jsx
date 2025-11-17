import img from '../../assets/kingdom.jpeg'

export default function Task(){
    const products=[
        {product:"Smartphone X", subTitle:"Latest generation smartphone with AI camera and stunning display", price:999, img:{img}},
        {product:"Laptop Pro", subTitle:"Powerful and lightweight laptop for professionals on the go", price:1499, img:{img}},
        {product:"Smartwatch 5", subTitle:"Track your fitness and stay connected with this sleek smart watch", price:299, img:{img}},
        {product:"Headphones Z", subTitle:"Immersive sound quality with noise-cancelling technology", price:199, img:{img}}
    ]

    return(
        <>
        <div className="all">
            <div className="top">
                <div className="logo">ElectroHub</div>
                <div className="nav text-end">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><button className='btn btn-primary'>Shop Now</button></li>
                    </ul>
                </div>
            </div>
            <div className="middle1">
                <img src={img} alt="image" className='img1'/>
                <div className='contant text-light text-center'>
                    <h1>Discover the future of tech</h1>
                    <p>Explore our curated selection of the latest and greatest electronic gadgets, from smartphones to smart home devices.</p>
                    <button className='btn btn-primary'>Explore Products</button>
                </div>
            </div>
            <div className='middle2'>
                <h2>Featured Products</h2>
                <div className='row'>
                    {products.map((item)=>(
                        <>
                        <div className='card col m-3'>
                            <img src={img} className='productImg' alt="" />
                            <h4>{item.product}</h4>
                            <p className='text-muted'>{item.subTitle}</p>
                            <h4><b>${item.price}</b></h4>
                            <button className='btn btn-warning'>Buy Now</button>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}