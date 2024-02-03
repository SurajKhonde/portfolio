import logos from "../image/newPICS.png";
import { FaMailchimp } from "react-icons/fa";
import { MdSendToMobile, MdLocationCity } from "react-icons/md";
const Item = ({ details, index }) => { 
    switch (index) { 
        case 0:
            return (
                <div>{<div className="p-2 m-2 border-b-2 border-gray-200 text-left justify-between">
                    <div className=" flex justify-between">
                     <div>
                        <h3 className="mt-10 hover:text-4xl hover:text-orange-500">{details.AboutMyself.name}</h3>
                        <span className="flex gap-3">
                            <FaMailchimp className="text-[20px] mt-1"/>
                            <h3 className="text-[15px]">:{<span className="font-bold text-blue-700">{details.AboutMyself.emailId}</span>}</h3>
                        </span>
                        <span className="flex gap-3">
                            <MdSendToMobile className="text-[20px] mt-1" />
                            <h3 className="text-[15px]">:{<span className="font-bold text-blue-700">{details.AboutMyself.ContactNumber}</span>}</h3> 
                        </span>
                        <span className="flex gap-3">
                            <MdLocationCity className="text-[20px] mt-1" />
                            <h3 className="text-[15px]">{details.AboutMyself.place}</h3>
                        </span>   
                    </div>
                    <div className="w-52 h-52">
                        <img src={ logos}></img>
                     </div>
                       
                    </div>
                     <p>{details.AboutMyself.BriefMyself}</p>
                    

                </div>}</div>)
         case 1:
            return (
        <div>{<div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">{<h3>{details.aboutEduction.university}</h3> } </div>
            </div>}</div>
            ) 
      case 2:
            return (
        <div>{<div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">{<h3>{details.AfterCollageLife.CountofExam}</h3> } </div>
            </div>}</div>
            )
      case 3:
            return (
        <div>{<div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">{<h3>{details.AboutJobExp.JobRole}</h3> } </div>
            </div>}</div>
            )
      case 4:
            return (
        <div>{<div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">{<h3>{details.WEBDevloper.Teacher}</h3>
                    } </div>
            </div>}</div>
            )        
    }

    
}

export default Item;