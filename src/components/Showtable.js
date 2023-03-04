import Rendertable from './Rendertable';

function Showtable(props)
{
    return(
        <>
            {(props.jsonData.length===0)?<p>There is no data</p>
            : 
            <>
            <Rendertable data={props.jsonData}/>
            </>}
        </>
    )
}

export default Showtable