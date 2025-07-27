import React from 'react'

const ExpressionJSX = () => {
    const myName = "Edvaldo Vunge";
    const multiply = (a, b) => a * b;

    return (
        <section>
            <p>2 + 2 = {2 + 2}</p>
            <h1>{myName}</h1>
            <p>My Friends List: {["- Alex ","- John ","- Waheed "," - Jordan"]}</p>
            <p>2 * 2 = {multiply(2, 24)}</p>
        </section>
  )
}

export default ExpressionJSX