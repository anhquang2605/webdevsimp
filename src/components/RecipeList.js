import React from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'
import { useContext } from 'react'
export default function RecipeList({recipes}) {
  const {handleRecipeAdd} = useContext(RecipeContext);
  return (
    <>
        <div className="recipe-list">
          <div>
          {recipes.map(
              item => (
                  <Recipe 
                  key={item.id} {...item}
                  >
                  </Recipe>
              )
          )}
          </div>
          <div className="recipe-list__add-recipe-btn-container">
            <button 
            className="btn btn--primary"
            onClick={handleRecipeAdd}
            >
              Add Recipe
            </button>
          </div>
        </div>
    </>
  )
}
