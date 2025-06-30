'use client';
// import './style.css';
import { useEffect, useRef, useState } from 'react';
// import Modal from 'bootstrap/js/dist/modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../modals.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadNotes } from '@/store/auth';
import caseAPI from '@/app/apiBridge/case';
import moment from 'moment';

export default function AddNotes({ caseId }) {
  const dispatch = useDispatch();

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let userID = useSelector((store) => {
    return store.authSlice.currentUser._id;
  });

  //   useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const saveNotes = (data) => {
    data.owner = company;
    data.case = caseId;
    data.createdDate = moment().startOf('day').valueOf();
    data.user = userID;

    caseAPI
      .saveNotes({ data })
      .then((resp) => {
        debugger;
        if (resp.data.success) {
          reset({ notes: '' });
          toast.success('Notes added successfully');
          dispatch(loadNotes(resp.data.meeting));
        }
      })
      .catch((e) => {
        toast.error('Oops, the notes cannot be added');
      });

    console.log(data);

    // toast.success(" Meeting Data are saved")
  };

  return (
    <div
      className="modal fade rounded"
      id="add_note_pop"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="add_note_pop"
      role="dialog"
    >
      <div
        className="modal-dialog justify-content-center modal-dialog-centered modal-lg"
        role="document"
      >
        <form onSubmit={handleSubmit(saveNotes)}>
          <div className="modal-content border-0 shadow-sm ">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                Add Note
                <p className="text-muted">
                  Organizing court sessions, preparation, and experience in a professional manner
                </p>
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <textarea
                {...register('notes', { required: true })}
                className="form-control form-control-lg"
                maxLength={1000}
                style={{ maxWidth: '1000px' }}
                autoComplete="off"
                id="note_details"
                placeholder="What's your note?"
                rows={5}
              ></textarea>
              {errors.notes && <div className="form-error">This field is required</div>}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary add_note_btn"
              >
                Add Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
