import ProjectListItem from "../utlity/external/projectListItem";
import ProjectData from "../utlity/ProjectDetails"
export default function Projects() { 
  return (

      <div className="space-y-3 ">
        {ProjectData.map((project) => {
          return (
              <ProjectListItem 
                key={project.id}
                project={project}
            />
          );
        })}
      </div>
      
  );
}
