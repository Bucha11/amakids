import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cell } from './Cell/Cell'
import { Moves } from './Moves/Moves'
import style from './Main.module.css'
import {  clearDataAction, failedAnswerAction, setStartCoordAction, successAnswerAction } from '../../Redux/Reducer'
import { Utils } from '../../Utils/Utils'



export const Main=()=>{
    const [visibillity,setVisibillity]=useState(false)
    const [key,setKey]=useState(1)
    const dispatch=useDispatch()
useEffect(()=>{dispatch(
    setStartCoordAction(Utils.getStartCoord()))
    
},[])
let moves=[]


    const cells=useSelector(state=>state.cells)
    const startCoord=useSelector(state=>state.startCoord)
    const successId=useSelector(state=>state.successId)
    const failedId=useSelector(state=>state.failedId)

    const startId=Utils.getStartId(startCoord,cells)
    let currentCell=startCoord
    
 Utils.getMoves(currentCell,moves)

    
    const renderMoves=moves.map((i,index)=><Moves coord={i} key={index} delay={'a'+index}/>)
    
    const clickHandler=(id,coord)=>{
      
        if(coord.join()===currentCell.join()){
            dispatch(successAnswerAction(id)
            )
        } else {
            const id=Utils.getStartId(currentCell,cells)
            dispatch(failedAnswerAction(id)
            )
        }
        setVisibillity(true)

    }
    const clearData=()=>{
        dispatch(clearDataAction());
        setVisibillity(false)
        dispatch(
               setStartCoordAction(Utils.getStartCoord()))
               moves=[]
               setKey(2*Math.random())

    }
  
    const renderCells=cells.map(i=><Cell id={i.id} coord={i.coord} key={i.id} startId={startId} 
        handler={clickHandler}  failedId={failedId} successId={successId}/>)
    return(
        <div><div className={style.field}>{renderCells}</div>
        <div className={visibillity?style.displayButton:style.opacity} onClick={clearData}>Again</div>
       <div className={style.movesField} key={key}> {renderMoves}</div>
      </div>
    )
}