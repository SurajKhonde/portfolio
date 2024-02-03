import React, {  useState } from "react";
import AppInfoBox from "../utlity/external/AppInfoBox"
import Projects from "../utlity/Projects";
import MostRatedProjects from "../UnderHome/MostRatedMovies";

export default function Dashboard() {
  const [appInfo, setAppInfo] = useState({
    movieCount: 20,
    reviewCount: 14,
    userCount: 6,
  });
  return (
    <>
    <div className="grid grid-cols-3 gap-5 p-5">
      <AppInfoBox
        title="Total Projects "
        subTitle={appInfo.movieCount.toLocaleString()}
      />
      <AppInfoBox
        title="Total Deployed "
        subTitle={appInfo.reviewCount.toLocaleString()}
      />
      <AppInfoBox
        title="Under Devlopment "
        subTitle={appInfo.userCount.toLocaleString()}
        />
        <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded col-span-3 md:col-span-2">
          <Projects />
          
        </div>
        <div className="bg-white hidden md:block shadow dark:shadow dark:bg-secondary p-5 rounded">
          <MostRatedProjects/>
        </div>
    </div>
      
      
   </>
  );
}