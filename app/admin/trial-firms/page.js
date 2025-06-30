'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeletionConfirmation from "@/components/deleteConfirmation/deleteConfirmation";
import moment from "moment";

export default function Requests() {

    let [requests, setRequests] = useState([]);
    let [deleteState, setDeleteState] = useState(false);
    let [focusedRequest, setFocusedRequest] = useState(null);


    let [control, setControl] = useState({
        successMessage: '',
        dialogContent: '',
        action: ''
    });

    // let [successMessage, setSuccessMessage] = useState("");
    // let [dialogContent, setDialogContent] = useState("");
    // let [action, setAction] = useState("");

    useEffect(() => {

        axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/app/api/admin', {
            token: localStorage.getItem('token'),
            action: "get-requests-approved"
        }).then((resp) => {

            setRequests(resp.data.requests);

        }).catch((err) => {
            toast.error("Oops, we could not load the requests");
        });


    }, []);

    return <div className="flex-grow-1">

        <DeletionConfirmation

            onDelete={
                function () {
                    setRequests(requests.filter(i => i._id != focusedRequest._id));
                }
            }

            data={{
                _id: focusedRequest?._id,
                api_path: 'admin',
                action: control.action
            }} successMessage={control.successMessage} setState={setDeleteState} message={control.dialogContent} state={deleteState}></DeletionConfirmation>


        <table className="table full-width">
            <thead>
                <tr>
                    <th>Business Name</th>
                    <th>License Number</th>
                    <th>Business Contact</th>
                    <th>Office Capacity</th>
                    <th>Business Address</th>
                    <th>License Image</th>
                    <th>Trial Left (Days)</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {
                requests.map((request, i) => {
                    return <tr key={i}>
                        <td>{request.businessLegalName}</td>
                        <td>{request.tradeLicenseNumber}</td>
                        <td>{request.businessContactPhone}</td>
                        <td>{request.officeCapacity}</td>
                        <td>{request.businesssAddress}</td>
                        <td>{request.tradeLicenseCopyPath}</td>
                        <td>
                            {moment(request.expiry).diff(moment(request.trialStartedOn), 'days')}
                        </td>
                      
                    </tr>
                })
            }
        </table>

    </div>
}