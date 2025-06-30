'use client';
import './system-values.css';
import systemAPI from '@/app/apiBridge/system';

import { useEffect, useState } from 'react';
import HeadSection from './headSection';
import AllSettingsSection from './allSettings';
import { useSelector } from 'react-redux';
export default function MainPage() {
  const [caseValues, setCaseValues] = useState([]);

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  debugger;
  useEffect(() => {
    systemAPI
      .getSystemValues({ company })
      .then((resp) => {
        setCaseValues(resp.data.systemValues);
      })
      .catch(() => {
        toast.error('Oops, we could not load system values');
      });
  }, []);

  return (
    <div>
      <AllSettingsSection />
      <HeadSection
        initialTitle={caseValues ? caseValues[0] : null}
        caseValues={caseValues}
        setCaseValues={setCaseValues}
      />
    </div>
  );
}
