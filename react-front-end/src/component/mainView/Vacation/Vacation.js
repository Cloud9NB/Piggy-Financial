import React from 'react';
import ProgressCircle from '../ProgressCircle';
import '../../../sass/vacation.scss';
import {
  getTotalAmount,
  getDaysTillGoal,
  getSavingsByID,
  filteredVacationExpenses,
  getGoalByID
} from '../../../helpers/helper_functions';




export default function Vacation(props) {

  const savingsById = getSavingsByID(props.savings, props.userId);
  const totalSaved = getTotalAmount(savingsById);
  
  const vacationInfo = getGoalByID(props.goals, props.userId);
  
  const vacationExpenses = filteredVacationExpenses(props.expenses, props.userId, vacationInfo.start_date);
  const totalSpentOnVacation = getTotalAmount(vacationExpenses);
  const homeTime = getDaysTillGoal(vacationInfo)
  
  const budgetLeft = totalSaved - totalSpentOnVacation;
<<<<<<< HEAD
  const dayAllowance = `$${(budgetLeft / homeTime / 100).toFixed(2)}`;
  const weekAllowance = `$${(budgetLeft / (homeTime / 7) / 100).toFixed(2)}`;
  console.log('totalSaved', totalSaved);
  console.log('totalSpentOnVacation', totalSpentOnVacation);
=======
  const dayAllowance = `$${((budgetLeft / homeTime )/ 100).toFixed(2)}`;
  const weekAllowance = `$${(((budgetLeft / homeTime) * 7) / 100).toFixed(2)}`;
  

>>>>>>> 6f16e219dac609a4fa846ce8003d60e8a102ce7f
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center text-center goalbox'>
        <div className='goal-container'>
          <br />
          <table>
            <thead>
              <tr>
                <td>
                  <h1>
                    {vacationInfo.goal_name}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>
                    ${((totalSpentOnVacation )/ 100).toFixed(2)} / ${(vacationInfo.amount / 100).toFixed(2)}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  {homeTime} days until home time
                </td>
              </tr>
              <tr>
                <td>
                  Advised to spend no more than {dayAllowance}/day
                </td>
              </tr>
              <tr>
                <td>
                  Advised to spend no more than {weekAllowance}/week
                </td>
              </tr>
            </thead>
          </table>
          <br />
          <ProgressCircle
            key='vacationCircle'
            total_saved={((vacationInfo.amount - totalSpentOnVacation )/ 100).toFixed(2)}
            goalTotal_cents={(vacationInfo.amount / 100).toFixed(2)} />
        </div>
      </div>
    </div>
  )
};