import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete} from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const {  deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

  // const transactions = [
  //   {id:1, type:"Income", category:'Salary', amount:50, date:"Sun June 21"},
  //   {id:2, type:"Expense", category:'Salary', amount:50, date:"Sun June 21"},
  //   {id:3, type:"Income", category:'Salary', amount:50, date:"Sun June 21"},

  // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => ( 
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
              ₹
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;