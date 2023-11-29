import { Typewriter } from 'react-simple-typewriter'


const Typer = () => {

    const introText = '🌐 Explore, Engage, and Win! 🏆 Welcome to our Contest Hub! 🌟';

    const messages = [
        '🎉 Welcome to the Ultimate Contest Experience! 🎉',
        '💡 Unlock Your Potential and Win Big Today! 💡',
        '🚀 Join Now for a Chance to Shine and Claim Victory! 🚀',
        '🌟 Embrace the Challenge and Secure Your Triumph! 🌟',
        '🎁 Dive into the Contest Fun - Prizes Await You! 🎁',
    ];

    return (
        <div className=' flex flex-col items-center justify-center px-2'>
            <div className='border text-center mt-5 shadow-md shadow-indigo-900 py-5 rounded-lg h-28 md:h-28 lg:h-24'>
                <h1 className='font-bold text-white md:text-2xl'>{introText}</h1>
                <div className='text-green-200 text-sm md:text-base font-bold'>
                    <Typewriter
                        words={messages}
                        loop={0}
                        typeSpeed={50}
                        deleteSpeed={50}
                        cursorStyle='_'
                        cursorBlinking={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Typer