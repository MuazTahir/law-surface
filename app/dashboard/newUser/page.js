"use client";
import "./styles.css";
import { useRouter } from "next/navigation";

export default function Home() {
const router=useRouter()
const move=router;
  return (
    
    <div className="container">
      <div className="col-12">
        <div className="d-flex flex-column align-items-center  justify-content-center w-100 h-100 bg-white mt-5 tsx">
          <p className="text-center mb-4">
            Sorry, You can't add more users due to your current package limit.
          </p>
          <button
            className="btn btn-success mb-4"
            onClick={() => {
              router.push("/dashboard/settings/license-services");
            }}
          >
           License & Services
          </button>
        </div>
      </div>
    </div>
  );
}
