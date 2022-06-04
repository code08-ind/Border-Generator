import './Box.css';
import React from 'react'

const Object = ({ borderWidth, top, bottom, left, right, option, color }) => {
    let border, bordertop, borderbottom, borderleft, borderright;

    if (borderWidth !== 0) {
        border = `${borderWidth}px ${option} ${color}`;
        bordertop = `${top}px ${option} ${color}`;
        borderright = `${right}px ${option} ${color}`;
        borderbottom = `${bottom}px ${option} ${color}`;
        borderleft = `${left}px ${option} ${color}`;
    }
    else if (top !== 0) {
        border = `${borderWidth}px ${option} ${color}`;
        bordertop = `${top}px ${option} ${color}`;
        borderright = `${right}px ${option} ${color}`;
        borderbottom = `${bottom}px ${option} ${color}`;
        borderleft = `${left}px ${option} ${color}`;
    }
    else if (right !== 0) {
        border = `${borderWidth}px ${option} ${color}`;
        bordertop = `${top}px ${option} ${color}`;
        borderright = `${right}px ${option} ${color}`;
        borderbottom = `${bottom}px ${option} ${color}`;
        borderleft = `${left}px ${option} ${color}`;
    }
    else if (bottom !== 0) {
        border = `${borderWidth}px ${option} ${color}`;
        bordertop = `${top}px ${option} ${color}`;
        borderright = `${right}px ${option} ${color}`;
        borderbottom = `${bottom}px ${option} ${color}`;
        borderleft = `${left}px ${option} ${color}`;
    }
    else if (left !== 0) {
        border = `${borderWidth}px ${option} ${color}`;
        bordertop = `${top}px ${option} ${color}`;
        borderright = `${right}px ${option} ${color}`;
        borderbottom = `${bottom}px ${option} ${color}`;
        borderleft = `${left}px ${option} ${color}`;
    }

    return (
        <div className='object' style={{ border: border, borderBottom: borderbottom, borderLeft: borderleft, borderRight: borderright, borderTop: bordertop }}></div>
    )
}

export default Object