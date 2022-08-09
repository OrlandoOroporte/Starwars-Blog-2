import React , {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Personaje = () =>{
    const params = useParams()  
    const {store} = useContext(Context)
    const character = store.people.find((item,index) => {
        return index == params.index
    }) 
    console.log(character, params, store)
return (
    <>
    <h1>{character?.name}</h1>
    </>
)
}