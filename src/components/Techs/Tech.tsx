import { FaReact } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

type TechProps = {
    tech: {
        badge: string;
        id: string | number;
        description: string;
        category: string;
        difficulty: string;
        rating: string | number;
        icon: string;
    };
};

const Tech = ({ tech }: TechProps) => {

    return (
        <div className="container mx-auto">

            <div className=" border-2 border-accent p-3">
                <div className=" space-y-4">
                    <div className="flex justify-between items-center gap-5">
                        <p><FaReact /></p>
                        <p>{tech.badge}</p>
                    </div>
                    <h2 className="text-2xl font-bold">{tech.id}</h2>
                    <p className="text-[#64748B]">{tech.description}</p>
                    <div className="flex justify-between items-center gap-1">
                        <p>{tech.category}</p>
                        <p className="text-[#64748B]">{tech.difficulty}</p>
                        <p className="flex items-center justify-between gap-1 p-2"><FcRating/>{tech.rating}</p>
                    </div>

                </div>
                <button className="btn w-full rounded-xl bg-[#0A0F1D] text-[#FFFFFF]">Add to Stack</button>
            </div>
             <div>
                
             </div>

        </div>
    );
};

export default Tech;