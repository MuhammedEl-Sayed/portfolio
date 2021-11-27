import styled from "styled-components";
import React from "react";
import { Html } from "@react-three/drei";

export const GridContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
`

export const GridItem1 = styled.div`
    grid-column: 1;
    grid-row: 1;
`


export const GridItem2 = styled.div`
    grid-column: 1;
    grid-row: 1/ 2;
`

export const FlexboxContainer = styled.div `
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    
    padding: 0;
    margin: 50px 0px 0px 0px;
    height: 50%;
    width: 100%;
    justify-content: center;
    font-family: Mont;
    font-size: 5rem;
    color: white;
    
`

export const SubText = styled.h2`
    font-size: 2rem;
`
