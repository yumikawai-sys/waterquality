import {useState} from 'react'
import ReactPaginate from 'react-paginate'; 
const { v4: uuidv4 } = require('uuid');

function Rendertable(props)
{
  const [ offset, setOffset ] = useState(0); 
  const perPage = 15; 

  const handlePageChange = (data) => {
    let page_number = data['selected']; 
    setOffset(page_number*perPage); 
  }

  return (
    <>
      <div>
            <table id="waterdatatable">
                <thead>
                <tr>
                    <th id="thDate">Date</th>
                    <th>Max</th>
                    <th>Min</th>
                    <th>Mean</th>
                    <th>Median</th>
                    <th>UpperQuartile</th>
                    <th>LowerQuartile</th>
                </tr>
                </thead>
                {props.data
                .slice(offset, offset + perPage) 
                .map((x)=>{
                return (
                        <tbody>
                            <tr id={x.date} key={x.date}>
                                <td id={x.date} key={uuidv4()}>{x.date}</td>
                                <td id={x.max} key={uuidv4()}>{x.max}</td>
                                <td id={x.min} key={uuidv4()}>{x.min}</td>
                                <td id={x.mean} key={uuidv4()}>{x.mean}</td>
                                <td id={x.median} key={uuidv4()}>{x.median}</td>
                                <td id={x.upperQuartile} key={uuidv4()}>{x.upperQuartile}</td>
                                <td id={x.lowerQuartile} key={uuidv4()}>{x.lowerQuartile}</td>
                            </tr>                             
                        </tbody>
                )
                })}
            </table>
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(props.data.length/perPage)} 
        marginPagesDisplayed={1} 
        pageRangeDisplayed={2} 
        onPageChange={handlePageChange} 
        containerClassName={'pagination'} 
        subContainerClassName={'pages pagination'}
        activeClassName={'active'} 
        previousClassName={'pagination__previous'} 
        nextClassName={'pagination__next'} 
        disabledClassName={'pagination__disabled'} 
      />
    </>
  )
}

export default Rendertable
