import { response } from "express";
import { API_URL } from "./constantes";


//Crear tarea
export const postTask = async({
    title, descripcion, isComplete
})=>{
    return fetch(API_URL,{
        method:"POST",
        body: JSON.stringify({
            title,descripcion,isComplete
        }),
        headers:{
            "Content-Type": "application/json"
        },
    }).then((response)=>response.json());
};
//obtener tareas
export const getAllTask = async()=>{
    return fetch(API_URL).then((response)=>response.json());
};
//eliminar tareas
export const deleteTask = async(id)=>{
    return fetch(API_URL+`/${id}`), {
        method: "DELETE",
    }
};
//editar tareas
export const putTask = (id, {title, descripcion,isComplete})=>{
    return fetch(API_URL + `/${id}`),{
        method: "PUT",
        body: JSON.stringify({
            title,descripcion,isComplete
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
};