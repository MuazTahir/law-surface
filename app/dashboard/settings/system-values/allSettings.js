import React from "react";
import { useRouter } from "next/navigation";
function AllSettingsSection() {
  const router=useRouter()
  const move=useRouter();
  return (
    <div className="container col-12 col-lg-6 text-center my-5  rounded-4 py-2 ">
      <h4 className="text-success title-style" ><i class="fa-solid fa-language" /> System Values</h4>
      <p>
        The fixed system values that are used by all types of operations and
        functions on the system, such as courts names and cases status
      </p>
      <button className="btn btn-success" onClick={()=>{move.push('./')}} >All Settings</button>
    </div>
  );
}

export default AllSettingsSection;
