 export const advicecondition = id => {
     if(id>199 && id<233){
         return 'Bad'
     }else if(id>299 && id<322){
         return 'Wet'
     }else if(id>499 && id<532){
         return 'Bad'
     }else if(id>599 && id<623){
         return 'Bad'
     }else if(id>700 && id<782){
         return 'Bad'
     }else{
         return 'Good'
     }
 }