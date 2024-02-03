import React, { useEffect, useState } from "react";
import ProjectData from "../utlity/ProjectDetails"
import { convertReviewCount } from "../utlity/hooks/helper";
import RatingStar from "../utlity/Additional/RatingStar";

export default function MostRatedProjects() {
  const [movies, setMovies] = useState([]);
  const fetchMostRatedProjects = () => {
    const Data = ProjectData.map((item) => { 
      return item?.Cards
    })


    setMovies([...Data]);
  };

  useEffect(() => {
    fetchMostRatedProjects();
  }, []);

  return (
    <div className="">
      
      <ul className="space-y-3">
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h4 className="dark:text-white  text-black text-secondary font-semibold">
                {movie.name}
              </h4>
              <div className="flex space-x-2">
                <RatingStar rating={movie.reviews?.ratingAvg} />
                <p className="text-black dark:text-white">
                  {convertReviewCount(movie.reviews?.reviewCount)} Reviews
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
