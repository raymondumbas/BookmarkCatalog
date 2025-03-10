import InputField from "./InputField.jsx"
import default_categories from "./default_categories.json"
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
    else{
      setSelectedCategoryLabels([]);
    }
  },[props.category]);

  async function getCategoryLabels(){   

    //  Default Category
    if(default_categories.categoryList.includes(props.category)){

      setSelectedCategoryLabels(default_categories[props.category].description);

    }

    // Custom Category
    else{
      // TO DO
    }

}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Retains other fields
  };

  async function handleSubmit(e){
    e.preventDefault();

    // Insert into bookmark table
    const bookmarksData = {
      name: data[0].name,
      user_id: "-1"
    }
    const {data, error} = await supabase.from("bookmarks").insert(formData).select();

    // Insert into category specific table
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