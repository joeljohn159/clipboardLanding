import image from '../assets/image-devices.png'
export default function Access(){
    return (
        <>
        <section id="access">
            <div className="section-container px-10 my-15">
                <h3>Access Clipboard</h3>
                <p className="max-w-3xl text-grayishBlue mx-auto mb-24 text-xl text-center leading-9">
                Copy images and text from one PC to another with a cloud-based clipboard. Not only can you can paste from your clipboard history, but you can also pin the items you find yourself using all the time.
            </p>

            <img src={image} alt="" className='mx-auto md:scale-90' />
            </div>
        </section>
        </>
    )
}