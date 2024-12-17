
// componet interface for button
 
 type variables ="primary"|"secondary";
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
        "primary":"bg-purple-600",
        "secondary":"bg-purple-300"
    }


    // Style for the size
     const sizeStyle={
        "sm":"p-2 rounded-xl  ",
        "lg":"pl-16 pr-16 pt-4 pb-4 rounded-2xl   "
    }

    //defult Style for additional style
    const defaultStyle="text-white flex justify-center m-3";


export const Button=(pros:buttonProps)=>{
                            //for //for color                 //size               //defult
    return <div className={ `  ${variableStyle[pros.variable]} ${sizeStyle[pros.size]} ${defaultStyle}` } onClick={pros.onClick}>
          {pros.StartIcon? <div className="pr-2">{pros.StartIcon}</div> :null}{pros.text} 
           {pros.EndIcon} 

    </div>
}


