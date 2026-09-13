import banner from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        < div className="container mx-auto my-5">
            <div className='flex justify-between items-center gap-10'>
                <div className="space-y-5">
                    <h2 className=" text-5xl font-bold text-black">Build Your Ideal <br />
                        <span className=" text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">Development Stack</span></h2>

                    <p className="text-gray-500">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your
                        next project. </p>
                    <div className="flex gap-3">
                        <button className="btn bg-gradient-to-r from-red-500 via-fuchsia-500 to-purple-600 text-white">Explore Technologies</button>
                        <button className=" btn ">Learn More</button>
                    </div>

                </div>
                <img src={banner} alt="banner-logo" />
            </div>
        </div>
    );
};

export default Banner;