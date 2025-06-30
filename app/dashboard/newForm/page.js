"use client";
import "./newForm.css";

import React, { Component, useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";




const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });


export default function Home(){

  let move = useRouter();


  let {register,handleSubmit,formState:{errors}} = useForm();

  let [content, setContent] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
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





    const saveData = (meraData) => {
      meraData.action = "newForm"
      meraData.content = content;
    meraData.fieldArray = dataArray;
      // Log the selected value of formLanguage
 console.log(meraData);
 
 axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/settings/autoForm', meraData).then((resp)=>{
    console.log(resp.data);
    toast.success(resp.data.message)
  
 })
    };

    


   
    const onEditorStateChange = (newState) => {
      setEditorState(newState);

  // Convert the editor content to HTML string
  if (typeof window !== "undefined") {
    const htmlString = stateToHTML(newState.getCurrentContent());
    setContent(htmlString);
  }

  
};

return <div style={{padding:"50px"}} >  
<div className="d-flex justify-content-center gap-2 title-style " >
<i style={{fontSize:"19px",color:"#247e3e"}} className="fal fa-file-signature pt-1 " ></i>
  <h4 style={{color:"#247e3e"}} className="pt-1" > New Form</h4>
</div>
    <div className="d-md-flex justify-content-center text-center ">
        <p className="small" >The forms help to speed the work so that it says preparing the desired form for the contract or the POA
            <br></br>
            quickly and with high accuracy
             </p>
    </div>
    <div className="d-md-flex justify-content-center text-center mt-3 mb-5 " >
        <button onClick={()=>{
          move.push("settings")
        }} style={{color:"#247e3e"}} id="btn" className="text-align-center p-2 small   border-0 rounded-2 " >
            All Settings
        </button>
    </div>
    <div className="d-md-flex mt-3 gap-3 " >
       <div>
       <form onSubmit={handleSubmit(saveData)}>
       <div  id="main" className="container bg-white p-4">
       <div className="border-bottom mb-3 pb-2">
  <b className="small" style={{fontSize:"13px"}}>Form Details</b>
  <p className="small">Choose the name of the form and the language used in the form</p>
</div>

  

<div>
  <div className="row gy-3">
    {/* Arabic Form Name */}
    <div className="col-12 col-md-6">
  <b className="small text-danger">Form Name *</b>
  <input
    {...register("formNameAr", { required: true })}
    className="form-control rounded-2"
  />
  <p className="small text-muted ms-1 mt-2">Enter Form Name - اللغة العربية</p>
  {errors["formName-Ar"] && errors["formName-Ar"].type === "required" && (
    <div className="text-danger small mt-2">Please Enter Form Name</div>
  )}
</div>


    {/* English Form Name */}
    <div className="col-12 col-md-6">
  <b className="small text-danger">Form Name *</b>
  <input
    {...register("formNameEn", { required: true })}
    className="form-control rounded-2"
  />
  <p className="small text-muted ms-1 mt-2">
    Enter Form Name - English <br /> Language
  </p>
  {errors["formName-En"] && errors["formName-En"].type === "required" && (
    <div className="text-danger small mt-2">Please Enter Form Name</div>
  )}
</div>

  </div>

  {/* Form Language */}
  <div className="row gy-3 mt-3">
    <div className="col-12 col-md-6">
      <h6 className="small text-danger">Form Language *</h6>
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

      <b className="small text-muted ms-1 mt-2"style={{fontSize:"13px"}} >Form Language</b>
      {errors.formLanguage && errors.formLanguage.type === "required" ? (
        <div className="text-danger small mt-2">Please Select Form Language</div>
      ) : null}
    </div>
  </div>
</div>






</div>
<div id="main" className="container bg-white p-4 mt-2">
  {/* Fields Heading */}
  <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "40px" }}>
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
      <h5 className="small mb-2">Fields</h5>
      <p className="small text-muted mb-2">Complete the required fields in this form</p>
    </div>

    {/* Input and Select with Button */}
   
  <div className="row gy-3 align-items-center">
    <div className="col-12 col-md-4">
      <input
      style={{width:"111px"}}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Field Name"
        className="form-control  rounded-2"
      />
      {errors2.inputError && (
        <p className="text-danger small mt-2">{errors2.inputError}</p>
      )}
    </div>
    <div className="col-12 col-md-4">
      <select
      style={{width:"111px"}}
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        className="form-select rounded-2"
      >
        <option value="">Select...</option>
        <option value="text">text</option>
        <option value="Date">Date</option>
        <option value="Number">Number</option>
      </select>
      {errors2.selectError && (
        <p className="text-danger small mt-2">{errors2.selectError}</p>
      )}
    </div>
    <div className="col-12 col-md-4 text-md-start text-center">
      <button
        onClick={handleAdd}
        className="btn btn-success px-4 w-100 w-md-auto"
      >
        Add
      </button>
    </div>


  {/* Display the array */}
  <div className="mt-4">
    <ul className="list-group">
      {dataArray.map((item, index) => (
        <li key={index} className="list-group-item">
          <strong>Field Name:</strong> {item.fieldName}, <strong>Selected Option:</strong> {item.selectOption}
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>

  {/* Save Button */}
  <div className="mt-4 d-flex justify-content-center justify-content-md-end">
    <button id="btn3" type="submit" className="btn btn-success px-4">
      Save
    </button>
  </div>
</div>
</form>



       </div>
       <div style={{ height: "900px" }} id="main2" className="bg-white">
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