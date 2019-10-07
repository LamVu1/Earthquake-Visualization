import {getEventsDate} from './api';


export const filter = () => {
  const start=document.getElementById('lower').value;
  const end=document.getElementById('higher').value;
  const min=document.getElementById('min-mag').value;
  const max=document.getElementById('max-mag').value
//   document.getElementById('lower').value='';
//   document.getElementById('higher').value='';
  return(getEventsDate(start,end, min, max));
}
