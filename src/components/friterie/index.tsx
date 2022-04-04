import { useEffect, useState } from "react";
import IFriterie from "../../core/model/iFriterie";
import friterieService from "../../core/services/friterieService";
import FriteriesList from "./friterieList";

export default function Friteries(){
    
    const [friteries, setFriteries]= useState<IFriterie[]>([]);
    
    // ICI ON VA CHERCHER LES DONNEES
    useEffect(() => {
        // Aller chercher mes données
        friterieService.getAll().then(setFriteries);
      }, []);

    return(
        <FriteriesList friteries={friteries}/>
    )
}