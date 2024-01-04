import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef<HTMLFormElement>();
    const [isSent, setIsSent] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            try {
                setIsButtonDisabled(true); // Disable the button

                await emailjs.sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
                );

                setIsSent(true);

                setTimeout(() => {
                    setIsSent(false);
                    form.current?.reset(); // Reset the form fields
                    setIsButtonDisabled(false); // Enable the button after form clears

                }, 2000); // Revert button text after 1 second

            } catch (error) {
                console.error('Error sending email:', error);

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
                                // value={formData.name}
                                // onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Name*"
                                name="user_name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Email*"
                                name="user_email"
                                required
                            />
                            <div className="sm:col-span-2">
                                <textarea
                                    id="message"
                                    rows={6}
                                    // value={formData.message}
                                    // onChange={handleChange}
                                    className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                    placeholder="Message*"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`py-3 px-5 text-sm text-center rounded-full bg-color6 focus:ring-0 focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300 w-32 ${isButtonDisabled ? 'bg-color3' : ''} ${isSent ? 'bg-green-300' : ''}`}
                                value="Send"
                                disabled={isButtonDisabled}
                            >
                                {!isSent ? 'Send message' : 'Sent'}
                            </button>
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
