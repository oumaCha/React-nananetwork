import './topbar.css'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
    <div className='topBarContent'>
        <div className="topbarLeft">
        <span className='logo'>Nananetwork</span>
        </div>
        
        <div className="topbarCenter">
          <div className='searchBar'>
              <SavedSearchIcon className='searhIcon'/>
              <input  placeholder='Search for friend, post or video' className="seachInput"/>
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
             <div className="topbarIconItem">
              <PersonIcon />
                    <span className='topbarIconbadge'>1</span>
             </div>
             <div className="topbarIconItem">
              <ChatIcon />
                    <span className='topbarIconbadge'>1</span>
             </div>
             <div className="topbarIconItem">
              <NotificationsIcon />
                    <span className='topbarIconbadge'>1</span>
             </div>
          </div>
          <img src="/assets/profilpic/image1.jpg" alt="" className="topbarImage" />
        </div>
    </div>
    
  );
}
