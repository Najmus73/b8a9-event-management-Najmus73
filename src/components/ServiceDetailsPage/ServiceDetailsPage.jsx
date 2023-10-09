import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const ServiceDetailPage = ({ service }) => {
    const { details, image, title, bg, category, bg_image, price } = service;
    return (
        <div>
            <div className="w-full h-[450px] mt-[-100px]" style={{ backgroundImage: `url(${bg_image})`, backgroundRepeat: 'no-repeat', backgroundSize: '1920px 600px' }}>
                <div className="w-[1350px] mx-auto">
                    <h1 className="text-5xl font-bold text-white pt-[210px] pb-5">Event Details</h1>
                    <div className='flex gap-4 items-center pl-1.5'>
                        <Link to='/'><h1 className="text-white text-2xl font-bold">Home</h1></Link>
                        <BiRightArrow className='mt-[4px] text-pink-500'></BiRightArrow>
                        <h1 className='text-lg mt-[4px] text-pink-500 font-bold'>Event Details</h1></div>
                </div>
                <div className="h-[441px] bg-black mt-[-300px] bg-opacity-60">

                </div>
            </div>


              <div className='pb-[200px]'>
            <div className='w-[1350px] h-[600px] mx-auto pt-[70px] flex justify-between'>
                <div>
                    <img className='h-[400px] w-[950px] rounded-lg' src={bg_image}></img>
                    <div><h1 className='text-2xl font-bold text-pink-600 pt-[80px] text-center pb-[10px]'>{title}</h1></div>
                    <div><p>{details}</p></div>
                </div>
                <div>
                    <div className="hero">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                                <form className="card-body rounded-lg w-[350px]" style={{backgroundColor: '#E3D7E2'}}>
                                      <div>
                                         <button className='btn bg-pink-600 text-white w-full'>Book Now Just For $ {price}</button>
                                      </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full name</span>
                                        </label>
                                        <input type="name" placeholder="Your Full Name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Your Email Address" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone No.</span>
                                        </label>
                                        <input type="text" placeholder="Your Phone No." className="input input-bordered" required />                                 
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-pink-600 text-white">Submit Now For Booking</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>

               

            </div>

        </div>

    )
}
export default ServiceDetailPage;

