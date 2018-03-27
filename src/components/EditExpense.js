import React from 'react';

const Edit = (props)=>{
  return(
    <div>Edit Page
      {props.match.params.id}
    </div>
  );
}

export default Edit;
