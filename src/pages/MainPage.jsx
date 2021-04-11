import React from 'react';
import Header from '../component/shared/Header/Header';
import Calls from '../component/mainComponent/Calls';
import Chats from '../component/mainComponent/Chats';
import Status from '../component/mainComponent/Status';

export default function MainPage() {
  const [value, setValue] = React.useState(1);
  console.log('value',value)
  return (
    <div>
        <Header setValue={setValue} value={value}/>
        {value===1?<Chats/>:null}
        {value===2?<Status/>:null}
        {value===3?<Calls/>:null}
    </div>
  );
}
