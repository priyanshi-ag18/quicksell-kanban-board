import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onGroupingChange, onOrderingChange }) => {
  const [displayType, setDisplayType] = useState("default");
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  const handleGroupingChange = (e) => {
    const sortGrouping = e.target.value;
    setGrouping(sortGrouping);
    onGroupingChange(sortGrouping);
  };

  const handleDisplayTypeChange = (e) => {
    const newDisplayType = e.target.value;
    setDisplayType(newDisplayType);
  };

  const handleOrderingChange = (e) => {
    const newOrdering = e.target.value;
    setOrdering(newOrdering);
    onOrderingChange(newOrdering);
  };

  // Define options for each dropdown
  const displayOptions = [
    { value: "default", label: "Default" },
    { value: "custom", label: "Custom" },
  ];

  const groupingOptions = [
    { value: "status", label: "Status" },
    { value: "user", label: "User" },
    { value: "priority", label: "Priority" },
  ];

  const orderingOptions = [
    { value: "priority", label: "Priority" },
    { value: "title", label: "Title" },
  ];

  return (
    <div className="navbar">
      <div className="dropdown">
        <label htmlFor="displayDropdown">Display:</label>
        <select
          id="displayDropdown"
          value={displayType}
          onChange={handleDisplayTypeChange}
        >
          {displayOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {displayType === "custom" && (
        <div className="dropdown">
          <label htmlFor="groupingDropdown">Grouping:</label>
          <select
            id="groupingDropdown"
            value={grouping}
            onChange={handleGroupingChange}
          >
            {groupingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {displayType === "custom" && (
        <div className="dropdown">
          <label htmlFor="orderingDropdown">Ordering:</label>
          <select
            id="orderingDropdown"
            value={ordering}
            onChange={handleOrderingChange}
          >
            {orderingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Navbar;
