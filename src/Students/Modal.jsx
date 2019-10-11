import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog(props) {
    const { id, name, book, days, hours } = props.formData; 
    const[idValue, setIdValue] = React.useState(id);
    const[nameValue, setNameValue] = React.useState(name); 
    const[bookValue, setBookValue] = React.useState(book); 
    const[daysValue, setDaysValue] = React.useState(days); 
    const[hoursValue, setHoursValue] = React.useState(hours); 
    
    const save = () => {
        if (props.isAddButton) {
            console.log('added!');
            props.addFormData({
                id: idValue,
                name: nameValue,
                book: bookValue, 
                days: daysValue,
                hours: hoursValue
            });
        } else {
            props.editFormData({
                id: idValue,
                name: nameValue,
                book: bookValue, 
                days: daysValue,
                hours: hoursValue
            })
        }
        // props.handleClose();
    }
    console.log({
        id: idValue,
        name: nameValue,
        book: bookValue, 
        days: daysValue,
        hours: hoursValue
    })
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">ID</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                required
                margin="normal"
                id="stardard-required"
                label="id"
                value={idValue}
                onChange={(e) => setIdValue(e.target.value)}
                fullWidth
                /> <br></br>
                <TextField
                autoFocus
                required
                margin="normal"
                id="stardard-required"
                label="Name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                fullWidth
                />
                <TextField
                margin="normal"
                id="stardard"
                label="Book"
                value={bookValue}
                onChange={(e) => setBookValue(e.target.value)}
                fullWidth
                />
                <TextField
                margin="normal"
                id="stardard"
                label="Days"
                value={daysValue}
                onChange={(e) => setDaysValue(e.target.value)}
                fullWidth
                />
                <TextField
                margin="normal"
                id="stardard"
                label="Hours"
                value={hoursValue}
                onChange={(e) => setHoursValue(e.target.value)}
                fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={save} color="primary">
                Save
                </Button>
                <Button onClick={props.handleClose} color="primary">
                Cancel
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
        }