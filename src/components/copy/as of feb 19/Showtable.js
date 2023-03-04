 import {useEffect,useState} from 'react'
 const link = 'https://vps267042.vps.ovh.ca/scrapi/station/';;
 let totallink = '';
 const myKey = '-NOfhMo8SJQVr1ptytCv';

 //unique id to generate unique key at <td>
 const { v4: uuidv4 } = require('uuid');
 

function Showtable(props)
{

    // let [selectStateYear, setselectStateYear] = useState('2022'); //start year
    // let [selectStateMonth, setselectStateMonth] = useState('01'); //start month
    // let [selectStateDate, setselectStateDate] = useState('01'); //start date
    // let [selectEndYear, setselectEndYear] = useState('2022'); //end year
    // let [selectEndMonth, setselectEndMonth] = useState('01'); //end month
    // let [selectEndDate, setselectEndDate] = useState('01'); //end date
    // let [count, setcoount] = useState(0); // counter to determine to render a table or not
    
    let [jsonData,setJsonData] = useState([]);
    totallink = link + props.place + '/primarylevel/?startDate=' + props.startYear + '-'
        + props.startMonth + '-' + props.startDate + '&endDate=' + props.endYear + '-' 
        + props.endMonth + '-' + props.endDate + '&resultType=stats&key=' + myKey;

    console.log('totallinkfortable',totallink);
    

    useEffect(()=>{
        const fetchWaterData = () => {
            fetch(totallink)
            .then(result => result.json())
            .then(json=>{
            const temp=json.message.stats; //Because jsonData is not updated yet
            jsonData = temp;
            //setJsonData(json.message.stats);            

            console.log('tablejson',json)
            console.log('tablejsonData',jsonData)
            
            })
            .catch(err=>console.log(err))
        }

        fetchWaterData()

     },[]);

    return(
        <>
        
        
            <table id="waterdatatable">
                <thead>
                <tr>
                    <th>date</th>
                    <th>max</th>
                    <th>min</th>
                    <th>mean</th>
                    <th>median</th>
                    <th>upperQuartile</th>
                    <th>lowerQuartile</th>
                </tr>
                </thead>
                <tbody>
                {/* {props.jsonwaterData.map(x=><tr id={x.date}> */}
                {jsonData.map(x=><tr id={x.date} key={x.date}>
                    <td id={x.date} key={uuidv4()}>{x.date}</td>
                    <td id={x.max} key={uuidv4()}>{x.max}</td>
                    <td id={x.min} key={uuidv4()}>{x.min}</td>
                    <td id={x.mean} key={uuidv4()}>{x.mean}</td>
                    <td id={x.median} key={uuidv4()}>{x.median}</td>
                    <td id={x.upperQuartile} key={uuidv4()}>{x.upperQuartile}</td>
                    <td id={x.lowerQuartile} key={uuidv4()}>{x.lowerQuartile}</td>
                </tr>)}                             
                </tbody>
            </table>
        
        </>
    )
}

export default Showtable