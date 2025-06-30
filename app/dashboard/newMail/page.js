"use client";
import "./styles.css";
import dynamic from 'next/dynamic';
import React, { Component, useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { EditorState } from "draft-js";
import { useRouter } from "next/navigation";

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });


export default function Home() {
    


    let { register, handleSubmit, formState: { errors } } = useForm();

    let [content, setContent] = useState("");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const copyText = (e) => {
        // Get the text content of the clicked div
        const text = e.currentTarget.innerText;

        // Copy the text to the clipboard
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Text Copied")
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [errors2, setErrors] = useState({
    inputError: "",
    selectError: ""
  });

  const handleAdd = () => {
    let hasError = false;

    // Reset error state
    setErrors({
      inputError: "",
      selectError: ""
    });

    // Check if input or select is empty
    if (inputValue.trim() === "") {
      setErrors(prevState => ({ ...prevState, inputError: "Field Name is required!" }));
      hasError = true;
    }

    if (selectValue.trim() === "") {
      setErrors(prevState => ({ ...prevState, selectError: "Please select an option!" }));
      hasError = true;
    }

    // If there's an error, stop the function
    if (hasError) return;

    const newData = {
      fieldName: inputValue,
      selectOption: selectValue,
    };

    setDataArray([...dataArray, newData]);

    // Clear the fields
    setInputValue("");
    setSelectValue("");
  };


    let currentFile = [
        {
            client: "Client Addrress",
            email: "Client Email",
            ur: "Website URL",
            Pno: "Passport Number",
            number: "Phone Number",
            limit: "Cradit Limit",
            FileNo: "File NO.",
            Date: "Case Date",
            Cnumber: "Case Number",
            Eno: "Execution Number",
            Cadject: "Client Adjective",
            Cadject2: "Client Adjective(English)",
            Oname: "Opponent Name",
            Oname2: "Opponent Name(English)",
            OAdject: "Opponent Adjective",
            OAdject2: "Opponent Adjective(English)",
            Olegal: "Opponent Legal Form",
            Olegal2: "Opponent Legal Form(English)",
            Onation: "Opponent Natinality",
            Onation2: "Opponent Natinality(English)",


        }
    ]





    const saveData = (meraData) => {
        meraData.content = content;
        axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/user', meraData).then((resp) => {
            console.log(resp.data);
            toast.success(resp.data.message)

        })

    }



    const onEditorStateChange = (newState) => {
        setEditorState(newState);

        // Convert the editor content to HTML string
        const htmlString = stateToHTML(newState.getCurrentContent());

        setContent(htmlString);
        console.log(htmlString); // You can use this string as needed
    };
  const router=useRouter()
  const move=router;

    return <div style={{padding:"50px"}}>

<div className="d-flex justify-content-center gap-2 title-style " >
<i style={{color:"#247e3e"}} className="fal fa-mail-bulk pt-2" ></i>
  <h4 style={{color:"#247e3e"}} className="pt-1" > New Mail Template</h4>
</div>
    <div className="d-md-flex justify-content-center text-center ">
        <p className="small" >Mail templates help to speed up the work so that it says to prepare the design required for the update <br></br> or session without the need to enter any data from the user
             </p>
    </div>
    
        <div className="d-md-flex justify-content-center text-center mt-3 " >
            <button id="btn" className="text-align-center p-2 small   border-0 text-success" onClick={()=>{move.push('settings')}} >
                All Settings
            </button>
        </div>
        <div className="d-md-flex mt-3 gap-4" >
            <div>
            <div>
       <form onSubmit={handleSubmit(saveData)}>
       <div  id="main" className="container bg-white p-4">
       <div className="border-bottom mb-3 pb-2">
  <b className="small" style={{fontSize:"13px"}}>Template Details</b>
 
</div>

  

<div>
  <div className="row gy-3">
    {/* Arabic Form Name */}
    <div className="col-12 col-md-6">
  <b className="small text-danger">Template Name *</b>
  <input
    {...register("formNameAr", { required: true })}
    className="form-control rounded-2"
  />
  <p className="small text-muted ms-1 mt-2">Enter Template Name - اللغة العربية</p>
  {errors["formName-Ar"] && errors["formName-Ar"].type === "required" && (
    <div className="text-danger small mt-2">Please Enter Template Name</div>
  )}
</div>


    {/* English Form Name */}
    <div className="col-12 col-md-6">
  <b className="small text-danger">Template Name *</b>
  <input
    {...register("formNameEn", { required: true })}
    className="form-control rounded-2"
  />
  <p className="small text-muted ms-1 mt-2">
    Enter Template Name - English <br /> Language
  </p>
  {errors["formName-En"] && errors["formName-En"].type === "required" && (
    <div className="text-danger small mt-2">Please Enter Template Name</div>
  )}
</div>

  </div>

  {/*  template type */}
  <div className="row gy-3">
    <div className="col-12 col-md-6">
      <b className="small text-danger"> Template Type *</b>
      <select
  {...register("formLanguage", { required: true })}
  className="form-select rounded-2"
  onChange={(e) => console.log(e.target.value)}
>
  <option value="">Select...</option>
  <option value="arabic">Session</option>
  <option value="english">Update</option>
  <option value="both">Procedure</option>
  <option value="both">case File</option>
</select>

     
    </div>
    {/* template language */}

    <div className="col-12 col-md-6">
      <b className="small text-danger"> Template Language *</b>
      <select
  {...register("formLanguage", { required: true })}
  className="form-select rounded-2"
  onChange={(e) => console.log(e.target.value)}
>
  <option value="">Select...</option>
  <option value="arabic">Arabic Language</option>
  <option value="english">English Language</option>
  <option value="both">Arabic And English</option>
</select>

     
    </div>
  </div>
  <div className="row gy-3 mt-2">
  <div className="col-12 col-md-6">
      <b className="small text-danger"> Usage Methods *</b>
      <select
  {...register("formLanguage", { required: true })}
  className="form-select rounded-2"
  onChange={(e) => console.log(e.target.value)}
>
  
  <option value="">All</option>
  <option value="mail">Mail Tempaltes</option>
  <option value="messege">Whatsapp Messages</option>
</select>

     
    </div>
    </div>
</div>






</div>

</form>



       </div>
               

                <div id="main-blling" className="bg-white mt-3 " >
                    <b style={{fontSize:"13px"}}>Shortcuts</b>
                    <p className="small border-bottom" style={{fontsize:"11px",fontWeight:"light"}} >Just click on the required data and the quick code will be ocupied <br></br> automatically</p>

                    <div className="border rounded-2" >
                        <div className="input-group-prepend  ">
                            <span className="input-group-text" id="basic-addon1">
                                <i id="icon2" className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                        <div>
                            <div className="d-md-flex" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                {
                                    currentFile.map((file, index) => {
                                        return (
                                            <div
                                                key={file.index}
                                                className="text-start mt-3 ms-4"
                                            // Add onClick event listener here
                                            >
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between  ">
                                                    <h6 className="small">{file.client}</h6>
                                                    <h6 className="small">({file.client.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.email}</h6>
                                                    <h6 className="small">({file.email.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Pno}</h6>
                                                    <h6 className="small">({file.Pno.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.number}</h6>
                                                    <h6 className="small">({file.number.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.ur}</h6>
                                                    <h6 className="small">({file.ur.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.limit}</h6>
                                                    <h6 className="small">({file.limit.toLowerCase()})</h6>
                                                </div>
                                                <div className="d-md-flex mt-4 justify-content-between border-bottom">
                                                    <h6 style={{ width: '59px' }} className="small" >File Data</h6>
                                                    <span id="icon">
                                                        <i className="fa-solid fa-bag-shopping ms-5 ps-5"></i>
                                                    </span>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 mt-3 justify-content-between">
                                                    <h6 className="small">{file.FileNo}</h6>
                                                    <h6 className="small">({file.FileNo.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Date}</h6>
                                                    <h6 className="small">({file.Date.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Cnumber}</h6>
                                                    <h6 className="small">({file.Cnumber.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Cadject}</h6>
                                                    <h6 className="small">({file.Cadject.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Cadject2}</h6>
                                                    <h6 className="small">({file.Cadject2.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Oname}</h6>
                                                    <h6 className="small">({file.Oname.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Oname2}</h6>
                                                    <h6 className="small">({file.Oname2.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.OAdject}</h6>
                                                    <h6 className="small">({file.OAdject.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.OAdject2}</h6>
                                                    <h6 className="small">({file.OAdject2.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Onation}</h6>
                                                    <h6 className="small">({file.Onation.toLowerCase()})</h6>
                                                </div>
                                                <div id="text" onClick={copyText} className="d-md-flex gap-5 justify-content-between">
                                                    <h6 className="small">{file.Onation2}</h6>
                                                    <h6 className="small">({file.Onation2.toLowerCase()})</h6>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            <div id="main2" className="bg-white" >
                <div className="d-md-flex gap-4 mt-2 ps-2">
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}
                    />
                </div>


            </div>
        </div>


    </div>


}