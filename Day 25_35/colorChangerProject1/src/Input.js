import colorNames from 'colornames'

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault}>
      <label>Add Color Name:</label>
      <input 
      autoFocus
      type='text'
      placeholder='Type color name...'
      required
      value={colorValue}
      onChange={(e)=> {
        setColorValue(e.target.value);
        setHexValue(colorNames(e.target.value))
      }}

      />
      <button type='button'  //if we don't specify then we get submit button at default
      onClick={()=> setIsDarkText(!isDarkText)}
      >
        Change text color
      </button>
    </form>
  )
}

export default Input

