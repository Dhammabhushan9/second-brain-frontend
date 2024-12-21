
import { useState } from 'react';
import '../App.css'
import { Button } from '../Componet/Button'
import { Card } from '../Componet/Card';
import { CreateContentModel } from '../Componet/CreateContentModel';
import { DocsIcon } from '../icons/DocsIcon';
import  {PlusIcon}  from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../Componet/Sidebar';
import { useFetchContent } from '../Hook/useFetchContent';

export   function DashBoard(){

    const[modelOpen ,setModelOpen]=useState(false);
    const { content  } = useFetchContent();

    return (
      <>
           <Sidebar/>
  
          <div className='ml-80 min-h-screen bg-salate-100'>
          <CreateContentModel open={modelOpen} onClose={()=>{
        setModelOpen(false)
      }}/>
          <div className='flex flex-row-reverse py-5 mr-32 '>
          <Button  variable="primary" size="sm" text="Shear Brian"  StartIcon={<ShareIcon/>}       />
         
          <Button variable="secondary" size="sm" text="Add Content"  StartIcon={<PlusIcon/>}   onClick={() => {  setModelOpen(true) }}   />
   
          </div>
  
           
            <div className='flex gap-10 ml-10 flex-wrap'>
               
      

          
          
            {content.map(({ type, title, link }) => (
        <Card key={link} 
        cardIcon={<DocsIcon />} 
        type={type}
         title={title}
          link={link} />
      ))}
            </div>
          </div>
      </>
    )
}