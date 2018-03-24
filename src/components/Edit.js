import React from 'react';

const Edit = (props)=>{
  console.log(props.match.params.id);
  return(
    <div>Edit Page</div>
  );
}

export default Edit;
