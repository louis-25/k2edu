import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Course({authService, loginState, token}) {
  
  const history = useHistory();

  const me='';    

  return (
    <div>
      <p>Course!!</p>
    </div>
  );
}

export default Course;