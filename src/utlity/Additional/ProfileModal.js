import React, { useState, useEffect } from "react";
import ModalContainer from "./ModelContainer";
import ProjectData from "../ProjectDetails";

export default function ProfileModal({ visible, profileId, onClose }) {
  const [profile, setProfile] = useState({});

  const fetchProject = () => {
    const Data = ProjectData.map((project) => { return project })
    setProfile(Data[profileId].Cards)
    
  };
  useEffect(() => {
    if ( profileId===0 ||profileId) fetchProject();
  }, [profileId]);

  const {  name, desc,Links } = profile;

  return (
    <ModalContainer visible={visible} onClose={onClose} ignoreContainer>
      <div className="w-80 p-5 rounded flex flex-col  items-center bg-white dark:bg-black space-y-3">
        <img  src={Links } alt="" />
        <h3 className="dark:text-white text-primary font-semibold">{name}</h3>
        <p className="dark:text-white text-black">{desc}</p>
      </div>
    </ModalContainer>
  );
}
