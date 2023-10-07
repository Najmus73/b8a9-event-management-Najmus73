const ServiceDetailPage = ({service}) =>{
    const { id, image, title, bg ,category,bg_image } = service;
    return(
        
        <div className="w-full h-[600px] mt-[-100px]" style={{backgroundImage: `url(${bg_image})`,backgroundRepeat: 'no-repeat',backgroundSize: '1920px 600px'}}>
        <div className="w-[1350px] mx-auto">
            <h1 className="text-4xl font-bold text-white pt-[150px]">Event Details</h1>
        </div>
        <div className="w-[1280] h-[600px] bg-black mt-[-190px] bg-opacity-50">

        </div>
        </div>
        
    )
}
export default ServiceDetailPage;