import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import LoadingIcon from "../../Util/LoadingIcon";


const Contact = () => {
    const form = useRef<HTMLFormElement>();
    const [isSentSuccessful, setIsSentSuccessful] = useState<boolean | null>(null); // State for "Sent!" or "An error occured while trying to send the message. Please try again." msg
    const [isSending, setIsSending] = useState<boolean>(false); // state for loading icon

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            try {

                setIsSending(true);

                await emailjs.sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
                );

                setIsSending(false);

                setIsSentSuccessful(true);

                setTimeout(() => {
                    form.current?.reset(); // Reset the form fields
                    setIsSentSuccessful(null);
                }, 1000);

            } catch (error) {
                console.error('Error sending email:', error);
                setIsSentSuccessful(false);

                setTimeout(() => {
                    form.current?.reset(); // Reset the form fields
                    setIsSentSuccessful(null);
                    setIsSending(false);
                }, 1000);

            }
        }
    };

    return (
        <div className="text-color" id={'Contact'}>
            <h1 className="section-names">Contact</h1>

            <section className="flex flex-col laptop:flex-row mt-10 laptop:mt-20">
                <section className="hidden laptop:flex flex-col justify-between text-2xl whitespace-pre-line">
                    <p>Wanna talk? {'\n'} Got a question? {'\n'} Feel free to send me a message.</p>
                    <p className="text-base">Want to connect another way? Check out my links below!</p>
                </section>

                <section className="bg-color4 laptop:ml-36 w-full laptop:w-5/12 border border-4 border-color6 rounded-lg">
                    <div className="p-6">
                        <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail} className="space-y-8">
                            <input
                                type="text"
                                id="Name"
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Name*"
                                name="user_name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Email*"
                                name="user_email"
                                required
                            />
                            <div className="sm:col-span-2">
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                    placeholder="Message*"
                                    name="message"
                                    required
                                ></textarea>
                            </div>

                            {
                                (!isSending && isSentSuccessful === null) &&

                                <button
                                    type="submit"
                                    className='py-3 px-5 text-sm text-center rounded-full bg-color6 focus:ring-0 focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300 w-32'
                                    value="Send"
                                >
                                    Send message
                                </button>
                            }

                            {
                                isSending &&
                                <div className="flex flex-row items-center">
                                    <p className='py-3 px-5 text-sm text-center rounded-full bg-gray-200 w-32 mr-1'>
                                        Sending...
                                    </p>

                                    <LoadingIcon />
                                </div>

                            }

                            {
                                (isSentSuccessful === false) &&

                                <p className="text-red-500 text-sm">An error occured while trying to send the message. Please try again.</p>
                            }

                            {
                                isSentSuccessful &&
                                <p className='py-3 px-5 text-sm text-center rounded-full bg-green-300 w-32'>
                                    Sent!
                                </p>
                            }

                        </form>
                    </div>
                </section>

                <section>
                    <p className="text-base mt-5 laptop:hidden">Want to connect another way? Check out my links below!</p>
                </section>
            </section>
        </div>
    );
};

export default Contact;
