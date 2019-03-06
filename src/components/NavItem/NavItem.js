import React from "react";
import { MenuItem } from "@material-ui/core";
import './NavItem.scss';

export default function NavItem(props) {
  return (
    <MenuItem 
    className={`nav-items ${props.isActive ? 'active' : ''} ${props.selected ? 'selected' : ''}`} 
    onClick={props.handleNavigation} 
    id={props.id}>
    <p>{props.name}</p>
    </MenuItem>
  );
}
