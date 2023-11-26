"use client"

import { ATMProvider } from "../GlobalRedux/ATMprovider"
import ATMComponent from "../componentes/atm"

export default function Home3(){

    document.title = "Ex3";

    return(
        <ATMProvider>
            <ATMComponent/>
        </ATMProvider>
    )
}