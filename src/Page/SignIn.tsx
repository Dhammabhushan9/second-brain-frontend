import { useRef } from "react";
import { Button } from "../Componet/Button";
import { Input } from "../Componet/CreateContentModel";
import { BrianIcon } from "../icons/BrainIcon";
import { BACKEND_URL } from "../config";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

export function SignIn(){

    const userNameRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function OnSignIn(){
        const username= userNameRef.current?.value;
        const password =passwordRef.current?.value;
       
        //sending request to the bakend
         const response= await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username:username,
            password:password
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard")
    }



    return <div className="h-screen w-screen bg-sky-200  top-0 left-0 content-center  absolute">
        <div className=" flex  justify-center  ">
            
                <span className="bg-orange-100 p-10 border-2 rounded-xl">
                                <div className="my-6 mx-6 flex content-center gap-3">
                                <BrianIcon  />
                                <h1  className="font-bold text-2xl mt-3">Second Brain</h1>
                                </div>
                    <div className=" my-6 mx-6 flex flex-col gap-2"> 
                    <Input referance={userNameRef} placeholder="Email"/>
                    <Input referance={passwordRef} placeholder="Password"/>
                    </div>

                    <Button size="sm" variable="primary" text="SignIn" onClick={OnSignIn}/>
                </span>
        </div>

    </div>
}