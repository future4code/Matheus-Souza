import react from "react"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipeslistPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router=()=>{
    return (
    <BrowserRouter>
     <Switch>

      <Route exact path={"/"}>
       <RecipeslistPage/>
      </Route>
 
      <Route exact path={"/adicionar"}>
         <AddRecipePage/>
      </Route>

      <Route exact path={"/login"}>
        <LoginPage/>
      </Route>

      <Route exact path={"/detalhe/:id"}>
       <RecipeDetailPage/>
      </Route>

      <Route exact path={"/cadastro"}>
        <SignUpPage/>
      </Route>

     </Switch>
    </BrowserRouter>
    )
}
export default Router