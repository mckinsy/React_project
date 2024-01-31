import {Link} from 'react-router-dom'
import '../Style/style.css'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div className="child">
            <h1>Landing Page</h1>
            <div className="landingpage_sub">
            <Link to="userlogin"><h4>User Login👩‍💻</h4></Link>
            <Link to="adminlogin"><h4>Admin Login</h4></Link>
            </div>
            </div>
        </div>
     );
}
 
export default LandingPage;