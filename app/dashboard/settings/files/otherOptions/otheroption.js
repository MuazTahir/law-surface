"use client";

export default function OtherOption({ register, errors }) {
  return (
    <div className="row mb-4 pt-4">
      <div className="col-md-5">
        <span><b>Client default credit limit</b></span>
        <div className="pt-2">
          <input 
            className="form-control w-75" 
            placeholder=''
            {...register('creditLimit') }
          />
          {/* {errors.creditLimit && <span className="text-danger">{errors.creditLimit.message}</span>} */}
        </div>

        <div className="d-flex pt-3">
          <input 
            type="checkbox" 
            {...register('newFileNumber')}
          />
          <span><b>Create a new File number for related lawsuits</b></span>
        </div>
      </div>

      <div className="col-md-4">
        <span><b>Enforce a credit limit</b></span>
        <div className="d-flex align-items-center">
          <div>
            <input 
              type="checkbox" 
              {...register('enforceCreditLimit')}
            />
            <span><b>Do not allow client to be charged any fees that may exceed the credit limit</b></span>
          </div>
        </div>

        <div className="d-flex align-items-center pt-2">
          <div>
            <input 
              type="checkbox" 
              {...register('alertAccountants')}
            />
            <span><b>Alert accountants when a new lawsuit is added</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}
