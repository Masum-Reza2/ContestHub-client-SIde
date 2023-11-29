/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './topCreators.css'
import { useQuery } from '@tanstack/react-query';
import usePublicAxios from '../../Hooks/usePublicAxios';

const TopCreators = () => {
    const publicAxios = usePublicAxios()
    const { data: populerCreators = [], isPending } = useQuery({
        queryKey: ['populerCreators'],
        queryFn: async () => {
            const res = await publicAxios.get('/populerCreators')
            return res?.data;
        }
    })


    if (isPending) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <div className='overflow-hidden py-5'>
            <h1 className='text-center mb-3 text-2xl font-bold md:text-4xl'>Our top creator's</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
                autoplay={true}
            >
                {
                    populerCreators?.map(creator => <SwiperSlide key={creator?._id}>
                        <div className='relative  h-full w-full'>
                            <img className='h-full w-full object-cover' src={creator?.creatorImage} alt="" />
                            <p className='absolute bottom-0 text-center w-full font-bold text-yellow-400'>{creator?.creatorName}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

    )
}

export default TopCreators