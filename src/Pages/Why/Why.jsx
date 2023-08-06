import React from 'react';
import why from "../../assets/why.jpeg"

const Why = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-3 border-b pb-4">
            <h1 className="text-center font-semibold mb-2">--- REASONS TO CHOOSE US ---</h1>
            <h1 className="text-center text-4xl font-bold"><span className="text-4xl font-bold text-red-500">Why</span> Choose us?</h1>
            <div className="grid md:grid-cols-2 gap-4 mt-10">
                <div>
                    <h1 className="font-bold">ALWAYS BRING CUSTOMERS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta itaque. Eos, est, nemo, quos qui possimus animi commodi soluta ducimus id ipsa incidunt. Fuga quisquam omnis quos cupiditate aperiam.</p>

                    <div className="my-3">
                        <h1 className="font-bold">High Quality Equipment:-</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis reprehenderit commodi aliquid autem! Enim nulla inventore fugiat nostrum officiis.</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Good Service Quality:-</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum iste neque beatae in tempore laboriosam minus nam. Ducimus inventore facere, consequuntur quis iste accusamus.</p>
                    </div>
                    <div className="w-full bg-[#f3b160] mt-6 md:p-7 p-4 font-extrabold">
                        <p className="text-white md:text-3xl md:text-center text-center text-2xl">We Are ISO Certified Company</p>
                    </div>
                </div>
                    <img className="rounded-md" src={why} alt="" />
            </div>
        </div>
    );
};

export default Why;