import React from 'react'
import style from './Cell.module.css'


export const Cell=(props)=>{
    
   
    return(
        <div className={`${style.cell} ${(props.id===props.startId)?style.start:''} 
        ${(props.id===props.successId)?style.success:''}
        ${(props.id===props.failedId)?style.failed:''}`} onClick={()=>{props.handler(props.id,props.coord)}}></div>
    )
}