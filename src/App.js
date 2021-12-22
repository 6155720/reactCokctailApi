import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Recherche from './Composants/Recherche';
import DetailCocktail from './Composants/DetailCocktail';
import Page404 from './Composants/Page404';
import equipe from './Composants/equipe';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
          <h1 style={{backgroundColor: "powderblue", textAlign:"center", padding: "25px", fontFamily:"cursive"}} > COCKTAILS POUR FÊTARD </h1>

        <Menu size='large' >
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/" exact > Accueil </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/recherche" > Recherche de boissons </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/cocktail" > Détails du cocktail </Menu.Item>
          <Menu.Item as={NavLink} activeStyle={{ color: "blue", fontWeight: "bold" }} to="/equipe" > Equipe </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/recherche" component={Recherche} exact/>
          <Route path="/cocktail/:codeDrink" component={DetailCocktail} exact/>
          <Route path="/equipe" component={equipe} exact/>
          {/* <Route path="*" component={Page404}  /> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
