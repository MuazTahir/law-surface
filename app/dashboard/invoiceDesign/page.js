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

    return <div className="container">
 <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
      <h4 className="text-success title-style" ><i className="fal fa-mail-bulk me-2" />Invoice Design</h4>
      <p>
      Invoices templates help to speed up the work, so that says to prepare the invoice for different clients with different designs
      </p>
      <button className="btn btn-success me-2"  onClick={()=>{router.push('../invoiceDesign')}}>Add</button>
      <button className="btn btn-success"  onClick={()=>{move.push('./')}}>All Settings</button>
   
      </div>
        
        <div className="d-md-flex mt-3 gap-3" >
            <div>
                <div id="main" className="container bg-white p-4 ">
                <div className="border-bottom mb-3 pb-2">
                    <b style={{fontSize:"13px"}}>Template Details</b>
</div>
                    <form onSubmit={handleSubmit(saveData)} >
                        <div className="row gy-3">

                            <div className="col-12 col-md-6">
                                <b className="small text-danger">Template Name Arabic <br /> Language</b>
                                <input {...register("nameAR", { required: true })} className="form-control rounded-2" />
                                {errors.nameAR && errors.nameAR.type == "required" ? <div className="password mt-2 " >Please Enter Name</div> : null}
                            </div>


                            <div className="col-12 col-md-6">
                                <b className="small text-danger">Template Name English <br /> Language</b>
                                <input {...register("nameEn", { required: true })} className="form-control rounded-2" />
                                {errors.nameAR && errors.nameAR.type == "required" ? <div className="password mt-2 " >Please Enter Name</div> : null}
                            </div>
                        </div>


                        <div className="mt-4 text-center d-md-flex justify-content-end ">
                            <button id="btn3" type="submit" className="btn btn-success small ms-5 px-4">Save</button>
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