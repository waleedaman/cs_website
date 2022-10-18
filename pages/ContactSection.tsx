import React, {useState} from "react";
import Button from "./components/Button";
import emailjs from 'emailjs-com';
import {BounceLoader} from "react-spinners";


function ContactSection(){
    const [isLoading, setIsLoading] = useState(false);
    const [errorSendingMail, setErrorSendingMail] = useState(false);
    function sendEmail(e) {
        setIsLoading(true)
        setErrorSendingMail(false)
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_mxtxebt', 'template_hk63m64', e.target, 'wIXgWqAGSRBd1yTUo')
            .then((result) => {
                let form:HTMLFormElement = document.getElementById("form") as HTMLFormElement;
                setIsLoading(false)
                form.reset();
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                setErrorSendingMail(true)
            });
    }
    return(
        <div className="bg-Beige text-gold px-8 py-12" id="ContactSection">
        <div
            className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
                <div>
                    <div className={'inline-flex justify-center items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mx-2"}></div>
                        <div className="text-gold font-medium text-lg">Contact us</div>
                    </div>

                    <div className="ml-12 text-brown mt-8">
                        You can also email us at <span className="underline"><a target={'_blank'} href={"mailto:info@cs-textiles.de?subject=Mail from our Website"} rel="noreferrer">info@cs-textiles.de</a></span> instead.
                    </div>
                </div>
            </div>
            <form id="form" onSubmit={sendEmail} className="">
                <div>
                    <span className="uppercase text-sm text-brown/80 font-bold">Full Name</span>
                    <input className="w-full bg-gold/25 text-brown mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                           type="text" name={"from_name"} placeholder=""/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-brown/80 font-bold">Email</span>
                    <input className="w-full bg-gold/25 text-brown mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                           type="text"
                            name={"from_email"}
                    />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-brown/80 font-bold">Message</span>
                    <textarea
                        className="w-full h-32 bg-gold/25 text-brown mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        name={"message"}
                    />
                </div>
                <div className="mt-8">
                    <Button>
                        <input type="submit" className={errorSendingMail ? 'text-error' : 'text-gold'} value={errorSendingMail ? "Could not send mail" : "Send Message"}/>
                        &nbsp;&nbsp;<BounceLoader size={24} id={'loader'} loading={isLoading} color="#E0A83F" />
                    </Button>
                </div>
            </form>

        </div>

        </div>
)
}
export default ContactSection
