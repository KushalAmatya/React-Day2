import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Object from './components/Object'
import Array from './components/Array'

function App() {
  const [count, setCount] = useState(0)
  // function handleclick(){
  //   alert("Hello");
  // }
  function handlechange(e){
    console.log(e.target.value)
  }
  const data = {id:1,name:'Kushal'}
  const arr = ['Kushal','Samik','Amrit','Pranit']
  const data1 = [{id:2,name:'Samik'},{id:3,name:'Amrit'},{id:4,name:'Pranit'}]
  const arr1 =[...arr,'Rohna']
  console.log(...arr)
  console.log(...arr1)
  return (
    <>
      <Button type={"submit"} label={"red"} handleclick={handleclick}/>
      <Button type={"submit"} label={"blue"} handleclick={handleclick}/>
      <Button type={"submit"} label={"green"} handleclick={handleclick}/>
      <Input type={"text"} handlechange={handlechange} />
      <Object data={data}/>
      {/* {arr.map((item,index)=>console.log(index))}
      {data1.map((item)=>console.log(item.id))} */}
      <Array />
    </>
  )
}

export default App
