import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);  
  };
    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
   
};

export default NewExpense;
