"use client"
import General from "./Header/Header";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function Page(){
    const router=useRouter()
    const move=router
    return <div>
    <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
    <h4 className="text-success title-style" ><i class="fal fa-cogs" /> General Settings</h4>
    <p>
    All settings related to the system, such as office letterhead, office name, office logo and general office information.
    </p>
    <button className="btn btn-success" onClick={()=>{move.push('./')}}>All Settings</button>
    </div>
    <General></General>
  </div>



}