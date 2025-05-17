import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import './profile.css'

export default function Profile() {
  return (
     <>
        <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="assets/post/1.png" alt="" />
                <img className="profileUserImg" src="assets/post/2.png" alt="" />
              </div>
              <div className="profileInformation">
                <h4 className="profileInfoName">Sarah Conar</h4>
                <span className="ProfileInfoDesc">hello Sarah CONARR</span>
              </div>
              </div>

              <div className="profileRightBottom">
                 <Feed/>
               <Rightbar profile/>
              </div>
               
          </div>
         
        </div>
    
        
        </>
  )
}
