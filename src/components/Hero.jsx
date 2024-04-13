export default function Hero(){
    return (
        <section id="hero">
            <div className="section-container mb-40 px-10 pt-16">
            <svg className="mx-auto my-16" width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg>

            <h3>
                A history of everything you copy.
            </h3>

            <p className="max-w-2xl mx-auto mb-10 text-xl text-grayishBlue">
            A clipboard is a temporary storage area for data that the user wants to copy from one place to another. In a word processor application, for example, the user might want to cut text from one part of a document and paste it in another part of the document.
            </p>


            {/* Buttons */}
            <div className="button-container">
                <a href="#" className="p-4 px-8 rounded-full shadow-2xl bg-strongCyan duration-200 hover:opacity-90">Download for Android</a>
                <a href="#" className="p-4 px-8 rounded-full shadow-2xl bg-lightBlue duration-200 hover:opacity-90">Download for Windows</a>
            </div>
            </div>
        </section>
    )
}