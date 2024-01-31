import { Route,Routes } from "react-router-dom";
import AdminVideoView from "./AdminVideoView";
import AdminUploadVideo from "./AdminUploadVideo";
import AdminNavBar from "./AdminNavBar";
const AdminHomePage = () => {
    return ( 
        <div className="admhomepage">
            {/* <h1>Admin Home Page after succcessfull sign in</h1> */}
            <AdminNavBar/>
                            <Routes>
                                <Route path="/view" element={<AdminVideoView/>}/>
                                <Route path="/addvideo" element={<AdminUploadVideo/>}/>
                            </Routes> {/*only one Routes is allowed inside that write as many nested routing you want*/}
        </div>
     );
}
 
export default AdminHomePage;