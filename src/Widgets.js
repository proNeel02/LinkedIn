import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widgets = () => {

  const newsAricle = (heading, subtitle) => {

    return (<div className="widgets__article">
        <div className="widgets__articleLeft">
       <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>);
  }


  return (
    <div className='widgets'>
  
       <div className="widgets__headers">
        <h2>LinkedIn News</h2>
        <InfoIcon />
       </div>
       {newsAricle("React.js", "Top News - 89,905 readers")}
       {newsAricle("Node.js", "Top News - 9,985 readers")} 
       {newsAricle("Java", "Top News - 89 readers")}
       {newsAricle("Javascript", "Top News - 905 readers")} 
       {newsAricle("Typescript", "Top News - 9,905 readers")}
       {newsAricle("Rust", "Top News - 99,905 readers")} 
    </div>
   
  )
}

export default Widgets