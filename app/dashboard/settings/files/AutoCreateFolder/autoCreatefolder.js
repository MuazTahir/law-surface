"use client";

import "./autofolder.css"

export default function CreateFolder({ setFolders, folders, register, errors }) {
  const addFolder = () => {
    setFolders([...folders, { id: folders.length + 1, name: '' }]);
  };

  const handleFolderNameChange = (id, value) => {
    // Ensure the folder's name is updated correctly in the folders array
    setFolders(folders.map(folder => folder.id === id ? { ...folder, name: value } : folder));
  };

  const removeFolder = (id) => {
    // Remove the folder by filtering it out based on its id
    setFolders(folders.filter(folder => folder.id !== id));
  };

  return (
    <div>
    <div className="row">
      <div className="col-md-6 ">
        <div><b style={{fontSize:"13px"}}>New Folders</b></div>
        <span style={{fontSize:"11px",fontWeight:"light"}}>The folders that the platform will create automatically inside the local server</span>

        {folders.map((folder) => (
          <div key={folder.id} className="form pt-2 flex-column">
            <div className="d-flex">
              <input
                className={`form-control w-50`}
                type="text"
                placeholder="Folder Name"
                value={folder.name} // Correctly binding the folder's name to the input value
                onChange={(e) => handleFolderNameChange(folder.id, e.target.value)}
                style={{fontSize:"11px"}} // Handling the change event
              />
              <button 
                type="button" 
                className="btn btn-danger ms-2 mt-2" 
                onClick={() => removeFolder(folder.id)}
              >
                -
              </button>
            </div>
          </div>
        ))}

      </div>
       

      <div className="col-md-3 my-2">
        <div><b style={{fontSize:"13px"}}>Contract Folder Name</b></div>
        <span style={{fontSize:"10px",fontWeight:"light"}}>To create an automatic folder in the client folder</span>
        <div className="form pt-2">
          <input 
            className={`form-control ${errors.contractFolderName ? 'is-invalid' : ''}`}
            type="text" 
            placeholder="Folder Name"
            {...register('contractFolderName', { required: "Contract Folder Name is required" })}
            style={{fontSize:"11px"}}
          />
          {errors.contractFolderName && <span className="text-danger">{errors.contractFolderName.message}</span>}
        </div>

        <div className="mt-3">
          <b  style={{fontSize:"13px"}}>POA Folder Name</b>
        </div>
        <span style={{fontSize:"11px",fontWeight:"light"}}>To create an automatic folder in the client folder</span>
        <div className="form pt-2">
          <input 
            className={`form-control ${errors.poaFolderName ? 'is-invalid' : ''}`}
            type="text" 
            placeholder="Folder Name"
            {...register('poaFolderName', { required: "POA Folder Name is required" })}
            style={{fontSize:"11px"}}
          />
          {errors.poaFolderName && <span className="text-danger">{errors.poaFolderName.message}</span>}
        </div>
      </div>
      <div className="text-center">
      <button type="button" className="btn btn-success mt-3  addbtn" onClick={addFolder}  >
          Add Folder
        </button>
        </div>
    </div>
    </div>
  );
}
