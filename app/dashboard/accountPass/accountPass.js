import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import authAPI from '../../apiBridge/auth';
import { toast } from 'react-toastify';

const ChangePasswordModal = () => {
  let closeB = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    authAPI
      .verifyPass({
        newPassword: data.newPassword
      })
      .then((resp) => {
        if (resp.data.success) {
          toast.success('Password changed successfully');
          closeB.current.click();
        }
      })
      .catch(() => {
        toast.error('Invalid User!');
      });
  };

  return (
    <div>
      {/* Button to trigger modal */}

      {/* Modal */}
      <div
        className="modal fade"
        id="accountPassModal"
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
                Verify Password
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
                    Verify Password
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
                  {errors.newPassword && <div className="text-danger">This field is required</div>}
                </div>

                {/* Modal Footer */}
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Change
                  </button>
                  <button
                    ref={closeB}
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
