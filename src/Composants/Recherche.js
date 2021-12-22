import { useEffect, useRef, useState } from 'react';
import { Button, Card, Container, Divider, Image, Input, Label, Message } from 'semantic-ui-react';


const Recherche = (props) => {

    const [nom, setNom] = useState("");
    const [cocktail, setCocktail] = useState([]);
    const [erreur, setErreur] = useState("");

    const inputNom = useRef();

    useEffect(()=>{
        inputNom.current.focus();
    })

    const renderCocktail = () => {
        return cocktail.drinks.map((iterateur) => {
            return (
                <Card key={iterateur.idDrink}>
                    <Card.Content onClick={() => {
                        props.history.push({
                            pathname: `/cocktail/${iterateur.idDrink}`, state: { cocktail: iterateur }
                        })
                    }} >
                        <Card.Header>
                            <p > {iterateur.strDrink}  </p>
                        </Card.Header>
                        <Image src={iterateur.strDrinkThumb}></Image>
                    </Card.Content>
                </Card>)
        })
    }

    const appelerAPI = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nom}`)
            .then((response) => response.json())
            .then((donne) => setCocktail(donne))
            .catch((erreur) => setErreur(erreur));
    };

    return (
        <Container  >
            <Divider horizontal></Divider>
            <Divider horizontal></Divider>
            <Label basic color='blue' pointing="right"> Cocktail  </Label>
            <Input type="text" placeholder='Margarita' ref={inputNom}  value={nom}  onChange={(e) => { setNom(e.target.value) }}/>
            <Button onClick={appelerAPI} color="blue"> Trouver </Button>
            <Divider horizontal></Divider>
            <Divider horizontal></Divider>
            <Divider/>
    
            <h4  >Résultats de la recherche</h4>
            {cocktail.drinks ? <Message> Il y a {cocktail.drinks.length} cocktails et sélectionner pour obtenir les ingrédients ! </Message> : undefined}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }} >

                {cocktail.drinks ? renderCocktail() : undefined}
            </div>
            {cocktail.message === "Page Not Found" ? <Message> </Message> : undefined}
        </Container>
    );
}

export default Recherche;