import google from '../assets/logo-google.png'
import hp from '../assets/logo-hp.png'
import ibm from '../assets/logo-ibm.png'
import microsoft from '../assets/logo-microsoft.png'
import VG from '../assets/logo-vector-graphics.png'
import fb from '../assets/icon-facebook.svg'
import insta from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'

export default function References(){
    return (
        <>
        <section id="references">
            <div className="flex flex-col justify-between items-center max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
                <img src={google} alt="" />
                <img src={ibm} alt="" />
                <img src={microsoft} alt="" />
                <img src={hp} alt="" />
                <img src={VG} alt="" />
            </div>
        </section>


        <section id="end">
        <div className="section-container px-10 my-20">
            <h3>Clipboard for android and MacOS</h3>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-grayishBlue">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis veritatis voluptatem earum id, qui debitis.
            </p>

            {/* Buttons */}
            <div className="button-container">
                <a href="#" className="p-4 px-8 rounded-full shadow-2xl bg-strongCyan duration-200 hover:opacity-90">Download for Android</a>
                <a href="#" className="p-4 px-8 rounded-full shadow-2xl bg-lightBlue duration-200 hover:opacity-90">Download for Windows</a>
            </div>

        </div>
        </section>


        <footer className="bg-gray-500">
            <div className="section-container">
                <div className="flex flex-col items-center justify-between md:flex-row">
                <svg className='scale-[40%]' width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg>
                <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-x-24 md:space-y-0">
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                            <div><a href="#" className="hover:text-strongCyan">Contact Us</a></div>
                        </div>

                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-strongCyan">Privacy & Policy</a></div>
                            <div><a href="#" className="hover:text-strongCyan">Press kit</a></div>
                        </div>

                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-strongCyan">Install guide</a></div>
                        </div>
                    </div>


                    <div className="flex justify-between w-32 py-1">
                        <a href="#"><img src={fb} alt="" className='duraction-200 ficon' /></a>
                        <a href="#"><img src={insta} alt="" className='duraction-200 ficon' /></a>
                        <a href="#"><img src={twitter} alt="" className='duraction-200 ficon' /></a>
                    </div>
                </div>
                </div   >
            </div>
        </footer>
        </>
    )
}