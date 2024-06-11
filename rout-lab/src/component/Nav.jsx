import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
      
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/Login"}>Login</Link></li>

      
      <li>
        <details>
          <summary>
            BootCamps
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
          <li><Link to={"/LoBotCambInfogin"}>JavaScript</Link></li>
          <li><a>Python</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}



export default Nav
