import React from 'react'
import style from './Moves.module.css'

export const Moves=(props)=>{
 
    return(
        <div className={style[props.delay]}>{props.coord}</div>
    )
}