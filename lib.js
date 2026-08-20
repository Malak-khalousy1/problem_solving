

 export const sum_number =(arr)=>{

    for(let i =0;i<arr.length -1 ;i++){
        
        arr[i]= arr[i]+ arr[i+1];
    }

    return arr;
};

const gt =(x,y)=>{
    return x>y;
}
const st =(x,y)=>{
    return x<y;
}

export const sort =( arr =[] ,fun)=>{

    for(let i =0;i<arr.length  ;i++){
        for(let j =0;j<arr.length  ;j++){
        if ( fun(arr[j]>arr[j+1])){
            let temp = arr[j] ;
            arr[j]=arr[j+1];
            arr[j+1]=temp;

        }
    }
    }

    return arr;
};



export const sort_xy =( arr =[] )=>{

    for(let i =0;i<arr.length  ;i++){
        for(let j =0;j<arr.length  ;j++){
           arr[j] ==  floor(arr[arr[j]]* arr[arr[j]]+ arr[arr[j+1]]*arr[arr[j+1]]);
        if (arr[j]>arr[j+1]){
            let temp = arr[j] ;
            arr[j]=arr[j+1];
            arr[j+1]=temp;

        }
    }
    }

    return arr;
};

