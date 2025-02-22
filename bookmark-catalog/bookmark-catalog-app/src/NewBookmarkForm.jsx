import InputField from "./InputField.jsx"
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useEffect } from "react";

// For Local Development Use Only
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Connect to database
const supabase = createClient(supabaseURL, supabaseKey)

/**
 * @param {String} props.category - Category for new bookmark
 * @returns {JSX.Element} - Form for creating new bookmarks
 */
function NewBookmarkForm(props) {

  const [formData, setFormData] = useState({});
  const [selectedCategoryLabels, setSelectedCategoryLabels] = useState([]);

  useEffect(()=>{
    if(props.category){
      
      getCategoryLabels();

    }
  },[props.category]);

  async function getCategoryLabels(){   
  
    const {data,error} = await supabase
    .from("default_categories")
    .select()
    .eq("name", props.category);
    if(error){
      console.log(error)
    }
    else{
      setSelectedCategoryLabels(data[0].details);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Retains other fields
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {selectedCategoryLabels.map((field) => (
        <InputField 
          key={field} 
          label={field} 
          value={formData[field] || ""} 
          onChange={handleChange} 
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
export default NewBookmarkForm;