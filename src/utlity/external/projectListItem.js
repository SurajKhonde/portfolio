import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GiGiftOfKnowledge } from "react-icons/gi";
import ConfirmModal from "../Additional/ConfirmModel";
import ProfileModal from "../Additional/ProfileModal";

const ProjectListItem = ({ project }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState();
  console.log(showProfileModal)
  const handleOpen = () => setShowConfirmModal(true);
  const hideConfirmModal = () => setShowConfirmModal(false);
   const hideProfileModal = () => {
    setShowProfileModal(false);
  };
  const handleProjectfile = (id) => {
    setSelectedProfile(id);
    setShowProfileModal(true);
  };
  return (
    <>
      <ProjectCard
        project={project}
        onOpenClick={handleOpen}
        handleProjectfile={ handleProjectfile}
      />
      <div className="p-0">
        <ConfirmModal
          visible={showConfirmModal}
          onCancel={hideConfirmModal}
          
          title="Are you sure?"
          subtitle="You will be redirected to the External Link"
        />
         <ProfileModal
                visible={showProfileModal}
                onClose={hideProfileModal}
                profileId={selectedProfile}
      />
      </div>
    </>
  );
};

const ProjectCard = ({project, onOpenClick ,handleProjectfile}) => {
  const { Links,name,containt,id} = project.Cards;
  return (
    <table className="w-full border-b">
      <tbody>
        <tr>
          <td>
            
            <div className="w-20 md:w-32 ">
              <img
                className="w-full aspect-video"
                src={Links}
                alt={name}
              />
            </div>
          </td>

          <td className="w-full pl-5">
            <div>
              <h1 className=" text-sm md:text-2xl font-semibold text-primary  text-black">
                {name}
              </h1>
              <div className="space-x-1">
                {containt.map((g, index) => {
                  return (
                    <span
                      className="text-primary text-black text-[6px] md:text-xl"
                      key={index}
                    >
                      {g}
                    </span>
                  );
                })}
              </div>
            </div>
          </td>
          <td>
            <div className="items-center justify-around space-x-3  text-primary text-lg">             
              <button  onClick={onOpenClick} type="button">
                <BsBoxArrowUpRight className="text-black" />    
              </button>
              <button onClick={()=>handleProjectfile(id)} type="button">
                <GiGiftOfKnowledge className="text-black" />
              </button>
             
             
            </div>
          </td>
        </tr>
      </tbody>

    </table>
  );
};



export default ProjectListItem;
