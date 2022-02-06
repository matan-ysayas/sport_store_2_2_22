
const BasicApi ="https://localhost:44318/api/Shoes"

export const GetData= async()=>{
    try{
  return await  fetch(BasicApi)
    .then((res)=> {return res.json()})
    .catch(error=>console.error("error",error))

}catch(error){
    console.error("error",error)
}
}


export const GetDataById=(id)=>{
    return fetch(`${BasicApi}/${id}`)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch(error=>console.error("error",error))
}