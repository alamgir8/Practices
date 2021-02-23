import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const friends = ['Hanif', 'Aminul', 'Alamin', 'Rasel', 'Lemon', 'Munna' ]
  const personName = ['Hanif', 'Sadio Mane','Khabib']
  const personJob = ['Student', 'MMA', 'Footballer']
  const personNationality = ['Senegal', 'Russia', 'Bangladeshi']

  // get all array value by map loop method
const personDetails = personName.map(person => person);
console.log(personDetails);


  const products =[
      {name: 'Photography (20GB)',
      price: '$9.99/mo',
      description: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).',
      },
      {name: 'Photography Pro (40GB)',
      price: '$209.99/mo',
      description: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).',
      },
      {name: 'All Apps',
      price: '$52.99/mo',
      description: 'Get all 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat.',
      },
      {name: 'Acrobat Pro',
      price: '$14.99/mo',
      description: 'The complete PDF solution for working anywhere (includes desktop, web, and mobile access).',
      }
  ]

  //for get value from array by map loop method
const productName = products.map(product => product.name);
console.log(productName);

  var style={
    backgroundColor: 'darkgray',
    color: 'black',
    borderRadius: '10px',
    padding: '20px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2 style={{backgroundColor:'lightgrey', color: 'black', borderRadius:'10px', padding:'20px'}}>Hello World!</h2>
        <p style={style}>I'am From React</p>

        {/* for get an object value in an array by dynamic way */}
        <Product product={products[0]}></Product> 
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

{/* for get value from an array by dynamic way */}
        <Person name={personName[0]} job={personJob[0]} nationality={personNationality[2]}></Person>
        <Person name={personName[2]} job={personJob[1]} nationality={personNationality[1]}></Person>
        <Person name={personName[1]} job={personJob[2]} nationality={personNationality[0]}></Person>
        

     {/* for get value by dynamic way */}
        <Person name='Alamgir Hossain' job='Student' nationality='Bangladeshi'></Person>
        <Person name='Captain Jack Sparrow' job='Actor' nationality='US'></Person>
        <Person name='Mohammad Salah' job='Footballer' nationality='Egypt'></Person>
        

      {/* for get value from an array by dynamic way in more shorter then upper method  by map loop, in this case  if someone add, or delete value then it will updated dynamically*/}
      {
        products.map(productElement => <Product product={productElement}></Product>)
      }
     <ul>
     {
        friends.map(friend => <li>{friend}</li>)
      }
     </ul>

      <Counter></Counter>
      <User></User>

        
      </header>
    </div>
  );
}

function Counter() {
  // its called react hook
  const [count, setCount] = useState(10);
  // const IncreaseHandler = () => setCount(count + 1); //for shorter method
  // {
  //   const newCount = count + 1; //for increase value
  //   setCount(newCount);
  // }
  return(
    <div style={{margin: '50px'}}>
      <h2>Count : {count}</h2>
      <button style={{fontSize:'18px', padding: "5px", margin: '10px', borderRadius: '5px', cursor: 'pointer'}} onClick= {() => setCount(count + 1)}>Increase</button>
      <button style={{fontSize:'18px', padding: "5px", margin: '10px', borderRadius: '5px', cursor: 'pointer'}} onClick= {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function User() {
  const [ user, setUser] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])

  return(
    <div style={{margin: '150px'}}>
      <h2>Dynamic User : {user.length} </h2>
     <ul>
     {
        user.map(user => <li>{user.name}</li>)
       
      },
      {
         user.map(userEmail => <li>{userEmail.email}</li>)
      }
     
     </ul>
    </div>
    
  )
  
}

function Product(props) {
  const divStyle={
    width: '300px',
    height: '300px',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
    color:'black',
    padding:'20px',
    margin: '20px'
  }
  const {name, price, description} = props.product;
 
  return(
    <div>
        <div style={divStyle}>
        <h4 style={{margin: '0px', textAlign: 'start'}}>{name}</h4>
        <p style={{fontSize: '40px', margin: '0px', textAlign: 'start'}}> {price} </p>
        <p style={{fontSize: '16px', textAlign: 'start'}}> {description} </p>
        <button style={{padding:'10px', marginTop:'50px', borderRadius:'5px', cursor: 'pointer', border: 'none', backgroundColor: '#1473e6', color: '#fff'}}>Buy Now</button>
    </div>
    </div>
  )
}




function Person(props) {
  const styleP ={
    margin:'0px', padding:'0px', textAlign: 'start'
  }
  
  return (
    <div style={{height:' 100px', width:' 400px', margin:'10px', padding:'20px', borderRadius: '10px', backgroundColor:'lightsalmon',color:'black'}}>
      <h4 style={styleP}>Name: {props.name}</h4>
      <p style={styleP}>Job: {props.job}</p>
      <p style={styleP}>Nationality: {props.nationality}</p>
    </div>
  )
}

export default App;
