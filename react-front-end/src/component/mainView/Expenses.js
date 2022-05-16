import React from 'react';
import LineGraph from './LineGraph';
import useVisualMode from '../../hooks/useVisualMode';
import "../../sass/spending.scss"

export default function Expenses() {

  const LINE = 'LINE';
  const EXPENSES = 'EXPENSES';

  const { mode/*, transition, back */ } = useVisualMode(EXPENSES);

  return (
    <div>
      {mode === LINE && <LineGraph />}
      {mode === EXPENSES &&
        

        <div id='user-expense-input'>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="/">Clothes</a></li>
              <li><a className="dropdown-item" href="/">Entertainment</a></li>
              <li><a className="dropdown-item" href="/">Groceries</a></li>
              <li><a className="dropdown-item" href="/">Rent</a></li>
              <li><a className="dropdown-item" href="/">Insurance</a></li>
              <li><a className="dropdown-item" href="/">Fuel</a></li>
              <li><a className="dropdown-item" href="/">Eating Out</a></li>
              <li><a className="dropdown-item" href="/">Gifts</a></li>
              <li><a className="dropdown-item" href="/">Donations</a></li>
              <li><a className="dropdown-item" href="/">Shopping</a></li>
              <li><a className="dropdown-item" href="/">Other</a></li>
            </ul>
            <div className="form-outline">
              <input type="number" id="typeNumber" className="form-control" />
              <label className="form-label" for="typeNumber">Amount</label>
            </div>
          </div>
        </div>}
    </div>
  );
}