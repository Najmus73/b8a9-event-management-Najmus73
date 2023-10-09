import { Link, useLoaderData } from "react-router-dom";
import EventService from "../EventService/EventService";
import '../Styles/Style.css'
import Marquee from "react-fast-marquee";
import { FcRating } from 'react-icons/fc';  
import { BsCalendarPlusFill } from 'react-icons/bs';  
import { ImCalendar } from 'react-icons/im';  
import { IoIosPeople } from 'react-icons/io';  
import { useEffect, useRef, useState } from "react";


const Home = () => {
const [timerDays, setTimerDays] = useState('00')
const [timerHour, setTimerHour] = useState('00')
const [timerMinutes, setTimerMinutes] = useState('00')
const [timerSeconds, setTimerSeconds] = useState('00')

let interval =useRef();
const startTimer = () =>{
    const countdownDate = new Date('October 18, 2023 00:00:00').getTime();

    interval =setInterval(()=>{
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days =Math.floor(distance / (1000* 60* 60* 24));
        const hour =Math.floor((distance % (1000* 60* 60* 24) / (1000*60*60)));
        const minutes =Math.floor((distance % (1000* 60* 60)) /(1000*60));
        const second =Math.floor((distance % (1000* 60))/ 1000);

        if(distance<0){
              clearInterval(interval.current);
        }else{
            setTimerDays(days);
            setTimerHour(hour);
            setTimerMinutes(minutes);
            setTimerSeconds(second);
        }
    }, 1000);
}

useEffect(()=>{
    startTimer();
    return ()=>{
        clearInterval(interval.current);
    }
})


    const EventData = useLoaderData();

    return (
        <div className=""style={{ backgroundColor: '#E3D7E2' }}>

            <div className="h-[30px] flex bg-pink-200">
                <button className="border border-red-400  px-[10px] py-[2px] bg-pink-400 text-red-600 font-bold rounded-md">Alert</button>
                <Marquee pauseOnHover={true} speed={120}>
                    <h1 className="font-bold text-red-600">Order Now !!! Only 7 days left for 35 % offer price on any of our services  </h1>
                </Marquee>
            </div>

            <div>
                <div className="carousel w-full h-[510px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/1QBRZ3T/luxurious.jpg" className="w-full h-[510px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/CtzdH1V/baby.jpg" className="w-full h-[510px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/3WWPgFx/birthday.jpg" className="w-full h-[510px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/6ZT67wg/senior-people.jpg" className="w-full h-[510px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full absolute">
                <div className=" w-[1000px] h-[120px] rounded-lg mt-[-60px] mx-auto" id="time_bg">
                    <div className="flex gap-10 justify-center pt-[20px] text-white font-bold">
                        <div className="flex flex-col items-center">
                             <p className="text-4xl">{timerDays}</p>
                             <p><small>Days</small></p>
                        </div>
                        <span className="text-4xl">:</span>
                        <div  className="flex flex-col items-center">
                             <p className="text-4xl">{timerHour}</p>
                             <p><small>Hour</small></p>
                        </div>
                        <span className="text-4xl">:</span>
                        <div  className="flex flex-col items-center">
                              <p className="text-4xl">{timerMinutes}</p>
                             <p><small>Minutes</small></p>
                        </div >
                        <span className="text-4xl">:</span>
                        <div  className="flex flex-col items-center">
                             <p className="text-4xl">{timerSeconds}</p>
                             <p><small>Seconds</small></p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: '#E3D7E2' }} className="w-full pb-[60px]">
                <div className="mt-[-6px] flex w-[1650px] mx-auto">

                    <div className="w-[1200px] mx-auto pt-[120px]" >
                        <h1 className="text-center text-3xl text-blue-400 font-bold">Our Event Management Services</h1>

                        <div className="grid grid-cols-3 pt-16">
                            {
                                EventData.map(data => <EventService key={data.id} data={data}></EventService>)
                            }
                        </div>

                    </div>

                    <div className="w-[380px] pt-[220px] ">
                        <img className="h-[930px] rounded-lg" src="https://i.ibb.co/VJqT991/sale-Offer.png"></img>
                        <div className="mt-[-150px] pl-[55px]"><Link to={`/details/1`}><button className="btn bg-white text-pink-600 font-bold text-2xl px-[60px]">Book Now</button></Link></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[300px]" id="stats">
                <div className="flex justify-between px-[310px] pt-[75px]">
                    <div className="flex flex-col text-center gap-1">
                         <div className="flex justify-center text-5xl"><FcRating className="text-white"></FcRating></div>
                         <div><h1 className="text-white text-6xl font-bold">150+</h1></div>
                         <div><h1 className="text-white text-4xl font-bold">Best Rating</h1></div>
                    </div>

                    <div className="flex flex-col text-center gap-1">
                           <div className="flex justify-center text-5xl"><BsCalendarPlusFill className="text-white"></BsCalendarPlusFill></div>
                           <div><h1 className="text-white text-6xl font-bold">600+</h1></div>
                           <div><h1 className="text-white text-4xl font-bold">Ideal Event</h1></div>
                    </div>

                    <div className="flex flex-col text-center gap-1">
                           <div className="flex justify-center text-5xl"><ImCalendar className="text-white"></ImCalendar></div>
                           <div><h1 className="text-white text-6xl font-bold">200+</h1></div>
                           <div><h1 className="text-white text-4xl font-bold">New Schedule</h1></div>
                    </div>

                    <div className="flex flex-col text-center gap-1">
                           <div className="flex justify-center text-5xl"><IoIosPeople className="text-white"></IoIosPeople></div>
                           <div><h1 className="text-white text-6xl font-bold">250+</h1></div>
                           <div><h1 className="text-white text-4xl font-bold">Participants</h1></div>
                    </div>
                </div>
                <div className="h-[300px] bg-pink-900 mt-[-231px] bg-opacity-70">

                </div>
            </div>

            <div className="flex w-[1350px] mx-auto gap-[350px]">
            <div className="pt-[50px]"> 
            <h1 className="text-2xl font-bold pb-[10px] text-blue-400">Get Us FeedBack</h1>
            <div className="flex gap-5 pb-6" > 
                <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Name"  style={{backgroundColor:"#F1F1F1"}} type="text" />
                <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Phone"  style={{backgroundColor:"#F1F1F1"}} type="text" />
            </div>
            <div className="flex gap-5 pb-6">
                <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Email"  style={{backgroundColor:"#F1F1F1"}} type="text" />
                <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Subject"  style={{backgroundColor:"#F1F1F1"}} type="text" />
            </div>

            <div className="pb-[20px]">
            <input className="pl-[10px] py-[60px] px-[412px] rounded-md" placeholder="Message"  style={{backgroundColor:"#F1F1F1"}} type="text" />
            </div>
            <button className="btn btn-secondary text-white">Submit Now</button>

            </div>

            <div className="w-[380px]">
                        <img className="h-[650px] rounded-lg" src="https://i.ibb.co/720nJ0n/Wedding.png"></img>
                    </div>

            </div>

        </div>
    )
}
export default Home;