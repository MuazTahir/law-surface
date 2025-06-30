import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authAPI from '../../apiBridge/auth';
import { toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePasswordModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const newPassword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = (data) => {
    authAPI
      .changePassword({
        newPassword: data.newPassword
      })
      .then((resp) => {
        if (resp.data.success) {
          toast.success('Password changed successfully');
        }
      })
      .catch(() => {
        toast.error('Oops, the password could not be updated successfully');
      });
    // console.log('Password changed successfully', data);
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#changePasswordModal"
      >
        Change Password
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="changePasswordModal"
        tabIndex="-1"
        aria-labelledby="changePasswordLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="changePasswordLabel"
              >
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-muted">Change the password for this account</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* New Password */}
                <div className="mb-3">
                  <label
                    htmlFor="newPassword"
                    className="form-label"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                    id="newPassword"
                    {...register('newPassword', {
                      required: 'New password is required',
                      minLength: { value: 6, message: 'Must be at least 6 characters' }
                    })}
                  />
                  {errors.newPassword && <div className="invalid-feedback">{errors.newPassword.message}</div>}
                  <small className="text-success">Strong</small>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label"
                  >
                    Confirm the New Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: 'Confirmation password is required',
                      validate: (value) => value === newPassword || 'Passwords do not match'
                    })}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                </div>

                {/* Modal Footer */}
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
