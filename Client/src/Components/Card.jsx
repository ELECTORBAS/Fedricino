
const Card = (props) => {
    
    const {title, description, price, img, rating} = props;

  return (
    <div className="card-skeleton ">
        <div className="w-full h-28 border rounded-xl">
            <img src={img} alt="food pic" />
        </div>
        <div className="flex items-center mt-6 gap-1.5">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">{title} </h2>
                <p className="text-sm text-gray-200">{description} </p>
                <h4>{rating}/5 </h4>
            </div>
            <div>
                <p className="font-bold">${price} </p>
            </div>
        </div>
    </div>
  )
}

export default Card