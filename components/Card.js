import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (

    <figure style = {stylefigure} >
      <img  style = {styleimg }
      src={props.card.img} alt={props.card.modelo}  />
        <figcaption style = {stylefigcaption} >
        
            <p style = {marca}>{props.card.marca}</p>
            <p style = {marca}>{props.card.modelo}</p>
            <h3 style={precio} >{props.card.precio}</h3>
            <>
        <Button/>
        </>
        </figcaption>
    </figure>

  )
}

export default Card

const stylefigcaption = 
{
  widht: "200px",
  height: "250px",
  flexWrap:"nowrap"
}

const stylefigure = 
{
  display:"flex",
  widht: "200px",
  height: "300px",
  flexWrap:"wrap"
}

const styleimg = 
{
  widht: "250px",
  height: "150px",
  objectFit: "cover",
  justifyContent: "center",
  marginLeft: "20px"
}

const precio = 
{
    color: "#02D6D6"
}
const marca = 
{
    color: "grey"
}