import { useForm } from 'react-hook-form';
import caseAPI from '@/app/apiBridge/case';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { loadWorkTimer } from '@/store/auth';

export default function AddWorkTimer({ caseId }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useForm();

  let searchedFileNo = watch('fileNo');

  const dispatch = useDispatch();

  const [availableCases, setAvailableCases] = useState([]);

  const getCaseByFile = (e) => {
    caseAPI
      .getCaseByFile(e.target.value)
      .then((resp) => {
        setAvailableCases(resp.data.cases);
      })
      .catch((err) => {
        toast.error('Oops, the cases could be loaded for this file');
      });
  };

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let createdBy = useSelector((store) => {
    return store.authSlice.currentUser._id;
  });

  const onSave = (data) => {
    data.owner = company;
    data.createdBy = createdBy;

    caseAPI
      .addWorkTimer(data)
      .then((resp) => {
        if (resp.data.success) {
          dispatch(loadWorkTimer());
          toast.success('The worktime has been processed successfully');
        }
      })
      .catch(() => {
        toast.error('The worktime could not be processed');
      });
  };

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  return (
    <div
      className="modal fade"
      id="start_new_timer"
      tabIndex={-1}
      aria-labelledby="start_new_timer_label"
      aria-hidden="true"
      // style={{ height: '350px', top: '100px' }}
    >
      <div class="modal-dialog modal-lg modal-dialog-centered justify-content-center">
        <form onSubmit={handleSubmit(onSave)}>
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5
                class="modal-title"
                id="timerModalLabel"
              >
                Start the working timer
                <p className="text-muted">
                  Organizing court sessions, preparation, and experience in a professional manner
                </p>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                You can start more than one timer at the same time so that the time spent performing the required tasks
                is recorded
              </p>
              <div className="row">
                <div className="col-md-7">
                  <div class="mb-3">
                    <label class="fw-bold">File No.</label>
                    <div class="d-flex">
                      <input
                        onInput={(e) => {
                          setValue('fileNo', e.target.value);
                        }}
                        type="text"
                        class="form-control border-danger"
                        placeholder="Example: 1052"
                      />

                      <button
                        type="button"
                        onClick={(e) => getCaseByFile(e)}
                        class={'btn btn-success ms-2 ' + (getValues('fileNo') ? '' : 'disabled')}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 file-case-box">
                      <table className="full-width">
                        <thead>
                          <tr>
                            <th>File No.</th>
                            <th>Case Number</th>
                            <th>Case Type</th>
                            <th>File Type </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {availableCases.map((caseItem, i) => {
                            return (
                              <tr key={i}>
                                <td>{caseItem.genFile}</td>
                                <td>{caseItem.caseNo}</td>
                                <td>{caseItem.matchedCaseType.values['name' + language]}</td>
                                <td>{caseItem.matchedCaseType.values['name' + language]}</td>
                                <td>
                                  <input
                                    {...register('selectedCase', { required: true })}
                                    value={caseItem._id}
                                    type="radio"
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div class="row">
                    <div className="col-md-6">
                      <span class="text-muted">Automatic Time Calculation</span>
                    </div>
                    <div className="col-md-6">
                      <button class="btn btn-success px-4">▶ Start timer</button>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center my-3">
                    <span class="text-muted">or</span>
                  </div>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <label>Hour</label>
                      <input
                        type="number"
                        class="form-control"
                        {...register('hour')}
                      />
                    </div>
                    <div class="col-md-6">
                      <label>Minute</label>
                      <input
                        type="number"
                        class="form-control"
                        {...register('minute')}
                      />
                    </div>
                  </div>
                  <div class="mt-3">
                    <textarea
                      class="form-control full-width"
                      placeholder="Please write details here"
                      {...register('details')}
                    ></textarea>
                  </div>
                  <div class="text-center mt-3">
                    <button class="btn btn-success w-100">Save</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-link text-muted"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
