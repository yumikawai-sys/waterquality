import Dataimport from './Dataimport';
import {useEffect,useState} from 'react'
import {useAuth} from './Auth/AuthProvider';

const link = 'https://vps267042.vps.ovh.ca/scrapi/stations?page=1&key=';
const myKey = '-NOfhMo8SJQVr1ptytCv';
const finallink = link + myKey;

function Admin()
{
    const loginInfo = useAuth()
    let [jsonData,setJsonData] = useState([]);

    //fetch data for names in drow-down menu
    useEffect(()=>{
        const fetchWaterData = () => {
            fetch(finallink)
            .then(result => result.json())
            .then(json=>{setJsonData(json.message.filter(s=>s.province==="NS"));
            })
            .catch(err=>console.log(err))
        }

        fetchWaterData()

    },[]);

    return(
        <>
            <main className="adminmain">
                <div className="history">
                    <h4 id="historyh4">Welcome back, {loginInfo.currentUser}!</h4>
                    
                </div>
                
                <div className="result">

                    {/* shows a drop-down menu & Google map from API*/}
                    <Dataimport jsonData={jsonData}/>
                    
                </div>

            </main>
        </>
    )
}

export default Admin;
