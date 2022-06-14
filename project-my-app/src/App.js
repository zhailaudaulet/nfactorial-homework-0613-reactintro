
import './App.css';
import { format} from 'date-fns';
import img1 from './assets/react/hey.jpeg'
import img2 from './assets/react/lets.jpg'
import img3 from './assets/react/give.jpeg'
import img4 from './assets/react/all.jpeg'
import img5 from './assets/react/youCan.jpeg'
import logo1 from './assets/react/iq-logo.png'
const date = new Date();
const formattedDate = format(date, 'dd.mm.yyyy hh:mm')
function App() {

  return (
    
    <>
    
    <div className='header'>
      <img src={logo1} className='logo' alt=''/>
      <div>
        <input type="text" className="form-control input" id="formGroupExampleInput" placeholder="Welcome huh"/>
      </div>
      <div className='date'>
        <p className='p-0 datetext'>{formattedDate}</p>
      </div>
    </div>
    <div className="container-fluid">
      <div className='page row'>

        <div className='banner col-sm p-0 m-0' >
          <p className='text'>Hey</p>
          <img src={img1} alt="" className='banners'/>
        </div>
        <div className='banner col-sm p-0 m-0' >
          <p className='text'>Let's</p>
          <img src={img2} alt="" className='banners'/>
        </div>
        <div className='banner col-sm p-0 m-o' >
          <p className='text'>Give</p>
          <img src={img3} alt="" className='banners'/>
        </div>
        <div className='banner col-sm p-0 m-o' >
          <p className='text'>All</p>
          <img src={img4} alt="" className='banners'/>
        </div>
        <div className='banner col-sm p-0 m -0' >
          <p className='text' >You Can</p>
          <img src={img5} alt="" className='banners'/>
        </div>

      </div>
    </div>
    </>
  );
  // const date = new Date();
  // const formattedDate = format('dd,mm,yyyy')
  // console.log(formattedDate)
}

export default App;


//1441*