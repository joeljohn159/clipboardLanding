import computer from '../assets/image-computer.png'

export default function Features(){
    return (
        <section id="features">
            <div className="section-container px-10 my-20">
                <div className=" relative flex flex-col md:flex-row md:space-x-32">
                    {/* IMage */}
                    <div className="md:w-1/2">
                        <img src={computer} alt="" className='md:absolute top-0 right-[50%]' />
                    </div>
                    {/* Items */}
                    <div className="flex flex-col justify-center items-center mt-16 mb-24 space-y-12 text-lg md:w-1/2 md:mb-60 md:text-left md:pl-16">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Quick Search</h5>
                            <p className="max-w-md text-grayishBlue">
                            Learn how to write a quality meta description tag that may be displayed for your page.
                            </p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Google Cloud</h5>
                            <p className="max-w-md text-grayishBlue">
                            Google Cloud is a suite of public cloud computing services offered by Google. 
                            </p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Completely History</h5>
                            <p className="max-w-md text-grayishBlue">
                            Although the term 'cloud' was coined, it was a predecessor of cloud computing - known as grid computing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}