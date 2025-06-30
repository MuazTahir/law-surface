"use client";
import { setCompany, setLoadng, setUser } from '@/store/auth';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function SessionCheck({children, router, dontRedirect}){

    // router = router || useRouter();
    let dispatch = useDispatch();

    let loggedIn = useSelector(store=>{
        return store.authSlice.currentUser._id != undefined;
    });

    useEffect(()=>{
        const headers = {
            'Authorization':localStorage.getItem('token')
        }
        dispatch(setLoadng("loading"));
        axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/auth',
             {                
                action:"session-check"
            },
            {
                headers:headers
                
            }
    ).then((resp)=>{
        console.log("fffffffffffffffffffffffffffff")
        console.log(resp.data);
        if(resp.data.user){
            console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                dispatch(setLoadng("loaded-li"));
                // jo user mila h usko store m send karden takay session resume hojye
                dispatch(setUser(resp.data.user));
                dispatch(setCompany(resp.data.user.company));

            }else{
                dispatch(setLoadng("loaded-nli"));
                router && router.push('/access');
            }

        })
        .catch((err)=>{
            console.log(err);
            dispatch(setLoadng("loaded-nli"));
            dispatch(setLoadng(false));
            // router.push('/access');
        })

    }, [])

    return <>
        {loggedIn ? children : dontRedirect ? children : null}
    </>

}