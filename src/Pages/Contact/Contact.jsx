import React from 'react';
import contact from "../../assets/contact.jpg"

const Contact = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-24">
            <h1 className="text-center text-4xl font-bold my-8">Contact US</h1>
            <div className="grid md:grid-cols-2 px-3">
                <img className="w-full h-[550px]"  src={contact} alt="" />
                <div className="p-4">
                    <form>
                        <label className="text-black" htmlFor="">YOUR NAME</label> <br />
                        <input className='w-full my-2 p-3 rounded-md bg-transparent border shadow-md' type="text" name='form_name' placeholder='Enter your name' /><br />
                        <label className="text-black" htmlFor="">YOUR EMAIL</label> <br />
                        <input className="w-full p-3 my-2 rounded-md bg-transparent border shadow-md " type="email" name="form_email" id="" placeholder='Enter your email' /><br />
                        <label className="text-black" htmlFor="">SUBJECT</label><br />
                        <input className="w-full p-3 my-2 rounded-md bg-transparent border shadow-md " type="text" name='from_name' placeholder='Enter your question' /><br />
                        <label className="text-black" htmlFor="">YOUR MESSAGE</label><br />
                        <textarea className="w-full p-3 rounded-md my-2 bg-transparent border border-white/10 shadow-md" name="message" id="" cols="6" rows="6" placeholder='Type your massage'></textarea>
                        <input className="w-full cursor-pointer shadow-md bg-[#f3b160] text-white text-xl font-bold hover:bg-[#d69c54] duration-300 p-3 rounded" type="submit" value="SEND MESSAGE" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;