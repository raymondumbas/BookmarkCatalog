/*
    User Input with formatted label and box
 */
function InputField(props) {
    
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
  
  export default InputField;