import { use } from "react";


const Techs = ({sentTechDataPromise}) => {
    const alltechs= use(sentTechDataPromise)

    return (
        <div className=" container mx-auto my-5">
           {
             alltechs.map((tech)=>{
                return (
                    <div>
                        <h2>{tech.name}</h2>
                    </div>
                )
             })
           }
        </div>
    );
};

export default Techs;