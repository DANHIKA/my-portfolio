import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterDropdown = ({ filterOptions }) => {
  return (
    <div className="dropdown">
      <button className="btn me-2 rounded-pill" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="material-icons align-middle">filter_alt</i> Filter
      </button>
      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filterDropdown">
        <div className="p-2">
          <h6>Filter Options</h6>
          {filterOptions.map((option, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input" type="checkbox" value={option.value} id={`checkbox${index}`} />
              <label className="form-check-label" htmlFor={`checkbox${index}`}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
