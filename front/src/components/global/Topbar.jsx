import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ProfileDialog from "../userProfile";

const Topbar = ({ setSelectedTitle, onLogout }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Estado para controlar la apertura del ProfileDialog
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);

  // Función para manejar el clic en el botón PersonOutlinedIcon
  const handleProfileIconClick = () => {
    setIsProfileDialogOpen(true);
  };

  // Función para guardar los datos en el ProfileDialog
  const handleSaveProfile = (profileData) => {
    console.log("Guardando perfil:", profileData);
    // Aquí puedes agregar cualquier lógica adicional para guardar los datos
  };

  // Función para manejar el logout
  const handleLogout = () => {
    // Llama a la función onLogout pasada por props desde el padre (App)
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      {/* Texto del contenido seleccionado */}
      <Typography variant="h3" textAlign="left" sx={{ flex: 1 }}>{setSelectedTitle}</Typography>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* Maneja el clic en el botón PersonOutlinedIcon */}
        <IconButton onClick={handleProfileIconClick}>
          <PersonOutlinedIcon />
        </IconButton>

        {/* Botón de Logout */}
        <IconButton onClick={handleLogout}>
          <ExitToAppOutlinedIcon />
        </IconButton>
      </Box>

      {/* Renderiza el ProfileDialog y pasa la función handleSaveProfile */}
      <ProfileDialog open={isProfileDialogOpen} onClose={() => setIsProfileDialogOpen(false)} onSave={handleSaveProfile} />
    </Box>
  );
};

export default Topbar;
