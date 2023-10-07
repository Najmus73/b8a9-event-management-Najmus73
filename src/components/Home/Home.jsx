import { useLoaderData } from "react-router-dom";
import EventService from "../EventService/EventService";
import '../Styles/Style.css'

const Home = () => {

    const EventData = useLoaderData();

    return (
        <div>
            <div>
                <div className="w-[1350px] h-[510px] mx-auto" id="slide_bg">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Hq3jZ25/birthday.jpg" className="w-full h-[510px] rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/1QBRZ3T/luxurious.jpg" className="w-full h-[510px] rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/QfZchxg/people.jpg" className="w-full h-[510px] rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/CtzdH1V/baby.jpg" className="w-full h-[510px] rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1350] h-[510px] bg-black mt-[-600px] bg-opacity-50">

                </div>

            </div>

            <div className="w-full absolute">
                <div className=" w-[1000px] h-[120px] rounded-lg mt-[-50px] mx-auto" id="time_bg">
                    <div className="flex gap-10 justify-center pt-[30px] text-white">
                        <div>
                            <span className="countdown font-mono text-[45px] font-[1000]">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-[45px] font-[1000]">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="countdown font-mono text-[45px] font-[1000]">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className="countdown font-mono text-[45px] font-[1000]">
                                <span style={{ "--value": 37 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>

            <div id="service_bg">
                <div className="w-[1350px] mx-auto pt-[120px]">
                    <h1 className="text-center text-3xl">Our Event Management Services</h1>

                    <div className="grid grid-cols-3 pt-16">
                        {
                            EventData.map(data => <EventService key={data.id} data={data}></EventService>)
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Home;