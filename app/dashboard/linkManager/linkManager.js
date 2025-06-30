import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import api from '../../apiBridge/api';
import { useSelector } from 'react-redux';

const QuickLinksModal = () => {
  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      links: [{ title: '', link: '' }] // Initial single entry
    }
  });

  useEffect(() => {
    api
      .getUserLinks({ userId: user?._id })
      .then((resp) => {
        const linksData = resp.data.links || [{ title: '', link: '' }];
        reset({ links: linksData });
      })
      .catch((err) => {
        toast.error('Failed to fetch links');
        console.error(err);
      });
  }, [reset, user?._id]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links'
  });

  const onSubmit = (data) => {
    api
      .updateUserLinks(data)
      .then((resp) => {
        if (resp.data.success) {
          toast.success('Links have been updated');
        }
      })
      .catch((resp) => {
        if (resp.data.success) {
          toast.success('Links have been updated');
        }
      });

    console.log('Submitted Data:', data);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#quickLinksModal"
      >
        Quick Links
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="quickLinksModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Quick Links</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-muted">Quick links help to enter sites with a click of a button from the home page</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => (
                  <div
                    className="row mb-2"
                    key={item.id}
                  >
                    <div className="col-1 d-flex align-items-center">{index + 1}</div>

                    {/* Title Input */}
                    <div className="col-4">
                      <input
                        type="text"
                        className={`form-control ${errors.links?.[index]?.title ? 'is-invalid' : ''}`}
                        {...register(`links.${index}.title`, { required: 'Title is required' })}
                        placeholder="Enter title"
                      />
                      {errors.links?.[index]?.title && (
                        <div className="invalid-feedback">{errors.links[index].title.message}</div>
                      )}
                    </div>

                    {/* Link Input */}
                    <div className="col-5">
                      <input
                        type="url"
                        className={`form-control ${errors.links?.[index]?.link ? 'is-invalid' : ''}`}
                        {...register(`links.${index}.link`, {
                          required: 'Link is required',
                          pattern: {
                            value: /^(https?:\/\/)?([\w\d\-_]+(\.[\w\d\-_]+)+)(\/[^\s]*)?$/,
                            message: 'Enter a valid URL'
                          }
                        })}
                        placeholder="Enter link"
                      />
                      {errors.links?.[index]?.link && (
                        <div className="invalid-feedback">{errors.links[index].link.message}</div>
                      )}
                    </div>

                    {/* Delete Button */}
                    <div className="col-2 d-flex align-items-center">
                      <button
                        type="button"
                        className="btn btn-link text-danger"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add New Link Button */}
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => append({ title: '', link: '' })}
                >
                  Add New Link
                </button>

                {/* Modal Footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save
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

export default QuickLinksModal;
