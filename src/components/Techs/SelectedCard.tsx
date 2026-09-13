

const SelectedCard = () => {
    return (
       <div className="container mx-auto">
         <div className=" space-y-6 p-7">

            <h2 className="font-bold text-[#0F172A]">Your Stack</h2>
            <p className="text-[#64748B]">Technology Selected</p>

            <button className="btn w-full flex justify-items-bottom rounded-xl border-[#D82C20] text-[#D91B7E]">Remove ALL</button>

        </div>
       </div>
    );
};

export default SelectedCard;