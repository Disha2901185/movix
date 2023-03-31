import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTdmZmI2ZDlmZjRlZDlhNDEyMmQ0MDgwMmI5ZDJhMiIsInN1YiI6IjY0MGIzNjFlOWRlZTU4MDA3ZjExZDdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UW20a2on1mtR1jMk7tOXqnDAJT-mW3ym-SDfk8DqRO8"

const headers={
    Authorization:"bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi= async(url,params)=>{
    try{
        const {data}=await axios.get(
            BASE_URL + url,
            {
                headers,
                params
            }
        )
        return data;
    }
    catch(err){
        console.log(err)
        return err
    }
}