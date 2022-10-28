import { FC } from 'react'

import snowPng from './snow.png'

import styles from './index.module.scss'

import Snow from './snow'



interface SnowingProps {
  number?:number;
}

const Snowing:FC<SnowingProps> =(props)=>{
  const {number=100} = props;


  return <div className='snowing'>
    {
      new Array(number).fill(1).map((item,index)=><Snow key={index}/>)
    }
  
  </div>
}

export default Snowing;