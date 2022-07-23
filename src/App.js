import React, {useState} from 'react'
import RecipeList from './RecipeList';
import '../css/app.css';

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  
  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: Math.random() * 9999,
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instrc',
      ingredients:[
        {id:Math.random() * 8800, name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <RecipeContext.Provider value={RecipeContextValue}>
            <RecipeList 
              recipes={recipes}
              />
    </RecipeContext.Provider>

  );
}

const sampleRecipes = [
  {
    id:1,
    name: "Plain chicken",
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat the chicken",
    ingredients:[
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id:2,
    name: "Plain pork",
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put salt on pork\n2. Put pork in oven\n3. Eat the pork",
    ingredients:[
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  }
]
export default App;
