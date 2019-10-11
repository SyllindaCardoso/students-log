import React from 'react';
import './App.css';
import NavBar from '../Login/NavBar';
import LogIn from '../Login/login-page'; 
import { BrowserRouter, Route } from 'react-router-dom';
import SimpleTable from '../Students/SimpleTable';
import Modal from '../Students/Modal';
import { getFormData, addFormData, deleteFormData, editFormData } from '../Actions/formDataActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function App(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

  const emptyDefault = {
    id: '', 
    name: '', 
    book: '', 
    days: '', 
    hours: '',
  }

  const getDataFromId = () => {
    //get the rows from the redux state
    const index = props.rows.findIndex((row) => formDataId === row.id)
    return props.rows[index];
  }

  const[isAddButton, setIsAddButton] = React.useState(false);

  const[formDataId, setFormDataId] = React.useState(null); 
  React.useEffect(() => {
    if(props.rows.length === 0) {
      props.getFormData();
    }
  })

  const addOneData = (data) => {
    props.addFormData(data)
    props.getFormData();
    handleClose();
  }

  const editData = (data) => {
    props.editFormData(data)
    props.getFormData();
    handleClose();
  }

  const deleteData = (data) => {
    props.deleteFormData(data)
    props.getFormData();
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/Login' component={LogIn} />
        <Route path='/SimpleTable' render={() => {
          return <SimpleTable
            openModal={handleClickOpen}
            setIsAddButton={setIsAddButton}
            setFormDataId={setFormDataId}
            deleteFormData={(data) => deleteData(data)}
            rows={props.rows}
          />
        }}
        />
          {open &&(
            <Modal 
              open={open}
              handleClose={handleClose}
              addFormData={(data) => addOneData(data)}
              editFormData={(data) => editData(data)}
              isAddButton={isAddButton}
              formData={isAddButton ? emptyDefault : getDataFromId()}
              />
          )}
        </div>
    </BrowserRouter>
    
  );
}

//this is returning as props in the app.js
function mapStateToProps(store) {
  return {
    rows: store.formData.rows
  }
}

//this is returning as props in the app.js
function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getFormData,
    addFormData,
    deleteFormData,
    editFormData
  }, dispatch)
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (App);
