import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

const equipe = () => {
    return (
        <Container>
            <Divider horizontal></Divider>
            <Divider horizontal></Divider>
            <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
                Mohammed,
                Gorgui et
                David
            </h1>
            <Divider horizontal></Divider>
            <Divider horizontal></Divider>
            <p style={{ textAlign: "center" }} > 2021 </p>
        </Container>



    );
}

export default equipe;