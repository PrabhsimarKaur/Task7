
import { Link } from "react-router-dom";

function Home({ isAuthenticated }) {
  return (
    <div>
    <div className="flex justify-between items-center p-4 bg-blend-hard-lightgray-100 shadow w-full fixed top-0 left-0">
      <h2 className="font-bold text-lg">DEV@Deakin</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        className="border rounded px-3 py-1 w-1/2"
      />
      <div className="flex gap-4">
        <p>Post</p>
        <Link to="/login" className="text-blue-600">Login</Link>
      </div>
      </div>
      {!isAuthenticated && (
  <div className="flex justify-center items-center h-[80vh]">
    <p className="text-black-500 text-lg font-semibold">
       You are not logged in
    </p>
  </div>
)}
    </div>
  );
}

export default Home;
