import React from 'react'
import Navbar from '../utils/Navbar'
// import LabelBackground from './LabelBackground'
import homes from "../../css/home/home.module.css";

const Labely = () => {
  return (
    <div className={homes.container}>
      <img src="/dev/labely.png" alt="" />
      {/* <LabelBackground /> */}
      <Navbar currentPage='labely'/>
    </div>
  )
}

export default Labely
