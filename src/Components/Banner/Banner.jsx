import bannerImg from '../../assets/Banner/competition-6612629_1920.jpg'
import trofee from '../../assets/Banner/trophy-3472245_1920.jpg'

const Banner = () => {
    return (
        <div className='h-[90vh] w-full relative'>
            <div className='h-full w-full absolute top-0 bg-black bg-opacity-50'></div>
            <img className='h-full w-full object-cover' src={trofee} alt="" />
        </div>
    )
}

export default Banner