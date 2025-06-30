import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './renderCasesSummary.css';
import API from '@/app/apiBridge/case';
import { toast } from 'react-toastify';

export default function RenderCasesSummary({ data }) {
  let [list, setlist] = useState([]);

  // TBC, it should be move to redux
  let colorBox = {
    Civil: '#66b031',
    Criminal: '#fa9902',
    Rental: '#a7194b',
    Cheques: '#e9680d',
    Mortgaged: '#0392ce',
    'Sales & Seizures': '#FF5722',
    'Personal Affairs': '#3f82ee',
    Administrative: '#916c18',
    'General Cases': '#9b52f3',
    'Arbitration Cases': '#607D8B',
    'Legal Notices': '#916c18',
    'Order for Payment': '#fa9902'
  };

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  useEffect(() => {
    API.getCasesSummary()
      .then((resp) => {
        setlist(resp.data.result);
      })
      .catch(() => {
        toast.error('Oops, the cases summary could not be loaded');
      });
  }, [user?._id]);

  return (
    <>
      <div id="renderCasesSummary">
        <table className="text-left">
          {list.map((item) => {
            return (
              <tr>
                <td>
                  <div
                    className="case-bubble"
                    style={{ backgroundColor: colorBox[item.nameEn] }}
                  ></div>
                </td>
                <td>{item['name' + language]}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
