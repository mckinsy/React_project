import '../Style/AdminHomePage.css';
import { Link } from 'react-router-dom';
const AdminNavBar = () => {
    return ( 
        <div className="navbar">
        <div className="logo">
          <img src="" alt="Logo" />  
        </div>
        <div className="options">
                <div className="link1">
                   
            <Link to="/adminhomepage/view">view</Link>
                </div>
                <div className="link2">
            <Link to="/adminhomepage/addvideo">add video</Link>
                </div>
        </div>
    </div>
     );
}
 
export default AdminNavBar;