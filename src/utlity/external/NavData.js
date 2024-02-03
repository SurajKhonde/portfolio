import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <BusinessCenterIcon/>,
        text: "PortFolio",
        link: "services"
    },
    {
        id: 2,
        icon: <ContactMailIcon/>,
        text: "conatctMe",
        link: "contact"
    },
    {
        id: 3,
        icon: <ContactPageIcon/>,
        text: "About Me",
        link: "about"
    },
     {
        id: 4,
        icon: <GitHubIcon/>,
        text: "GitHub",
        link: "https://github.com/SurajKhonde"
    },
    {
        id: 5,
        icon: <LinkedInIcon />,
        text: "Linkdin",
        link:"https://www.linkedin.com/in/surajrkhonde/"
    }

]