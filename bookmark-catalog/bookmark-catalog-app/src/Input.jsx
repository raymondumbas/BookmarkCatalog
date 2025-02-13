/*
    User Input with formatted label and box
 */
function Input(props) {
    
    return (
        <>
            <label>
                {props.label}
                <input 
                    name = {props.label}
                    value = {props.value}
                    onChange = {props.onChange} 
                />
            </label> 
        </>
    );
}
  
  export default Input;