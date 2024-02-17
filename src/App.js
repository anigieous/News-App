import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default function App(){

  const [progress,setProgress]=useState(0);
  const setProgresses =(progress)=>{
    setProgress(progress)
  }
  
    return (
      <div data-testid="app">
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgresses}  key='general' pageSize={12} country={'in'} category={'general'} />} />
            <Route exact path="/business" element={<News setProgress={setProgresses}  key='business' pageSize={12} country={'in'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgresses}  key='entertainment' pageSize={12} country={'in'} category={'entertainment'} />} />
            <Route exact path="/health" element={<News setProgress={setProgresses}  key='health' pageSize={12} country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News setProgress={setProgresses}  key='science' pageSize={12} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News setProgress={setProgresses}  key='sports' pageSize={12} country={'in'} category={'sports'} />} />
            <Route exact path="/technology" element={<News setProgress={setProgresses}  key='technology' pageSize={12} country={'in'} category={'technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  
}





