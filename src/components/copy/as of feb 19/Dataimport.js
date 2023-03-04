import {useEffect, useState, useRef} from 'react'
import GoogleMap from './GoogleMap';
import Showtable from './Showtable';
//import useRef from 'react';
//import useRef from 'react'



const linkdata = 'https://vps267042.vps.ovh.ca/scrapi/station/';
const myKey = '?key=-NOfhMo8SJQVr1ptytCv';

function Dataimport(props)
{
    const startYearRef = useRef();
    const startMonthRef = useRef();
    const startDateRef = useRef();
    const endYearRef = useRef();
    const endMonthRef = useRef();
    const endDateRef = useRef();

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let [latlng, setlatlng] = useState([44.88083, -65.15778]); //default map
    let [selectPlace, setselectPlace] = useState('01DC007'); //default station id

    //regular variables (useState is not working until re-rendering)
    let selectStateYear = '2022'; //start year
    let selectStateMonth ='01'; //start month
    let selectStateDate = '01'; //start date
    let selectEndYear = '2022'; //end year
    let selectEndMonth = '01'; //end month
    let selectEndDate = '01'; //end date

    let [jsonwaterData,setJsonwaterData] = useState([]); //water data

    // let [selectStateYear, setselectStateYear] = useState('2022'); //start year
    // let [selectStateMonth, setselectStateMonth] = useState('01'); //start month
    // let [selectStateDate, setselectStateDate] = useState('01'); //start date
    // let [selectEndYear, setselectEndYear] = useState('2022'); //end year
    // let [selectEndMonth, setselectEndMonth] = useState('01'); //end month
    // let [selectEndDate, setselectEndDate] = useState('01'); //end date
    // let [jsonwaterData,setJsonwaterData] = useState([]); //water data
    let [count, setcount] = useState(0); // counter to determine to render a table or not

    //fetch data (lat, lng) for GoogleMap
    useEffect(()=>{
        const totallink = linkdata + selectPlace + myKey;

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


    //fetch data for the table
    // useEffect(()=>{

    //     let totallink = 'https://vps267042.vps.ovh.ca/scrapi/station/';
    //     totallink = totallink + selectPlace;
    //     totallink = totallink + '/primarylevel/?startDate=';
    //     totallink = totallink + selectStateYear + '-';
    //     totallink = totallink + selectStateMonth + '-';
    //     totallink = totallink + selectStateDate;
    //     totallink = totallink + '&endDate=';
    //     totallink = totallink + selectEndYear + '-';
    //     totallink = totallink + selectEndMonth + '-';
    //     totallink = totallink + selectEndDate;
    //     totallink = totallink + '&resultType=stats&key=-NOHIwjc4U4D7nOtMgi3';

    //     console.log('tablelink', totallink);

    //     const fetchWaterData = () => {
    //         fetch(totallink)
    //         .then(result => result.json())
    //         .then(json=>{setJsonwaterData(json.message.stats);
            
    //         console.log('json',json)
    //         console.log('jsonwaterData',jsonwaterData)
            
    //         })
    //         .catch(err=>console.log(err))
    //     }

    //     fetchWaterData()    

    // },[count]);

    function selectedID(e)
    {
        e.preventDefault();        
        setselectPlace(document.getElementById("waternames").value);
        console.log('selectPlace',selectPlace);
    }

    function selectedPeriod(e)
    {   
        e.preventDefault();   
        setcount(count++);  //count +1 to call fetch to update the table

        selectStateYear=document.getElementById("startYear").value;
        selectStateMonth=document.getElementById("startMonth").value;
        selectStateDate=document.getElementById("startDate").value;
        selectEndYear=document.getElementById("endYear").value;
        selectEndMonth=document.getElementById("endMonth").value;
        selectEndDate=document.getElementById("endDate").value;

        console.log('selectStateYear',selectStateYear);
        console.log('selectStateMonth',selectStateMonth);
        console.log('selectStateDate',selectStateDate);
        console.log('selectEndYear',selectEndYear);
        console.log('selectEndMonth',selectEndMonth);
        console.log('selectEndDate',selectEndDate);

    }

    return(

        <main>
            {/* check if jsonData is null or not */}
            {console.log('jsonData', props.jsonData)}
            {(props.jsonData===[])?<p>There is no data</p>
            : 
            <select id="waternames">{props.jsonData.map(x=><option id={x.id} value={x.id} key={x.id}>
                {x.name}</option>)}</select>}              

            {/* onClick => change the map */}
            <button id="selectButton" onClick={selectedID}>Search</button>

            {/* Google map */}
            <div className='GoogleMap'>
                <GoogleMap latlng={latlng}/>
            </div>

            <h4>Please select the starting date and ending date</h4>
            <div className='selectstart'>
                <p>Start Date</p>
                <select id="startYear">
                    <option id='2022' value='2022' key='2022' ref={startYearRef}>2022</option>
                    <option id='2023' value='2023' key='2023' ref={startYearRef}>2023</option>
                </select>
                <select id="startMonth">
                    <option id='1' value='01' key='01' ref={startMonthRef}>January</option>
                    <option id='2' value='02' key='02' ref={startMonthRef}>February</option>
                    <option id='3' value='03' key='03' ref={startMonthRef}>March</option>
                    <option id='4' value='04' key='04' ref={startMonthRef}>April</option>
                    <option id='5' value='05' key='05' ref={startMonthRef}>May</option>
                    <option id='6' value='06' key='06' ref={startMonthRef}>June</option>
                    <option id='7' value='07' key='07' ref={startMonthRef}>July</option>
                    <option id='8' value='08' key='08' ref={startMonthRef}>Auguest</option>
                    <option id='9' value='09' key='09' ref={startMonthRef}>September</option>
                    <option id='10' value='10' key='10' ref={startMonthRef}>October</option>
                    <option id='11' value='11' key='11' ref={startMonthRef}>November</option>
                    <option id='12' value='12' key='12' ref={startMonthRef}>December</option>
                </select>
                <select id="startDate">
                    {dates.map(date => (<option id={date} value={date} key={date} ref={startDateRef}>{date}</option>))}
                </select>
            </div>

            <div className='selectend'>
                <p>End Date</p>
                <select id="endYear">
                    <option id='2022' value='2022' key='2022' ref={endYearRef}>2022</option>
                    <option id='2023' value='2023' key='2023' ref={endYearRef}>2023</option>
                </select>
                <select id="endMonth">
                    <option id='1' value='01' key='01' ref={endMonthRef}>January</option>
                    <option id='2' value='02' key='02' ref={endMonthRef}>February</option>
                    <option id='3' value='03' key='03' ref={endMonthRef}>March</option>
                    <option id='4' value='04' key='04' ref={endMonthRef}>April</option>
                    <option id='5' value='05' key='05' ref={endMonthRef}>May</option>
                    <option id='6' value='06' key='06' ref={endMonthRef}>June</option>
                    <option id='7' value='07' key='07' ref={endMonthRef}>July</option>
                    <option id='8' value='08' key='08' ref={endMonthRef}>Auguest</option>
                    <option id='9' value='09' key='09' ref={endMonthRef}>September</option>
                    <option id='10' value='10' key='10' ref={endMonthRef}>October</option>
                    <option id='11' value='11' key='11' ref={endMonthRef}>November</option>
                    <option id='12' value='12' key='12'ref={endMonthRef} >December</option>
                </select>
                <select id="endDate">
                    {dates.map(date => (<option id={date} value={date} key={date} ref={endDateRef}>{date}</option>))}
                </select>
            </div>

            {/* onClick to store Year, Month, Date*/}
            <button id="selectPeriod" onClick={selectedPeriod}>Submit</button>


            {/* showing a table */}
            <div className='Showtable'>
            <Showtable count={count} place={selectPlace} startYear={selectStateYear} 
            startMonth={selectStateMonth} startDate={selectStateDate}
            endYear={selectEndYear} endMonth={selectEndMonth} endDate={selectEndDate}/>


            
            {/* <Showtable count={count} jsonwaterData={jsonwaterData}/> */}
            </div>
        </main>
    )
}


export default Dataimport;