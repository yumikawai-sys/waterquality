import {useEffect, useState} from 'react'
import GoogleMap from './GoogleMap';
import Showtable from './Showtable';

const linkdata = 'https://vps267042.vps.ovh.ca/scrapi/station/';
const myKey = 'key=-NOfhMo8SJQVr1ptytCv';
let totallink = '';

function Dataimport(props)
{
    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let [latlng, setlatlng] = useState([44.88083, -65.15778]); //default map
    let [selectPlace, setselectPlace] = useState('01DC007'); //default station id
    let [count, setcount] = useState(0); // counter to determine to render a table or not

    let [selectStateYear, setselectStateYear] = useState('2022'); //start year
    let [selectStateMonth, setselectStateMonth] = useState('01'); //start month
    let [selectStateDate, setselectStateDate] = useState('01'); //start date
    let [selectEndYear, setselectEndYear] = useState('2022'); //end year
    let [selectEndMonth, setselectEndMonth] = useState('01'); //end month
    let [selectEndDate, setselectEndDate] = useState('01'); //end date  

    //fetch data (lat, lng) for GoogleMap
    useEffect(()=>{
        const totallink = linkdata + selectPlace + '?' + myKey;

        const stationData = () => {
            fetch(totallink)
            .then(result => result.json())
            .then(json=>{
                setlatlng(json.message.latlng);
            })
            .catch(err=>{
                alert(err)})
        }

        stationData()

    },[selectPlace]);


    let [initialData, setinitialData] = useState([]);   //initial table data
    let initiallink = linkdata + selectPlace + '/primarylevel/?startDate=' + selectStateYear + '-'
    + selectStateMonth + '-' + selectStateDate + '&endDate=' + selectEndYear + '-' 
    + selectEndMonth + '-' + selectEndDate + '&resultType=stats&' + myKey;

    //call this 1st time only
    useEffect(()=>{
        const fetchWaterData = () => {
            fetch(initiallink)
            .then(result => result.json())
            .then(json=>{
            const temp=json.message.stats; 
            setinitialData(temp);            
            
            })
            .catch(err=>{
                alert(err)})
        }

        fetchWaterData()

     },[]);

    //fetch data for the table (after place is selected)
    let [jsonData,setJsonData] = useState(initialData);

    totallink = linkdata + selectPlace + '/primarylevel/?startDate=' + selectStateYear + '-'
         + selectStateMonth + '-' + selectStateDate + '&endDate=' + selectEndYear + '-' 
         + selectEndMonth + '-' + selectEndDate + '&resultType=stats&' + myKey;

    useEffect(()=>{
        const fetchWaterData = () => {
            fetch(totallink)
            .then(result => result.json())
            .then(json=>{
            const temp=json.message.stats; 
            setJsonData(temp);            
            
            })
            .catch(err=>{
                alert(err)})
        }

        fetchWaterData()

     },[count]);

    //this is to update the location (for GoogleMap)
    function selectedID(e)
    {
        e.preventDefault();        
        setselectPlace(document.getElementById("waternames").value);
    }

    //this is to update the duration (for table)
    function selectedPeriod(e)
    {   
        e.preventDefault();   
        let temp = count;
        setcount(temp + 1);  //count +1 to call fetch to update the table

        setselectStateYear(document.getElementById("startYear").value);
        setselectStateMonth(document.getElementById("startMonth").value);
        
        // if date is 1-9 needs to add '0'
        if (parseInt(document.getElementById("startDate").value) <10)
            {setselectStateDate("0" + document.getElementById("startDate").value)}
        else
            {setselectStateDate(document.getElementById("startDate").value)};

        setselectEndYear(document.getElementById("endYear").value);
        setselectEndMonth(document.getElementById("endMonth").value);
        // if date is 1-9 needs to add '0'
        if (parseInt(document.getElementById("endDate").value) <10)
            {setselectEndDate("0" + document.getElementById("endDate").value)}
        else
            {setselectEndDate(document.getElementById("endDate").value)};

    }

    return(
            <div className='dataimmain'>
            <div className='mapblock'>
            {/* List of locations */}
            <select id="waternames">{props.jsonData.map(x=><option id={x.id} value={x.id} key={x.id}>
                {x.name}</option>)}</select>              

            {/* onClick => change the map */}
            <button id="selectButton" onClick={selectedID}>Search</button>          

            {/* Google map */}
            <div className='GoogleMap'>
                <GoogleMap latlng={latlng}/>
            </div>
            </div>
              
            <div className='tableblock'>
            <div className='periodselection'>
            <div className='selectstart'>
                <p id="startp">From</p>
                <select id="startYear">
                    <option id='2022' value='2022' key='2022'>2022</option>
                    <option id='2023' value='2023' key='2023'>2023</option>
                </select>
                <select id="startMonth">
                    <option id='1' value='01' key='01'>January</option>
                    <option id='2' value='02' key='02'>February</option>
                    <option id='3' value='03' key='03'>March</option>
                    <option id='4' value='04' key='04'>April</option>
                    <option id='5' value='05' key='05'>May</option>
                    <option id='6' value='06' key='06'>June</option>
                    <option id='7' value='07' key='07'>July</option>
                    <option id='8' value='08' key='08'>Auguest</option>
                    <option id='9' value='09' key='09'>September</option>
                    <option id='10' value='10' key='10'>October</option>
                    <option id='11' value='11' key='11'>November</option>
                    <option id='12' value='12' key='12'>December</option>
                </select>
                <select id="startDate">
                    {dates.map(date => (<option id={date} value={date} key={date}>{date}</option>))}
                </select>
            </div>

            <div className='selectend'>
                <p id="endp">To</p>
                <select id="endYear">
                    <option id='2022' value='2022' key='2022'>2022</option>
                    <option id='2023' value='2023' key='2023'>2023</option>
                </select>
                <select id="endMonth">
                    <option id='1' value='01' key='01'>January</option>
                    <option id='2' value='02' key='02'>February</option>
                    <option id='3' value='03' key='03'>March</option>
                    <option id='4' value='04' key='04'>April</option>
                    <option id='5' value='05' key='05'>May</option>
                    <option id='6' value='06' key='06'>June</option>
                    <option id='7' value='07' key='07'>July</option>
                    <option id='8' value='08' key='08'>Auguest</option>
                    <option id='9' value='09' key='09'>September</option>
                    <option id='10' value='10' key='10'>October</option>
                    <option id='11' value='11' key='11'>November</option>
                    <option id='12' value='12' key='12'>December</option>
                </select>
                <select id="endDate">
                    {dates.map(date => (<option id={date} value={date} key={date}>{date}</option>))}
                </select>
            </div>

            {/* onClick to store Year, Month, Date*/}
            <button id="selectPeriod" onClick={selectedPeriod}>Submit</button>
            </div>

            {/* showing a table */}
            <div className='Showtable'>
            <Showtable jsonData={jsonData}/>
            </div>
            </div>
            </div>
    )
}


export default Dataimport;