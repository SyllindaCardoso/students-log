import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


export default function SimpleTable(props) {
  const classes = useStyles();

  console.log('props', props);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Student's name</TableCell>
            <TableCell align="right">Book</TableCell>
            <TableCell align="right">Days a week </TableCell>
            <TableCell align="right">Hours a week</TableCell>
            <TableCell align="right"><AddIcon color='primary' onClick={() => {
              props.openModal();
              props.setIsAddButton(true);
            }} /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.book}</TableCell>
              <TableCell align="right">{row.days}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">
                <EditIcon color="secondary" onClick={() => {
                  props.openModal(); 
                  props.setIsAddButton(false);
                  props.setFormDataId(row.id); 
                }} />
                <DeleteIcon color="secondary" onClick={() => {
                  props.deleteFormData(row.id);
                }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}