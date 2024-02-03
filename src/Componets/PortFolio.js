import React, { useState } from "react";
import "../utlity/external/SideBar.css"

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <>
          <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
            <i className="fas fa-times"></i>
          </div>
          <div className="sidebar_items">
            <div className="sidebar_item">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </div>
            <div className="sidebar_item">
              <i className="fas fa-user"></i>
              <p>About</p>
            </div>
            <div className="sidebar_item">
              <i className="fas fa-envelope"></i>
              <p>Contact</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const CreateOptions = ({ options, visible, onClose }) => {
  const container = useRef();
  const containerID = "options-container";

  useEffect(() => {
    const handleClose = (e) => {
      if (!visible) return;
      const { parentElement, id } = e.target;
    
      if (parentElement.id === containerID || id === containerID) return;

      if (container.current) {
        if (!container.current.classList.contains("animate-scale"))
          container.current.classList.add("animate-scale-reverse");
      }
    };

    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [visible]);

  const handleClick = (fn) => {
    fn();
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id={containerID}
      ref={container}
      className="absolute right-0 z-50 top-12 flex flex-col space-y-3 p-5 dark:bg-secondary bg-white drop-shadow-lg rounded animate-scale"
      onAnimationEnd={(e) => {
        if (e.target.classList.contains("animate-scale-reverse")) onClose();
        e.target.classList.remove("animate-scale");
      }}
    >
      {options.map(({ title, onClick }) => {
        return (
          <Option key={title} onClick={() => handleClick(onClick)}>
            {title}
          </Option>
        );
      })}
    </div>
  );
};

const Option = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dark:text-white text-secondary hover:opacity-80 transition"
    >
      {children}
    </button>
  );
};



export default Sidebar;
