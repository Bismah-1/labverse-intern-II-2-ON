
const Square = ({colorValue,hexValue,isDarkText}) => {
  return (
    <section
    className='square'
    style={{
         backgroundColor: colorValue,
        color: isDarkText? "black": "white"}}
    >
      <p>{colorValue ? colorValue :'Add a color'}</p>
       <p>{hexValue ? hexValue : null}</p>
    </section>
  )}



export default Square
