/* eslint-disable react/prop-types */
const WinnerCard = ({ mrWinner }) => {
    const { img, email, name, prizeMoney } = mrWinner
    return (
        <div className="relative flex flex-col text-gray-700 max-w-md bg-white shadow-md rounded-xl bg-clip-border shadow-indigo-900">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                <img src={img} alt={`Image of ${name}`} />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    PrizeMoney: ${prizeMoney}
                </h4>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    {email}
                </p>
            </div>
        </div>
    )
}

export default WinnerCard