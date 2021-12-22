import React from 'react';
import { Container, Image } from 'semantic-ui-react';

const Accueil = () => {
    return (
        <h1 style={{ paddingTop: "0px", margin: "0px" }} >
            <Image src='https://www.thecocktaildb.com/images/media/drink/wfqmgm1630406820.jpg' fluid />
            Powered by MAN : Macias, Amid, Ndiaye
        </h1>
    );
}

export default Accueil;