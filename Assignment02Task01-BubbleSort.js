let bubble_Sort =  (...a) => {
        let swapp;
        let n = a.length - 1;
        let x = a;
        do{
            swapp=false;
            for(let i=1; i<n; i++){
              if(x[i] < x[i+1])
			  {
                let temp  = x[i];
                x[i] = x[i+1];
				x[i+1] = temp;
                swapp= true;
              }

            } n--;
        }while(swapp);
    return x;
  };
  
let dataset = [10,2,3,4,5,6,7,8,9]
alert(bubble_Sort(...dataset));

