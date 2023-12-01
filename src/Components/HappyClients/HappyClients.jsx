/* eslint-disable react/no-unescaped-entities */
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { ImHappy } from "react-icons/im"

import client1 from '../../assets/clients/client1-removebg-preview.png'
import client2 from '../../assets/clients/client2-removebg-preview.png'
import client3 from '../../assets/clients/client3-removebg-preview.png'
import client4 from '../../assets/clients/client4-removebg-preview.png'
import client5 from '../../assets/clients/client5-removebg-preview.png'
import client6 from '../../assets/clients/client6.png'

const HappyClients = () => {
    const clients = [
        { name: "John Smith", img: client1, comment: "Satisfied with their services and quick response time." },
        { name: "Sarah Johnson", img: client2, comment: "A reliable partner for all our business needs. Highly recommended." },
        { name: "Michael Davis", img: client3, comment: "Exceptional customer service and attention to detail." },
        { name: "Emily Wilson", img: client4, comment: "Always impressed with the quality of their products." },
        { name: "David Miller", img: client5, comment: "Professionalism and expertise shine through in every interaction." },
        { name: "Olivia Clark", img: client6, comment: "Delivers results beyond expectations. A great addition to our team." }
    ]
    return (
        <div className="overflow-hidden">

            <div className={`md:ml-16 justify-center md:justify-normal mt-10 flex items-center gap-2`}>
                <ImHappy className='text-xl' />
                <h1 className='text-lg md:text-xl font-semibold'>Our happy client's say...</h1>
                <BsFillArrowRightCircleFill className='text-xl' />
            </div>
            <div className={`px-2 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 $`} >
                {
                    clients?.map((client, index) => <div data-aos="flip-up" key={index} className={`shadow-md p-5 rounded-md cursor-pointer h-full flex flex-col items-center justify-center transition-all duration-500} hover:scale-105 `}>
                        <div className="flex items-center">
                            <img src={client?.img} className="w-1/4" alt="" />
                            <h5 className="font-bold">{client?.name}</h5>
                        </div>
                        <p>{client?.comment}</p>
                    </div>)
                }
            </div>
        </div >
    )
}

export default HappyClients