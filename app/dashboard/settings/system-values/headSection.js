'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import systemAPI from '@/app/apiBridge/system';
import _ from 'lodash';

export default function HeadSection({ caseValues, setCaseValues, initialTitle }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  let color = useSelector((store) => {
    return store.authSlice.color;
  });

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  const onSubmit = async (data) => {
    debugger;

    // First, take the caseValue out of the main array
    let targetCaseValue = caseValues.find((i) => i.groupTitle == selectedGroupTitle);
    let no = 1;
    if (targetCaseValue) {
      const maxObj = _.maxBy(targetCaseValue.values, 'no');

      if (maxObj) {
        no = maxObj.no + 1;
      }
    }

    systemAPI
      .udateSystemValues({
        preAction: 'add',
        company,
        values: [
          {
            no,
            nameAr: data.arabic,
            nameEn: data.english
          }
        ],
        groupTitle: data.groupTitle
      })
      .then((resp) => {
        if (resp.data.success) {
          let uIndex = caseValues.findIndex((i) => i._id == resp.data.updatedCaseValue._id);

          if (uIndex !== -1) {
            caseValues[uIndex] = resp.data.updatedCaseValue;
            setCaseValues([...caseValues]);
          }

          toast.success('The system value has been updated successfully');
        }
      })
      .catch(() => {
        toast.error('Oops, the system value could not be updated!');
      });

    // try {
    //   // const res = await fetch('/api/case-values', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify({
    //   //     values: [
    //   //       {
    //   //         no: caseValues.length + 1,
    //   //         arabic: data.arabic,
    //   //         english: data.english
    //   //       }
    //   //     ],
    //   //     groupTitle: data.groupTitle
    //   //   })
    //   // });

    //   if (res.ok) {
    //     const responseData = await res.json();
    //     setCaseValues([...caseValues, responseData.data]);
    //     toast.success('Added successfully');
    //     reset();
    //   } else {
    //     const errorData = await res.json();
    //     toast.error(errorData.error || 'Failed to add case value');
    //   }
    // } catch (error) {
    //   toast.error('Something went wrong');
    // }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this record?')) {
      try {
        let targetCaseValue = caseValues.find((i) => i.groupTitle == selectedGroupTitle);
        let targetIndex = caseValues.indexOf(targetCaseValue);
        if (targetCaseValue) {
          let deletedValue = targetCaseValue.values.find((i) => i._id == id);
          if (deletedValue) {
            const cIndex = targetCaseValue.values.indexOf(deletedValue);
            if (cIndex !== -1) {
              let copied = JSON.parse(JSON.stringify(targetCaseValue));
              copied.values.splice(cIndex, 1);
              systemAPI
                .udateSystemValues({
                  preAction: 'delete',
                  company,
                  values: copied.values,
                  groupTitle: selectedGroupTitle
                })
                .then((resp) => {
                  if (resp.data.success) {
                    caseValues[targetIndex] = copied;
                    setCaseValues([...caseValues]);
                    toast.success('The system value has been deleted successfully');
                  }
                })
                .catch(() => {
                  toast.error('Oops, the system value could not be deleted!');
                });
            }
          }
        }
      } catch (e) {
        toast.error('Oops, the system value could not be updated!');
      }
      // caseValues.filter((i) => i.groupTitle == selectedGroupTitle);
    }
  };

  const handleEdit = async (value) => {
    debugger;
    const newArabic = prompt('Enter new Arabic value:', value.nameAr);
    const newEnglish = prompt('Enter new English value:', value.nameEn);

    if (newArabic && newEnglish) {
      const updatedData = {
        no: value.no,
        _id: value._id,
        nameAr: newArabic,
        nameEn: newEnglish
      };

      let targetCaseValue = caseValues.find((i) => i.groupTitle == selectedGroupTitle);
      let targetIndex = caseValues.indexOf(targetCaseValue);
      if (targetCaseValue) {
        let deletedValue = targetCaseValue.values.find((i) => i._id == value._id);
        if (deletedValue) {
          const cIndex = targetCaseValue.values.indexOf(deletedValue);
          if (cIndex !== -1) {
            let copied = JSON.parse(JSON.stringify(targetCaseValue));
            copied.values[cIndex] = updatedData;
            systemAPI
              .udateSystemValues({
                preAction: 'update',
                company,
                values: copied.values,
                groupTitle: selectedGroupTitle
              })
              .then((resp) => {
                if (resp.data.success) {
                  caseValues[targetIndex] = copied;
                  setCaseValues([...caseValues]);
                  toast.success('The system value has been updated successfully');
                }
              })
              .catch(() => {
                toast.error('Oops, the system value could not be updated!');
              });
          }
        }
      }
    } else {
      toast.error('Edit cancelled or incomplete');
    }
  };

  useEffect(() => {
    if (initialTitle) {
      setSelectedGroupTitle(initialTitle.groupTitle);
    }
  }, [initialTitle]);

  const groupTitles = [...new Set(caseValues.map((item) => item.groupTitle))].map((title) => title);

  const [selectedGroupTitle, setSelectedGroupTitle] = React.useState('');

  const handleGroupTitleClick = (title) => {
    setSelectedGroupTitle(title);
  };

  const filteredCaseValues = selectedGroupTitle
    ? caseValues.find((value) => value.groupTitle === selectedGroupTitle)
    : { values: [] };

  return (
    <div>
      <ToastContainer />
      <div className="container my-2 bg-light py-2 px-3 rounded-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="row align-items-end g-3"
        >
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-start">
            <h2 className="fwb-style">New Value</h2>
            <p className="mb-0 fwl-style">You can add a new value to any of the selected groups.</p>
          </div>
          <div className="col-12 col-lg-3">
            <label
              htmlFor="arabic"
              className="form-label fw-style"
            >
              Case Value <small className="text-danger">*</small>
            </label>
            <small className="d-inline ms-5 text-muted mb-1 fwl-style">Arabic</small>
            <div className="input-group">
              <input
                type="text"
                id="arabic"
                placeholder="Insert new system value in ED"
                className={`form-control ${errors.arabic ? 'is-invalid' : ''}`}
                {...register('arabic', { required: 'This is a required field' })}
                style={{ fontSize: '11px' }}
              />
              <button
                className="btn btn-success"
                type="button"
                title="Translate"
                onClick={() => names_translate('new_ar_value')}
              >
                <i className="fa-light fa-language"></i>
              </button>
            </div>
            {errors.arabic && <div className="invalid-feedback">{errors.arabic.message}</div>}
          </div>
          <div className="col-12 col-lg-3">
            <label
              htmlFor="english"
              className="form-label fw-style"
            >
              Case Value <small className="text-danger">*</small>
            </label>
            <small className="d-inline ms-5 text-muted mb-1 fwl-style">English</small>
            <div className="input-group">
              <input
                type="text"
                id="english"
                placeholder="Insert new system value in ENG"
                className={`form-control ${errors.english ? 'is-invalid' : ''}`}
                {...register('english', { required: 'This is a required field' })}
                style={{ fontSize: '11px' }}
              />
              <button
                className="btn btn-success"
                type="button"
                title="Translate"
                onClick={() => names_translate('new_ar_value')}
              >
                <i className="fa-light fa-language"></i>
              </button>
            </div>
            {errors.english && <div className="invalid-feedback">{errors.english.message}</div>}
          </div>
          <div className="col-12 col-lg-2">
            <label
              htmlFor="GroupTitle"
              className="form-label fw-style"
            >
              Group Title <small className="text-danger">*</small>
            </label>
            <select
              id="groupTitle"
              className={`form-select ${errors.groupTitle ? 'is-invalid' : ''}`}
              defaultValue=""
              {...register('groupTitle', {
                required: 'This is a required field'
              })}
              style={{ fontSize: '11px' }}
            >
              <option
                value=""
                disabled
              >
                Select Group
              </option>
              {groupTitles.map((title, idx) => (
                <option
                  key={idx}
                  value={title}
                >
                  {title}
                </option>
              ))}
            </select>
            {errors.groupTitle && <div className="invalid-feedback">{errors.groupTitle.message}</div>}
          </div>
          <div className="col-12 col-lg-1">
            <button
              type="submit"
              className="btn align-items-center btn-success"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="d-flex container text-start mt-5">
        <div className="col-lg-3">
          <label className="fw-bold mb-4 fwb-style me-2">Group Title</label>
          <button
            className="btn btn-success border-0 mx-1 mb-2 fwb-style"
            onClick={() => setSelectedGroupTitle('')}
          >
            Show All
          </button>
          {groupTitles.map((title, idx) => (
            <span
              key={idx}
              className={
                'btn d-block mt-1 border-0 text-start btn-outline-primary mx-1 ' +
                (selectedGroupTitle == title ? 'selected-li ' + color : '')
              }
              onClick={() => handleGroupTitleClick(title)}
            >
              {title}
            </span>
          ))}
        </div>

        <div className="table-responsive text-center col-lg-9 ">
          <table className="table">
            <thead className="thead-light">
              <tr className="border-2">
                <th>No.</th>
                <th>اللغة العربية</th>
                <th>English Language</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredCaseValues.values.map((value, index) => (
                <tr
                  key={value._id}
                  className="border-white"
                >
                  <td className="col-lg-1">{value.no}</td>
                  <td className="col-lg-4">{value.nameEn}</td>
                  <td className="col-lg-4">{value.nameAr}</td>
                  <td className="col-lg-3">
                    <span className="btn text-secondary">
                      <i className="fa-regular fa-eye"></i>
                    </span>
                    <span
                      onClick={() => handleEdit(value)}
                      className="btn text-success"
                    >
                      <i className="fa-regular fa-pen-to-square"></i>
                    </span>
                    <span
                      onClick={() => handleDelete(value._id)}
                      className="btn text-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
              ))}
              {filteredCaseValues.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center"
                  >
                    No case values found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
