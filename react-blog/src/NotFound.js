import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Error</h2>
            <p>That does not exist!</p>
            <Link to="/" >Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;