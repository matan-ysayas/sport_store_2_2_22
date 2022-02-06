let BasicApi="https://localhost:44318/api/Shirts";

export const GetShirtsData= async()=>{
    try{
        return await fetch(BasicApi)
        .then((res)=> {return res.json()})
        .catch(error=>console.error("error",error))
    }catch(error){
        console.error("error",error)
        }
}