import Dataimport from './Dataimport';

function Admin()
{
    return(
        <main className="adminmain">
            <div className="history">
                <p>your history</p>
                <ul>
                    <li>Oct 2022</li>
                    <li>Nov 2022</li>
                    <li>Dec 2022</li>
                </ul>
            </div>
            
            <div className="result">

                <Dataimport />
                

               
            </div>

        </main>
    )
}


export default Admin;
