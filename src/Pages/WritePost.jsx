import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

const WritePost = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Desserts");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [steps, setSteps] = useState([""]);
  const [publishing, setPublishing] = useState(false);
  // Add Ingredient
  const handleAddIngredient = () => {
    if (ingredientName && quantity) {
      setIngredients([...ingredients, { name: ingredientName, qty: quantity }]);
      setIngredientName("");
      setQuantity("");
    }
  };

  // Handle Step Change
  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  // Add Step
  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handlePublish = () => {
  setPublishing(true);

  setTimeout(() => {
    setPublishing(false);
    alert("Blog Published ✅"); // optional
  }, 2000);
};

  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <div>
          <h1>Write a New Blog Post</h1>
          <p>Create and share your delicious recipe with the world.</p>
        </div>

        <div className="actions">
          {/* ✅ FIXED BACK BUTTON */}
          {/* <button onClick={() => navigate(-1)}>← Back</button> */}
          <button className="draft">Save Draft</button>
          <button className="publish" onClick={handlePublish}>
  Publish
</button>
        </div>
      </div>

      <div className="content">

        {/* LEFT SIDE */}
        <div className="left">

          {/* BLOG DETAILS */}
          <label>Blog Title</label>
          <input type="text" placeholder="Enter your recipe title here" />

          <label>Short Description</label>
          <textarea placeholder="Write a short summary..." />

          {/* IMAGE UPLOAD */}
          <label>Upload Cover Image</label>
          <div className="uploadBox">
            <div className="imagePlaceholder">📷</div>
            <button className="uploadBtn">Upload</button>
          </div>

          {/* CATEGORY + TIME */}
          <div className="row">
            <div>
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Desserts</option>
                <option>Quick Meal</option>
                <option>Vegetarian</option>
                <option>Non Veg</option>
                <option>Drinks</option>
              </select>
            </div>

            <div>
              <label>Prep Time</label>
              <input type="text" placeholder="15 min" />
            </div>

            <div>
              <label>Cook Time</label>
              <input type="text" placeholder="20 min" />
            </div>

            <div>
              <label>Servings</label>
              <input type="number" placeholder="2" />
            </div>
          </div>

          {/* INGREDIENTS */}
          <h3>Add Ingredients</h3>
          <div className="ingredient-input">
            <input
              type="text"
              placeholder="Ingredient"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAddIngredient}>Add</button>
          </div>

          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.name} - {item.qty}
              </li>
            ))}
          </ul>

          {/* STEPS */}
          <h3>Preparation Steps</h3>
          {steps.map((step, index) => (
            <div key={index} className="step">
              <input
                type="text"
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) =>
                  handleStepChange(index, e.target.value)
                }
              />
            </div>
          ))}

          <button className="add-step-btn" onClick={handleAddStep}>
            Add Step
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <h3>Settings</h3>

          <div className="settingBlock">
            <h4>Spacing</h4>
            <input type="range" className="a" min="0" max="50" />
            <input type="range" className="b"  min="0" max="50" />
          </div>

          <div className="settingBlock">
            <h4>Style</h4>
            <div className="radiusOptions">
              {[4, 8, 12, 16, 24].map((r) => (
                <button key={r}>{r}px</button>
              ))}
            </div>
          </div>

          <div className="settingBlock">
            <h4>Image Layout</h4>
            <button>2x2 Grid</button>
            <button>3x1 Row</button>
          </div>

          <h3>Tags</h3>
          <input type="text" placeholder="e.g. Dinner" />
          <button className="BI">Add Images</button>

          <div>
            <input type="checkbox" defaultChecked /> Allow Comments
          </div>
        </div>
{publishing && (
  <div className="publish-overlay">
    <div className="loader"></div>
    <p>Publishing...</p>
  </div>
)}
      </div>
    </div>
  );
};

export default WritePost;