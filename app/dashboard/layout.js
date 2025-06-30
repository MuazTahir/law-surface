'use client';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import Navbar from './navbar/navbar';
import SessionCheck from '@/components/session-check/session-check';
import { useRouter } from 'next/navigation';
import AddRemainder from '@/components/addReminder/addremainder';
import AddMeeting from '@/components/addMeeting/addmeeting';
import { useEffect, useState } from 'react';
import ChooseLanguageModal from '@/components/languageModel/languageModel';
import ChooseColorModal from '@/components/colorModal/colorModal';
import AddAdminstrative from '@/components/addAdminstrative/addAdminstrative';
import { useSelector } from 'react-redux';
import AxiosInterceptor from '@/components/axiosInterceptor/axiosInterceptor';
import DasboardFooter from '@/components/dashboardFooter/dashboardFooter';
import './dashboard.css';

function LoadingStatus() {
  const loadingStatus = useSelector((item) => {
    return item.authSlice.loadingStatus;
  });
  return (
    <>
      {loadingStatus && (
        <div id="loading-bar">
          <img src="/images/loading-update.gif" />
        </div>
      )}
    </>
  );
}

export default function Dashboard({ children }) {
  let router = useRouter();
  let [showReminder, setShowRemainder] = useState();
  let [showMeeting, setShowMeeting] = useState(false);
  let [showLanguageModal, setShowLanguageModal] = useState(false);
  let [showColorModal, setShowColorModal] = useState(false);
  let [adminstrativeStatus, setShowAdminstrative] = useState(false);

  useEffect(() => {
    if (showReminder || showMeeting || showLanguageModal || showColorModal || adminstrativeStatus) {
      // Dynamically import Bootstrap Modal for JavaScript control
      import('bootstrap/dist/js/bootstrap.bundle').then(({ Modal, Dropdown }) => {});
    }
  }, [showReminder, showMeeting, showLanguageModal, showColorModal, adminstrativeStatus]);

  return (
    <>
      <ReduxProvider>
        {/* <LoadingStatus></LoadingStatus> */}
        <AxiosInterceptor></AxiosInterceptor>
        <SessionCheck router={router}>
          <Navbar
            showReminder={showReminder}
            setShowRemainder={setShowRemainder}
            showMeeting={showMeeting}
            setShowMeeting={setShowMeeting}
            setShowLanguageModal={setShowLanguageModal}
            setShowColorModal={setShowColorModal}
            setShowAdminstrative={setShowAdminstrative}
          ></Navbar>
          <div id="appPanel">{children}</div>
          <AddRemainder
            setShowRemainder={setShowRemainder}
            remainderingStatus={showReminder}
          ></AddRemainder>
          <AddMeeting
            setShowMeeting={setShowMeeting}
            meetingStatus={showMeeting}
          ></AddMeeting>
          <ChooseLanguageModal
            showLanguageModal={showLanguageModal}
            setShowLanguageModal={setShowLanguageModal}
          />
          <ChooseColorModal
            showColorModal={showColorModal}
            setShowColorModal={setShowColorModal}
          ></ChooseColorModal>
          <AddAdminstrative
            adminstrativeStatus={adminstrativeStatus}
            setShowAdminstrative={setShowAdminstrative}
          ></AddAdminstrative>
        </SessionCheck>
      </ReduxProvider>
      <DasboardFooter></DasboardFooter>
    </>
  );
}

export function DashboardRedux() {
  let router = useRouter();

  return (
    <>
      <ReduxProvider>
        <SessionCheck router={router}>
          <Dashboard></Dashboard>
        </SessionCheck>
      </ReduxProvider>
    </>
  );
}
