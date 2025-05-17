import './sidebar.css'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';

import {Users} from "../../dummyData"
import Closefriend from "../../components/closefriend/Closefriend"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          
          <li className="sidebarListItem">
              <DynamicFeedIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Topics</span>
          </li>
          <li className="sidebarListItem">
              <RateReviewIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className="sidebarListItem">
              <OndemandVideoIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className="sidebarListItem">
              <Diversity3Icon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutlineIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className="sidebarListItem">
              <WorkOutlineIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
              <EventNoteIcon className='sidebarIcon'/>
              <span className='sidebarListItemText'>Events</span>
          </li>

        </ul>

        <button className='sidebarButton'>more</button>
        <hr className='sidebarHr'></hr>
        <ul className="sidebarFriendList">
           {Users.map(u=> (
                       <Closefriend key={u.id} user={u}/>
                     ))}
        </ul>

        

        


       


      </div>


    </div>
  );
}
