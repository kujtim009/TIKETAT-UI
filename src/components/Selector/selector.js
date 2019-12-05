import React from 'react'
import classes from './selector.module.css';

export default function selector(props) {
    const listOfOptons = props.list.map((item, indx)=>
        <option key={indx} value={item.id}>{item.titulli}</option>
        )
    return (
        <React.Fragment>
            <select 
                className={classes.selector}
                id = {props.inputID} 
                value= {props.selectedItem} 
                onChange={props.change}>
                    
                        {listOfOptons}
            </select>
        </React.Fragment>
    )
}
