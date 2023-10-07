import { Link } from "react-router-dom";

const EventService = ({ data }) => {
    const { id, image, title,bg } = data;
    return (
        <div>
        <div className="card card-compact w-[420px] bg-base-100 shadow-xl mb-[30px] mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body rounded-b-lg"style={{backgroundColor: bg}}>
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to={`/details/${id}`}><button className="btn btn-primary w-full">Book Now</button></Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default EventService;