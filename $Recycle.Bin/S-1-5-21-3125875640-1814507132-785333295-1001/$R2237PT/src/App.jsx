import './App.css'

const Navbar=()=>{
return(
  <div className='flex'>
    <h1>LOGO</h1>
    <ul className=''>
      <li>MEN</li>
      <li>WOMEN</li>
      <li>KIDS</li>
    </ul>
    
  </div>
)
}


function App(){
  return (
    <div>
    <Navbar/>
  </div>
  )
  
}
export default App;
