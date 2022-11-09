import { FC,useEffect } from 'react'

import snowing from 'lib/snowing'

import snowPng from './snow.png'

import styles from './index.module.scss'

import Snow from './snow'



interface SnowingProps {
  number?:number;
}

const Snowing:FC<SnowingProps> =(props)=>{
  const {number=100} = props;


  useEffect(()=>{
    snowing(100);
  },[])

  return <div className='snowing'>
    {/* {
      new Array(number).fill(1).map((item,index)=><Snow key={index}/>)
    } */}
  
  </div>
}

export default Snowing;