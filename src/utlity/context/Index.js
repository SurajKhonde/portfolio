import React from "react";
import ProjectContext from "./ProjectContext";
import NotificationProvider from "./NotificationProvider";
import ThemeProvider from "./ThemeProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
        <ProjectContext>
            <ThemeProvider>{children}</ThemeProvider>
        </ProjectContext>
    </NotificationProvider>
  );
}
