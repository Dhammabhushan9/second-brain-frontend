
// componet interface for button
 
 type variables ="primary"|"secondary";
 type sizes="sm"|"lg";
 export interface buttonProps {
    variable:variables;
    size:sizes;
    text:String;
    StartIcon?:any;
    EndIcon?:any;
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
        "lg":"pl-8 pr-8 pt-2 pb-2 rounded-2xl h- "
    }

    //defult Style for additional style
    const defaultStyle="text-white flex justify-center m-3";


export const Button=(pros:buttonProps)=>{
                            //for //for color                 //size               //defult
    return <div className={ `  ${variableStyle[pros.variable]} ${sizeStyle[pros.size]} ${defaultStyle}` } onClick={pros.onClick}>
            <p>{pros.StartIcon}</p>
            <p>{pros.text}</p> 
            <p>{pros.EndIcon}</p>

    </div>
}


