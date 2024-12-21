
// componet interface for button
 
 type variables ="primary"|"secondary"|"nutral";
 type sizes="sm"|"lg";
 export interface buttonProps {
    variable:variables;
    size:sizes;
    text:string;
    StartIcon?: React.ReactNode;
    EndIcon?: React.ReactNode;
    onClick:()=>void;
}

    //condition for the button color
    const variableStyle={
        "primary":"text- bg-purple-600",
        "secondary":"bg-purple-500 text-purple-600",
        "nutral":"bg-red-600 text-black-600"
    }


    // Style for the size
     const sizeStyle={
        "sm":"p-2 rounded-xl  ",
        "lg":"pl-16 pr-16 pt-4 pb-4 rounded-2xl   "
    }

    //defult Style for additional style
    const defaultStyle="cursor-pointer px-4 py-2 text-white flex justify-center m-3";


export const Button=(pros:buttonProps)=>{
                            //for //for color                 //size               //defult
    return <div className={ ` ${defaultStyle} ${variableStyle[pros.variable]} ${sizeStyle[pros.size]} ` } onClick={pros.onClick}>
          {pros.StartIcon? <div className="pr-2">{pros.StartIcon}</div> :null}{pros.text} 
           {pros.EndIcon} 

    </div>
}


