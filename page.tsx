'use client'
import { useEffect, useState } from "react";

export default function Home() {
  let [count,setcount] = useState(0)
  let [runing, setruning] = useState(false)
  useEffect(()=>{
let timer:any
if(runing){
  timer= setInterval(()=>{
    setcount((precount)=> precount + 1)
  },1000)
}
return ()=>{
  clearInterval(timer)
}
  },[runing,count])
  const  handlestart=()=>{
    setruning(true)

  }
  const  handlepause=()=>{
    setruning(false)
  }
  const  handleend=()=>{
    setruning(false)
    setcount(0)
    
  }
  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center ">
      <div className="bg-slate-400 p-10  flex-col gap-7 flex justify-center items-center rounded-lg">
        <h1 className="text-4xl font-bold">COUNTER APP</h1>
        <p className="text-3xl font-bold">{count}</p>
        <div className="flex gap-7">
          <button onClick={handlestart} className="bg-slate-500 p-3 rounded-lg hover:bg-slate-700">Start </button>
          <button onClick={handlepause} className="bg-slate-500 p-3 rounded-lg hover:bg-slate-700">Pause</button>
          <button onClick={handleend} className="bg-slate-500 p-3 rounded-lg hover:bg-slate-700">End</button>
        </div>
      </div>
    </div>
  )
}
