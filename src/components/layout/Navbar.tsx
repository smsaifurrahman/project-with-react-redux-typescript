import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
         {/* <h2 className="text-2xl">Logo</h2> */}
        <span className="font-bold ml-2">Task</span>Master
      </div>
      <Link to={'/'}>Tasks</Link>
      <Link to={'/users'}>Users</Link>
    </nav>
  );
}
