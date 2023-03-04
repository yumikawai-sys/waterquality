import {useEffect,useState} from 'react'
import Displaymap from './Displaymap';
import Showtable from './Showtable';

function Dataimport(props)
{
    let [jsonData,setJsonData] = useState([]);
    let selectPlace;
    let selectStateYear;
    let selectStateMonth;
    let selectStateDate;
    let selectEndYear;
    let selectEndMonth;
    let selectEndDate;

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

    

    function selectedID(e)
    {
        e.preventDefault();
        
        selectPlace = document.getElementById("waternames").value
        selectStateYear = document.getElementById("startYear").value
        selectStateMonth = document.getElementById("startMonth").value
        selectStateDate = document.getElementById("startDate").value
        selectEndYear = document.getElementById("endYear").value
        selectEndMonth = document.getElementById("endMonth").value
        selectEndDate = document.getElementById("endDate").value
        
        console.log('selected', selectPlace)
        console.log('selected', selectStateYear)
        console.log('selected', selectStateMonth)
        console.log('selected', selectStateDate)
        console.log('selected', selectEndYear)
        console.log('selected', selectEndMonth)
        console.log('selected', selectEndDate)
    }

    return(

        <main>
            {/* check if jsonData is null or not */}
            {console.log(jsonData)}
            {(jsonData===[])?<p>There is no data</p>
            : 
            <select id="waternames">{jsonData.map(x=><option id={x.id} value={x.id}>
                {x.name}</option>)}</select>}              

            {/* onclick => Displaymap */}
            <button id="selectButton" onClick={selectedID}>Search</button>
            
            <p>Start Date</p>
            <select id="startYear">
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
            <select id="startMonth">
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>Auguest</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            <select id="startDate">
                {dates.map(date => (<option>{date}</option>))}
            </select>

            <p>End Date</p>
            <select id="endYear">
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
            <select id="endMonth">
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>Auguest</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            <select id="endDate">
                {dates.map(date => (<option>{date}</option>))}
            </select>

            {/* onclick => Showtable */}
            <button id="selectButton">SUBMIT</button>

            {/* displaying a map */}
            <Displaymap place={selectPlace}/>

            {/* showing a table */}
            <Showtable linkdata={{place: selectPlace, startYear: selectStateYear, startMonth: selectStateMonth, 
            startDate: selectStateDate, endYear: selectEndYear, endMonth: selectEndMonth, endDate: selectEndDate }}/>
        </main>
    )
}


export default Dataimport;