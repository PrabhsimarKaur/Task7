
function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      
      <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
        <h2 className="font-bold text-lg">DEV@Deakin</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded px-3 py-1 w-1/2"
        />
        <div className="flex gap-4">
          <p>Post</p>
          <p className="text-green-600">Logout</p>
        </div>
      </div>
      
      <div className="flex justify-center items-center h-screen bg-white-100" style={{width: '100vw'}}>
        <p className="text-lg font-semibold"> You are successfully logged in</p>
      </div>
    </div>
  );
}
export default Dashboard;
