import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Avatar, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'; // Importa el icono de la cámara de fotos
import { tokens } from "../../theme";

const ProfileDialog = ({ open, onClose, onSave }) => {
    const [email, setEmail] = useState('n@omnilife.com');
    const [firstName, setFirstName] = useState('n');
    const [phoneNumber, setPhoneNumber] = useState('n');
    const [lastName, setLastName] = useState('n');
    const [avatarSrc, setAvatarSrc] = useState("../../assets/1.png"); // Estado para la URL de la imagen del avatar
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleSave = () => {
        onSave({ email, firstName, phoneNumber, lastName });
    };

    const handleClose = () => {
        onClose();
    };

    const handleAvatarChange = (e) => {
        // Aquí puedes implementar la lógica para cambiar la imagen del avatar
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvatarSrc(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle style={{ position: 'relative' }}>
                <Typography variant="h6" align="center" style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)' }}>Editar Perfil</Typography> {/* Título centrado por encima del avatar */}
                <Avatar alt="User Profile" src={avatarSrc} style={{ width: '60px', height: '60px', margin: 'auto' }}>
                    <PhotoCameraIcon /> {/* Icono de la cámara de fotos */}
                </Avatar>
                <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'block', margin: 'auto', marginTop: '8px' }} />
                <IconButton aria-label="close" onClick={handleClose} style={{ position: 'absolute', right: '8px', top: '8px', zIndex: 1 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <TextField
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    fullWidth
                    margin="dense"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} >
                    Cancel
                </Button>
                <Button onClick={handleSave} >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProfileDialog;
