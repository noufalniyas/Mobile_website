import React from 'react'
import Hero from '../../src/Components/Carousel/Hero';
import Container from 'react-bootstrap/Container'
import CardComponent from '../../src/Components/Card/CardComponent';
import SideBarComp from '../../src/Components/SideBar/SideBarComp';
import ThreePillars from '../Components/ThreePillars/ThreePillars';


const Home = () => {



  return (
    <div>
      
      <Hero title = "Renew Retrive Revive"/>
      <Container>
           <CardComponent/>
           
         </Container>
         <SideBarComp/>
          <ThreePillars />
        
    </div>
  )
}

export default Home
