import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
export default function SortedHeader({ children, onHeaderClicked }) {
  let theadContainer = useRef();

  //   useEffect(() => {
  //     $(theadContainer.current).find('th').on('click', onHeadClick);
  //     return () => {
  //       $(theadContainer.current).find('th').off('click', onHeadClick);
  //     };
  //   }, []);

  const onHeadClick = (evt) => {
    onHeaderClicked(evt);
  };

  let trTags = React.cloneElement(children, { onClick: onHeadClick });

  return (
    <>
      <thead ref={theadContainer}>{trTags}</thead>
    </>
  );
}
