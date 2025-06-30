"use client";
import "./mytab.css"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import CreateFolder from "../AutoCreateFolder/autoCreatefolder";
import CaseSequenceForm from "../FilesSiting/fielssiting";
import OtherOption from "../otherOptions/otheroption";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MyTab() {
  const [color, setColor] = useState('#1d6732');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');
  const [color4, setColor4] = useState('black');
  const [borderBottom, setBorderBottom] = useState('2px solid #1d6732');
  const [borderBottom2, setBorderBottom2] = useState('');
  const [borderBottom3, setBorderBottom3] = useState('');
  const [borderBottom4, setBorderBottom4] = useState('');
  const colorChange = () => {
    setColor('#1d6732');
    setBorderBottom('4px solid #1d6732');
    // Reset other tabs
    setColor2('black');
    setBorderBottom2('');
    setColor3('black');
    setBorderBottom3('');
    setColor4('black');
    setBorderBottom4('black');
  };

  const colorChange2 = () => {
    setColor2('#1d6732');
    setBorderBottom2('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor3('black');
    setBorderBottom3('');
    setColor4('black');
    setBorderBottom4('');
  };
  const colorChange3 = () => {
    setColor3('#1d6732');
    setBorderBottom3('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor2('black');
    setBorderBottom2('');
    setColor4('black');
    setBorderBottom4('');
  };
  const colorChange4 = () => {
    setColor4('#1d6732');
    setBorderBottom4('4px solid #1d6732');
    // Reset other tabs
    setColor('black');
    setBorderBottom('');
    setColor3('black');
    setBorderBottom3('');
    setColor2('black');
    setBorderBottom2('');
  };

 
  const [folders, setFolders] = useState([{ id: 1, name: '' }]);
  
 

  let [activeTab, setActiveTab] = useState("Auto Create Folders");

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/settings/files', {
      action:"getFolderStructure"
    }).then((resp) => {

      if (resp.data.success && resp.data.fileData) {
        const fileData = resp.data.fileData ;
        console.log(fileData);

        // Reset fetched data into the form and state variables
        setFolders(fileData.autoCreateFolders.folders);


        // setAutoCreateFolderData({
        //   contractFolderName: fileData.autoCreateFolders.contractFolderName,
        //   poaFolderName: fileData.autoCreateFolders.poaFolderName
        // });
        // setOtherOptions(fileData.OtherOptions || {});
        // reset(fileData);  // Reset the form with the fetched data
        
        reset({
          ...fileData,
          ...fileData.autoCreateFolders,
          ...fileData.folders,
          ...fileData.contractFolderName,
          ...fileData.poaFolderName,
          ...fileData.OtherOptions
        })

        
        // reset(fileData.OtherOptions)
        
        // reset(fileData.poaFolderName)
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  const onSubmit = (data) => {
    data.folders = folders.filter(folder => folder.name);  // Filter out empty folder names
    console.log("All Form Data: ", data);

    if (data) {
      axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/settings/files', data).then(function(resp) {
        console.log(resp.data);
        toast.success(resp.data.message);
      }).catch(function(error) {
        console.error("Error:", error);
        toast.error("Oops, the settings could be saved");
      });
    }
  };
  const router=useRouter()
  const move=router;
  return (
    <div className="mytabDev">
   
   <div className="text-center mt-5">
          <h4 className=" text-success title-style">
            <i className="fa-solid fa-gears "></i> Files Setting
          </h4>
          <p>
          All settings related to local server access, new folders, and file number sequence
          </p>
          <button className="btn btn-success mb-3"  onClick={()=>{move.push('./')}}>All Settings</button>
        </div>

      <div className="row rounded pt-3 bg-white childDev" >
        <div>
          <>
          <ul className="nav nav-tabs mb-3 justify-content-center justify-content-md-start" id="ex1" role="tablist">
        <li onClick={colorChange} style={{ borderBottom: borderBottom }} className="nav-item" role="presentation">
          <button
            style={{ color: color}}
            className={`border-0 mx-2 btn-tab ${activeTab === 'Auto Create Folder' ? 'active' : ''}`}
            id="tab-The Case Facts"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Auto Create Folders')}
          >
            Auto Create Folders
          </button>
        </li>
        <li onClick={colorChange2} style={{ borderBottom: borderBottom2 }} className="nav-item" role="presentation">
          <button
            style={{ color: color2 }}
            className={`border-0 mx-2  btn-tab ${activeTab === 'Files Sequence Sittings' ? 'active' : ''}`}
            id="tab-The Counseling"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Files Sequence Sittings')}
          >
           Files Sequence Settings
          </button>
        </li>
        <li onClick={colorChange3} style={{ borderBottom: borderBottom3 }} className="nav-item" role="presentation">
          <button
            style={{ color: color3}}
            className={`border-0 mx-2 btn-tab ${activeTab === 'Other Options' ? 'active' : ''}`}
            id="tab-File Attachment"
            type="button"
            role="tab"
            onClick={() => setActiveTab('Other Options')}
          >
           Other options
          </button>
        </li>
       
      </ul>
            {/* <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Auto Create Folders' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActiveTab('Auto Create Folders')}
                  style={{fontSize:"13px",fontWeight:"bolder"}}
                >
                  Auto Create Folders
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Files Sequence Sittings' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActiveTab('Files Sequence Sittings')}
                  style={{fontSize:"13px",fontWeight:"bolder"}}
                >
                  Files Sequence Sittings
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Other Options' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActiveTab('Other Options')}
                  style={{fontSize:"13px",fontWeight:"bolder"}}
                >
                  Other Options
                </button>
              </li>
            </ul> */}

            <div className="myBorder">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tab-content">
                  {/* Auto Create Folders Tab */}
                  <div className={`tab-pane fade ${activeTab === 'Auto Create Folders' ? 'show active' : ''}`}>
                    <CreateFolder folders={folders} setFolders={setFolders} register={register} errors={errors} />
                  </div>

                  {/* Files Sequence Sittings Tab */}
                  <div className={`tab-pane fade ${activeTab === 'Files Sequence Sittings' ? 'show active' : ''}`}>
                    <CaseSequenceForm />
                  </div>

                  {/* Other Options Tab */}
                  <div className={`tab-pane fade ${activeTab === 'Other Options' ? 'show active' : ''}`}>
                    <OtherOption register={register} errors={errors} />
                  </div>
                </div>
                <div className="text-end mt-3 pt-3 saveBtn" >
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
