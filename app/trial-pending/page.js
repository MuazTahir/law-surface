"use client";
import { useSelector } from 'react-redux';
import './trial-pending.css';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import SessionCheck from '@/components/session-check/session-check';

export default function TrialPendingRedux() {

    let router = useRouter();


    return <ReduxProvider>
            <SessionCheck router={router}>
                <TrialPending></TrialPending>
            </SessionCheck>
    </ReduxProvider>

}

function TrialPending() {

    debugger;


    let user = useSelector((store) => {
        return store.authSlice.currentUser
    });

    let status = useSelector((store) => {
        return store.authSlice.loading;
    })

    // if (!localStorage.getItem('token') || status == "loaded-nli") {
    //     router.push("/access");
    // }else if(localStorage.getItem('token') && status != "loaded-nli"){

    //     if(!user._id){
    //         router.push("/access");
    //     }

    // } else if (status == "loading") {
    //     return <div id="trial-pending">
    //         <div className='flex j-center a-center notice-box' style={{backgroundColor:"initial", boxShadow:"none"}}>
    //             <p className='text-center'>
    //               <img className='loading-img' src="images/spin.gif" />
    //             </p>
    //         </div>
    //     </div>
    // }

    return <div id="trial-pending">

        <div className='flex j-center a-center notice-box'>
            <p className='text-center'>
                Dear {user.fullName}, we have received your trial request and will respond you shortly!
            </p>
        </div>

    </div>

}