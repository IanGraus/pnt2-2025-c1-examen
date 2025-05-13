"use client";
import {useState, useEffect,use} from "react";

export default function MoviePage({params}){
    const {id} = use(params);
    const [movie,setMovie] = useState([null]);
   
  useEffect(() => {
        fetch(
            `https://mflixbackend.azurewebsites.net/api/movies/${id}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMovie(data);
            
        })
        .catch(error => console.log(error));
    }, []);

   
  return(
    <>
        <img src={movie.poster}></img>
        <h2>{movie.title}</h2>
        <h3>{movie.fullplot}</h3>
    </>
  )
}