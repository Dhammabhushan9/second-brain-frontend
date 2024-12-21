
import notion from'../assets/notion.mp4'
import brainHome from '../assets/brainhome.png'
import share from '../assets/share.png'
import { Button } from '../Componet/Button'
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react';


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

                <div className='w-48 flex  '>
        <Button size="lg" variable="nutral" text="SignUp" onClick={onSignUp}  />
        <Button size="lg" variable="secondary" text="SignIn" onClick={onSignIn}  />
        </div>
            </div>

            <div>
                <video   className='h-96' src={notion}></video>
            </div>
       </div>
    

        <div className='mt-32 flex flex-col gap-20    '>
        <h1 className="text-5xl font-bold	">Find everything. <br/> Instantly.  </h1>
        <img className="max-h-100 border-4  rounded-3xl hover:drop-shadow-2xl shadow-gold-100 " src={brainHome} alt="" />
        </div>
        <HomeCard title1="Build perfect" title2='docs, together.' ImgLink={share}/>
       
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