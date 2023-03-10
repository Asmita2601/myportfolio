import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
// import {Button} from "../styles/Button";
import { Button } from "../styles/Button";
const HeroSection =()=>{
    
    const { name, image} = useGlobalContext();

    return(
<Wrapper>
<div className="container grid grid-two-column">
    <div className="section-hero-data">
    <p className="hero-top-data">THIS IS ME</p>
    <h1 className="hero-heading">{name}</h1>
    <p className="hero-para"> I'm {name} thakur. A full stack Devloper, BCA student and Currently Work in ABC company.</p>
    <Button className="btn hireme-btn">
        <NavLink to="/contact">hire me</NavLink>
    </Button>
    </div>
    <div className="section-hero-image">
        <picture>
            <img src={image} alt="pic"/>
        </picture>
    </div>
     </div>

</Wrapper>
    )
};
const Wrapper = styled.section`
padding :3rem ;
 ${'' /* margin-left:90px; */}
 
 .section-hero-data{
    display:flex;
    flex-direction: column;
    justify-content:center;
   
 }
 .btn{
max-width:10rem;
 }
 .hero-top-data{
    text-transform: uppercase;
    font-weight:500;
    font-size:1.1rem;
    color:${({ theme})=> theme.colors.helper};
 }
 img{
    height:30rem;
    width:35rem;
 }
 .hero-heading{
    text-transform: uppercase;
    font-size:1.7rem;
 }
 .hero-para{
    margin-top: 1.0rem;
    margin-bottom: 3.0rem;
    max-width:35rem;
 }
 .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
   
 }
 picture{
    text-align:center;
 }
 @media (max-width:${({ theme })=> theme.media.mobile}){
     .grid-two-column{
         grid-template-columns:1fr;
         gap:3rem;
         padding:0 3.2rem;
         .section-hero-data{
            padding-left:2rem;
         }
     ${'' /* .container{
         padding:0 3.2rem;
     } */}
     }
}
`;


export default HeroSection;