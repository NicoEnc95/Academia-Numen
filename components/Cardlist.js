import React from 'react'
import Card from "./Card"
const Cardlist = (props) => {
  return (
<section style = {{display:"flex",}}>

    {props.data.map(card => <Card 
card={card}
key={card.id}
/>,
    )}
    
</section>
  )
}

export default Cardlist