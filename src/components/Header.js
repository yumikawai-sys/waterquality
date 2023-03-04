import AuthNav from "./Auth/AuthNav";

function Header()
{
    return(
        <header>
            <div className="myheader">
            <AuthNav/>
            </div>
        </header>
    )
}

export default Header;