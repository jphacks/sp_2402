import React from 'react'
import Navbar from '../utils/Navbar'
// import LabelBackground from './LabelBackground'
import homes from "../../css/home/home.module.css";
import CharacterCard from './CharacterCard'
import Header from './Header';

const Labely = () => {
  const dummydata = {
    CharacterCard : 60,
    name: "お茶わんこ",
    attention : 1
  }
  return (
    
    <div className={homes.container}>
      <CharacterCard CharacterCardLevel={dummydata.CharacterCard} CharacterCardname={dummydata.name}/>
      <Header />
      <img src="/dev/labely.png" alt="" />
      {/* <LabelBackground /> */}
      <Navbar currentPage='labely'/>
    </div>
  )
}

export default Labely
