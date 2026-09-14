
import type { techTypeData } from "../../types/Types";
import Tech from "./Tech";

import { use} from "react";
import type {  Dispatch, SetStateAction } from "react";
interface techDataProps {
    sentTechDataPromise: Promise<techTypeData[]>

}

interface techDataProps {
    selectedtech: techTypeData[];
    setSelectedtech: Dispatch<SetStateAction<techTypeData[]>>;
}

const Techs = ({ sentTechDataPromise}: techDataProps) => {
    const alltechs = use(sentTechDataPromise)



    return (
        <div className=" container mx-auto my-5">

            <div className="my-10">
                <h2 className="text-5xl text-[#0F172A]">Explore the  <span className=" text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">Technologies</span></h2>
                <p>Pick one technology per categorgy to build your ideal stack</p>
            </div>

            
            <div className="grid sm:grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-3 W-full h-[200] gap-3">
              
                {
                    alltechs.map((tech: techTypeData, ind) => <Tech key={ind} tech={tech}></Tech>)
                }
            </div>
        </div>
    );
};

export default Techs;