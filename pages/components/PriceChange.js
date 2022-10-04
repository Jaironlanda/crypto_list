import React from "react"

const PriceChange = (props) => {
  
  function priceCheck(priceChange) {
    let priceType
    if (parseFloat(priceChange) > 0){
      priceType = 'green'
    } else {
      priceType = 'red'
    }

    return <span style={{'color': priceType}}>{priceChange.toFixed(2)}%</span>
  }

  return (
    <>
      {priceCheck(props.price)}
    </>
  )
}

export default PriceChange