import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './checkbox.scss';

export const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp }) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked={checked}
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input tabIndex="-1" type="checkbox" checked={checked} onChange={onClick} />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
    <FaTrashAlt />
    </button>
  </div>
);
