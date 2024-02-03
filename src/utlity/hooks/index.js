import { useContext } from "react";
import NotificationContext from "../context/NotificationContext";
import ProjectContext from "../context/ProjectContext";
import ThemeContext from "../context/ThemeContext";

export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);
export const useproject = () =>useContext(ProjectContext);
