import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const EventService = ({ data }) => {
    const { id, image, title,bg,short_details } = data;

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div data-aos="fade-left">
        <div className="card card-compact w-[380px] h-[450px] bg-base-100 shadow-xl mb-[30px] mx-auto text-white">
            <figure><img src={image} /></figure>
            <div className="card-body rounded-b-lg"style={{backgroundColor: bg}}>
                <h2 className="card-title">{title}</h2>
                <p>{short_details}</p>
                <div>
                    <Link to={`/details/${id}`}><button className="btn w-full text-white" style={{backgroundColor:'#C42A72'}}>Book Now</button></Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default EventService;