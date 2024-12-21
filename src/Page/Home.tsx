
import notion from'../assets/notion.mp4'
import brainHome from '../assets/brainhome.png'
import { Button } from '../Componet/Button'
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react';


{/*image for bento div*/}
import div1 from'../assets/div1.svg'
import div2 from'../assets/div3.svg'
import div21 from'../assets/div21.svg'
import div211 from'../assets/free.svg'
import div212 from'../assets/organiz.svg'
import div31 from'../assets/div31.jpg'

export function Home(){
    const navigate=useNavigate()

   function onSignUp(){
    navigate("/signup")
   }

  function onSignIn(){
    navigate("/signin")
}

    return <div className="h-screen   bg-white-500   mx-52   " >
       
       <div className="flex font-mono mt-32 gap-2 justify-between item-center justify-center flex-wrap  ">
            <div className="flex flex-col gap-2 ">
                <h1 className="text-6xl font-semibold	">The happier</h1>
                <h1 className="text-6xl font-semibold	">workspace</h1>
                <h5 className="text-lg font-medium" >Write. Plan. Collaborate. With a little <br/> help from AI.</h5>
                <h1 className="text-xl font-medium	"  >"Ready to Save Your Ideas? <br />Start Building Your Second Brain Today!"</h1>

                <div className='w-48   flex  '>
        <Button size="lg" variable="nutral" text="SignUp" onClick={onSignUp}  />
        <Button size="lg" variable="secondary" text="SignIn" onClick={onSignIn}  />
        </div>
            </div>

            <div>
                <video   className='h-96' src={notion}></video>
            </div>
       </div>
    

        
        <HomeCard title1="Build perfect" title2='Find everything.' ImgLink={brainHome}/>
         
            <br /><br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-auto text-xl sm:text-2xl lg:text-4xl items-center">
  {/* Row 1 */}
  <div className="hover:shadow-2xl bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <div className="flex items-center">
      <img src={div1} alt="Feature icon" className="h-auto w-auto max-h-16 mr-4" />
      <h1 className="font-custom text-black">Use it everywhere</h1>
    </div>
  </div>

  <div className="hover:shadow-2xl bg-gradient-to-r from-green-300 to-teal-300 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <h1 className="font-custom text-black">Align with your aesthetic</h1>
  </div>

  <div className="hover:shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-400 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <div className="flex items-center gap-4">
      <img src={div2} alt="Another feature icon" className="h-auto w-auto max-h-16" />
      <h1 className="font-custom text-black">Use it everywhere</h1>
    </div>
  </div>

  {/* Row 2 */}
  <div className="col-span-2 hover:shadow-2xl bg-gradient-to-r from-yellow-300 to-orange-300 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <div className="flex items-center gap-4">
      <img src={div21} alt="Collaboration feature"  />
      <h1 className="font-custom text-black">Effortless collaboration</h1>
    </div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="hover:shadow-2xl bg-gradient-to-r from-pink-200 to-purple-300 p-4 rounded-3xl flex items-center justify-center h-28 transition-transform duration-300 transform hover:scale-105">
      <div className="flex items-center gap-4">
        <img src={div211} alt="Free feature" className="h-auto w-auto max-h-10" />
        <h1 className="font-custom text-black">It's free</h1>
      </div>
    </div>
    <div className="hover:shadow-2xl bg-gradient-to-r from-cyan-200 to-blue-300 p-4 rounded-3xl flex items-center justify-center h-28 transition-transform duration-300 transform hover:scale-105">
      <div className="flex items-center gap-4">
        <img src={div212} alt="Organization feature" className="h-auto w-auto   " />
        <h1 className="font-custom text-black">Stay organized</h1>
      </div>
    </div>
  </div>

  {/* Row 3 */}
  <div className="hover:shadow-2xl bg-gradient-to-r from-red-300 to-pink-300 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <img className="h-auto w-auto max-h-52" src={div31} alt="Markdown feature" />
  </div>

  <div className="col-span-2 hover:shadow-2xl bg-gradient-to-r from-purple-300 to-blue-300 p-4 rounded-3xl flex items-center justify-center h-60 transition-transform duration-300 transform hover:scale-105">
    <h1 className="font-custom text-black ml-4 lg:ml-20 text-center">Markdown support: Write, preview, and publish your notes in Markdown format.</h1>
  </div>
</div>



<div className='p-32 mt-96'></div>     
    </div>
}

export function HomeCard({title1,title2 ,ImgLink}:{
    title1:string,
    title2:string,
    ImgLink:ReactElement
} ){
    return <div className='mt-32 flex flex-col gap-20    '>
    <h1 className="text-5xl font-bold	">Find everything. <br/> Instantly.  </h1>
    <img className="max-h-100 border-4  rounded-3xl hover:drop-shadow-2xl shadow-gold-100 " src={ImgLink} alt="" />
    </div>
}