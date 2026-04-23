import RestaurantCard from "./restaurant";
import { listRestraunts } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{
    let [resList, setResList] = useState(listRestraunts)
    useEffect(()=>{
        fetchData()
    }, [])
    const fetchData = async() =>{
      const data = await fetch("https://menu-feed.uengage.in/feed/v2/feed_66544.json?nocache=1776940308433");
        const jsonData = await data.json()
        console.log(jsonData.rows.menu[1].items)
    }
    return (
        <div className="mt-2">
            <button className="btn btn-success" onClick={()=>{
                resList = resList.filter(res=> res.data.avgRating> 4.5)
                setResList(resList)
            }}>Rating Filter</button>
            <div className="container-fluid d-flex flex-wrap justify-content-start gap-3 mt-2">
                   {
                resList.map(restList => (
                    <RestaurantCard key = {restList.data.id} resData = {restList}/>
                ))
            }
            </div>
        </div>
    )
}
export default Body;