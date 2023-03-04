import {useEffect,useState} from 'react'
import Displaymap from './Displaymap';
import GoogleMap from './GoogleMap';
// import Displaymap from './Displaymap';
// import Showtable from './Showtable';

function Dataimport(props)
{
    let [jsonData,setJsonData] = useState([]);
    let [selectPlace, setselectPlace] = useState('01DC007'); //default map
    let [latlng, setlatlng] = useState([44.88083, -65.15778]); //default map
    
    // let [lat, setlat] = useState(44.88083); //default map
    // let [lng, setlng] = useState(-65.15778); //default map

    //let stationID = '01DC007'; //default
    // let selectStateYear;
    // let selectStateMonth;
    // let selectStateDate;
    // let selectEndYear;
    // let selectEndMonth;
    // let selectEndDate;

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    useEffect(()=>{
        const fetchWaterData = () => {
            fetch('https://vps267042.vps.ovh.ca/scrapi/stations?page={PAGE}&key=-NOHIwjc4U4D7nOtMgi3')
            .then(result => result.json())
            .then(json=>{setJsonData(json.message.filter(s=>s.province==="NS"));
            
            console.log('json',json)
            console.log('jsonData',jsonData)
            
            })
            .catch(err=>console.log(err))
        }

        fetchWaterData()

    },[]);


    useEffect(()=>{
        const linkdata = 'https://vps267042.vps.ovh.ca/scrapi/station/';
        // stationID = selectPlace;
        const key = '?key=-NOHIwjc4U4D7nOtMgi3';
        const totallink = linkdata + selectPlace + key;

        console.log('station data!', totallink)

        const stationData = () => {
            fetch(totallink)
            .then(result => result.json())
            .then(json=>{
                console.log('jsonData station link',json.message.latlng)
                setlatlng(json.message.latlng);
                
            })
            .catch(err=>console.log(err))
        }

        stationData()

    },[selectPlace]);

    function selectedID(e)
    {
        e.preventDefault();
        
        setselectPlace(document.getElementById("waternames").value);
        console.log('selectPlace',selectPlace);


        // selectStateYear = document.getElementById("startYear").value
        // selectStateMonth = document.getElementById("startMonth").value
        // selectStateDate = document.getElementById("startDate").value
        // selectEndYear = document.getElementById("endYear").value
        // selectEndMonth = document.getElementById("endMonth").value
        // selectEndDate = document.getElementById("endDate").value
        
        // console.log('selected', selectPlace)
        // console.log('selected', selectStateYear)
        // console.log('selected', selectStateMonth)
        // console.log('selected', selectStateDate)
        // console.log('selected', selectEndYear)
        // console.log('selected', selectEndMonth)
        // console.log('selected', selectEndDate)

    }

    return(

        <main>
            {/* check if jsonData is null or not */}
            {console.log(jsonData)}
            {(jsonData===[])?<p>There is no data</p>
            : 
            <select id="waternames">{jsonData.map(x=><option id={x.id} value={x.id}>
                {x.name}</option>)}</select>}              

            {/* onClick => Displaymap */}
            <button id="selectButton" onClick={selectedID}>Search</button>
            

            {/* Google map */}
            {/* <GoogleMap lat={lat} lng={lng}/> */}
            <GoogleMap latlng={latlng}/>

            <p>Start Date</p>
            <select id="startYear">
                <option id='2022' value='2022'>2022</option>
                <option id='2023' value='2023'>2023</option>
            </select>
            <select id="startMonth">
                <option id='1' value='01'>January</option>
                <option id='2' value='02'>February</option>
                <option id='3' value='03'>March</option>
                <option id='4' value='04'>April</option>
                <option id='5' value='05'>May</option>
                <option id='6' value='06'>June</option>
                <option id='7' value='07'>July</option>
                <option id='8' value='08'>Auguest</option>
                <option id='9' value='09'>September</option>
                <option id='10' value='10'>October</option>
                <option id='11' value='11'>November</option>
                <option id='12' value='12'>December</option>
            </select>
            <select id="startDate">
                {dates.map(date => (<option>{date}</option>))}
            </select>

            <p>End Date</p>
            <select id="endYear">
                <option id='2022' value='2022'>2022</option>
                <option id='2023' value='2023'>2023</option>
            </select>
            <select id="endMonth">
                <option id='1' value='01'>January</option>
                <option id='2' value='02'>February</option>
                <option id='3' value='03'>March</option>
                <option id='4' value='04'>April</option>
                <option id='5' value='05'>May</option>
                <option id='6' value='06'>June</option>
                <option id='7' value='07'>July</option>
                <option id='8' value='08'>Auguest</option>
                <option id='9' value='09'>September</option>
                <option id='10' value='10'>October</option>
                <option id='11' value='11'>November</option>
                <option id='12' value='12'>December</option>
            </select>
            <select id="endDate">
                {dates.map(date => (<option>{date}</option>))}
            </select>
            
            {/* onClick => Showtable */}
            <button id="selectButton" onClick={props.maphandler}>Submit</button>





            {/* displaying a map */}
            {/* <Displaymap place={selectPlace} handler={()=>selectedID()}/> */}

            {/* showing a table */}
            {/* <Showtable linkdata={{place: selectPlace, startYear: selectStateYear, startMonth: selectStateMonth, 
            startDate: selectStateDate, endYear: selectEndYear, endMonth: selectEndMonth, endDate: selectEndDate }}/> */}

        </main>
    )
}


export default Dataimport;