import React from 'react';
import '../stylesheets/BasicInfoCard.css';

const BasicInfoCard = ( { account } ) =>
  <div>
    <ul>
      <li> { account.first_name } </li>
      <li> { account.last_name } </li>
      <li> { account.email } </li>

    </ul>
  </div>;

export default BasicInfoCard;
