import React, { useState } from 'react';
import { Button, Popover, Typography, TextField, ThemeProvider, createTheme } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

// Crear un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#ffffff',
    },
  },
});

// Estilos directamente como un objeto
const styles = {
  popover: {}, // Elimina pointerEvents: 'none'
  paper: {
    padding: theme.spacing(2),
    maxWidth: '300px',
  },
  chatButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: '50%',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: 9999, // Establecer un valor alto para z-index
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  chatForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  message: {
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '8px',
    marginLeft: '10px', // Margen izquierdo
    marginRight: '10px', // Margen derecho
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    backgroundColor: '#E1E1E1',
  },
};

const ChatBot = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleClick = (event) => {
    // Si el popover está abierto, lo cierra. Si no, lo abre.
    setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    setMessages([...messages, { type: 'user', text: message }]);
    event.target.reset(); // Limpiar el campo de texto después de enviar
  };

  const botResponse = "¡Hola! Soy un bot. ¿En qué puedo ayudarte hoy?";

  return (
    <ThemeProvider theme={theme} >
      <div>
        <Button
          style={styles.chatButton}
          aria-describedby="chat-popover"
          onClick={handleClick}
        >
          <ChatIcon />
        </Button>
        <Popover
          id="chat-popover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top', // Cambiar de 'bottom' a 'top'
            horizontal: 'center', // Centrar horizontalmente
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center', // Centrar horizontalmente
          }}
          style={styles.popover}
          classes={{
            paper: styles.paper,
          }}
          
        >
          <Typography sx={{ width: '400px', margin: '10px' }} variant="h6" gutterBottom>Chat con el Bot</Typography>
          <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ ...styles.message, ...(message.type === 'user' ? styles.userMessage : styles.botMessage) }}>
                <Typography variant="body1">{message.text}</Typography>
              </div>
            ))}
            <div style={{ ...styles.message, ...styles.botMessage }} >
              <Typography variant="body1" >{botResponse}</Typography>
            </div>
          </div>
          <form style={styles.chatForm} onSubmit={handleSubmit}>
            <TextField
              label="Mensaje"
              name="message"
              variant="outlined"
              size="small"
              fullWidth
              autoFocus
              sx={{ width: '400px', margin: '10px' }}
            />
            <Button variant="contained" type="submit">Enviar</Button>
          </form>
        </Popover>
      </div>
    </ThemeProvider>
  );
}

export default ChatBot;
