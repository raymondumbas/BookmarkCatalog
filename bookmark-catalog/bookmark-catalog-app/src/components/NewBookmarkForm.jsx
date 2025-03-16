import InputField from "./InputField.jsx";
import default_categories from "../config/default_categories.json";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Import Auth context
import { supabase } from "../api/supabaseClient"; // Import Supabase client

/**
 * @param {String} props.category - Category for new bookmark
 * @returns {JSX.Element} - Form for creating new bookmarks
 */
function NewBookmarkForm(props) {
  const { user } = useAuth(); // Get the logged-in user
  const [formData, setFormData] = useState({});
  const [selectedCategoryLabels, setSelectedCategoryLabels] = useState([]);
  let isDefaultCategory = false;
  useEffect(() => {
    if (props.category) {
      getCategoryLabels();

      // Check if selected catgory is a default category
      if (default_categories.categoryList.includes(props.category)) {
        isDefaultCategory  
      } 

    } else {
      setSelectedCategoryLabels([]);
    }
  }, [props.category]);

  async function getCategoryLabels() {
    if (default_categories.categoryList.includes(props.category)) {
      setSelectedCategoryLabels(default_categories[props.category].description);
    } else {
      // TODO: Handle custom categories
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    // Get category ID
    if()
    // Insert into the bookmarks table
    const bookmarksData = {
      name: formData.name,
      user_id: user.id, 
      category_id: props.category,
    };

    const { data, error } = await supabase.from("bookmarks").insert([bookmarksData]).select();

    if (data) {
      console.log(`Successfully submitted to bookmarks table:`, data);
    } else if (error) {
      console.error(`Error when submitting to bookmarks table:`, error);
    }

    // Insert into category-specific table (if needed)
  }

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
