import { useRef, useState } from "react";
import { Crossicon } from "../icons/CrossIcon";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const CreateContentModel = ({ open, onClose }: { open: boolean ,onClose: () => void; }) => {


    enum ContentType{
        Video="Video",
        Twitter="Twitter",
        Document="Document",
        Link="Link"
    }

    const linkUseRef=useRef<HTMLInputElement>();
    const TitelUseRef=useRef<HTMLInputElement>();
    const  [type,setType]=useState(ContentType.Video)


    
    async function Onsubmit() {

        const link=linkUseRef.current?.value;
        const title=TitelUseRef.current?.value;

        /// snding req to the backend
        if(link==null && title==null){
           return onClose()
            
        }
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link:link,
            type:type,
            title:title
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })  

        console.log("`${BACKEND_URL}/api/v1/content`")
        onClose()
    }  


    if (!open) return null; // Return null if `open` is false.

    return (
        <div>
             
     
        <div className="content-center fixed w-screen h-screen top-0 left-0 ">
            <div className="flex justify-center">
                <span className="bg-red-100 p-5 border-4 rounded-md">
                    <div className="flex flex-row-reverse">
                         <div className="cursor-pointer" onClick={onClose}>
                        <Crossicon />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Input referance={TitelUseRef} placeholder="Title" />
                        <Input referance={linkUseRef} placeholder="Link" />
                    </div>
                    <h1 className="font-xl">Type of Content</h1>
                    <div className="flex gap 2  opacity-100 text-black-100">
                    
                        <Button size="sm" onClick={()=>{setType(ContentType.Video)}} variable={type===ContentType.Video ?"nutral":"secondary"} text="Video"/>
                        <Button size="sm" onClick={()=>{setType(ContentType.Twitter)}}  variable={type===ContentType.Twitter?"nutral":"secondary"} text="Twitter"/>
                        <Button size="sm" onClick={()=>{setType(ContentType.Document)}} variable={type===ContentType.Document?"nutral":"secondary"} text="Document"/>
                        <Button size="sm" onClick={()=>{setType(ContentType.Link)}} variable={type===ContentType.Link ?"nutral":"secondary"} text="Link"/>

                    </div>

                    <div className="opacity-100">
                        <Button onClick={Onsubmit} size="sm" variable="primary" text="SUBMIT" />
                    </div>
                </span>
            </div>
        </div>
        </div>
    );
};

// Input component
 export function Input({  referance , placeholder }: { referance:any, placeholder: string }) {
    return (
        <div>
            <input
                type="text"
                className="px-4 py-2 rounded-xl border-3"
                placeholder={placeholder}
                ref={referance}
            />
        </div>
    );
}
