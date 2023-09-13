import { useState } from 'react'


function App() {
  let [text,setText] = useState("")
  let [text2,setText2] = useState("")
  let [arry,setArry] = useState([])
  let [swich,setSwich] = useState(false)
  let [editid,setEditid] = useState("")

  let handleChange = (e)=>{
    setText(e.target.value)
    
  }
  let handleChange2 = (e)=>{
    setText2(e.target.value)
    
  }

  let handleClick = ()=>{
    let arr =[...arry]
    arr.push({
      firstName : text,
      lastName : text2
    })
    setArry(arr)
    setText("")
    setText2("")
    
  }

  let handleDelete = (id) =>{
    let arr = [...arry]
    arr.splice(id,1)
    setArry(arr)
    
  }

  let handleEdit = (text,id)=>{
    setText(text.firstName)
    setText2(text.lastName)
    setSwich(true)
    setEditid(id)
  }

 let handleUpdate = ()=>{
     let arr = [...arry]
     arr[editid] ={
      firstName : text,
      lastName : text2
     }
     setArry(arr)
     setSwich(false)
     setText("")
    setText2("")
 }

  return (
    <div className='bg-red-400 w-[700px] mx-auto h-[600px] text-center pt-10 rounded-2xl' >
      <h1 className='font-bold text-[64px]'>TODO</h1>
      <input placeholder='First Name' className='w-[400px] block mx-auto border border-solid border-green-500 py-3 px-10 rounded-xl' onChange={handleChange} value={text}/>
      <input placeholder='Last Name' className=' w-[400px] block mx-auto border border-solid border-green-500 py-3 px-10 rounded-xl mt-2 mb-2' onChange={handleChange2} value={text2}/>
      {swich 
      ?
      <button className='py-3 px-10 bg-green-500 text-white hover:text-black rounded-2xl font-bold border border-solid border-green-500 hover:bg-transparent duration-300 ease-in' onClick={handleUpdate}>update</button>
      :

      <button className='py-3 px-10 bg-green-500 text-white hover:text-black rounded-2xl font-bold border border-solid border-green-500 hover:bg-transparent duration-300 ease-in' onClick={handleClick}>submit</button>
    }

     
     <div className='flex gap-x-2 gap-y-2 mt-3 flex-wrap'>
     {arry.map((iteam,index) =>(
        <div key={index}>
          <div className='w-[150px] h-[150px] bg-yellow-200 rounded-lg '>
        <h1 className='pt-4 text-2xl font-bold text-black'>{iteam.firstName}</h1>
        <h1 className='text-2xl font-bold text-black mb-2'>{iteam.lastName}</h1>
        <button className='mr-1 px-3 py-1 bg-purple-500 rounded-lg text-white font-semibold' onClick={ ()=> handleDelete(index)}>delete</button>
        <button className='mr-1 px-3 py-1 bg-purple-500 rounded-lg text-white font-semibold' onClick={ ()=> handleEdit(iteam,index)}>edit</button>
        </div>
        </div> 
      )) }
     </div>
     
    </div>
  )
}

export default App
