export function scrollFunction() {
    
    try{if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.getElementById("navbarsticky").style.position = "fixed", "important";
  document.getElementById("myInput").style.height = "40px";
        document.getElementById("navbarsticky").style.boxShadow = "rgba(144, 144, 144, 0.48) 0px 1px 5px";
        
    } else {
        document.getElementById("navbarsticky").style.position = "relative";
        document.getElementById("myInput").style.height = "44px";
        document.getElementById("navbarsticky").style.boxShadow = "0px 0px 0px #fff";
    }}catch(error){}
  }


export function keyDetectHome(e, idNum){
    try {
        if (e.keyCode === 40){
            const id = 'sug' + idNum;
            const sugg = document.getElementById(id);
            sugg.style.background = '#f5f5f5';
            if (idNum > 0){
                prev_id = 'sug' + (idNum-1);
            }else{
                prev_id = 'sug' + 5;
            }
            const prev_sugg = document.getElementById(prev_id);
            prev_sugg.style.background = '#ffffff';
        }else if(e.keyCode === 38){
            const id = 'sug' + idNum;
            const sugg = document.getElementById(id);
            sugg.style.background = '#f5f5f5';
            if (idNum < 5){
                prev_id = 'sug' + (idNum+1);
            }else{
                prev_id = 'sug' + 0; 
            }
            const prev_sugg = document.getElementById(prev_id);
            prev_sugg.style.background = '#ffffff';
        }
    } catch (error) {
        // console.log(error)
    }
    let prev_id = '';
    
}

export function keyDetectNav(e, idNum){
    try {
        if (e.keyCode === 40){
            const id2 = 'sugg' + idNum;
            const sugg2 = document.getElementById(id2);
            sugg2.style.background = '#f5f5f5';
            if (idNum > 0){
                prev_id2 = 'sugg' + (idNum-1);
            }else{
                prev_id2 = 'sugg' + 5; 
            }
            const prev_sugg2 = document.getElementById(prev_id2);
            prev_sugg2.style.background = '#ffffff';
        }else if(e.keyCode === 38){
            const id2 = 'sugg' + idNum;
            const sugg2 = document.getElementById(id2);
            sugg2.style.background = '#f5f5f5';
            if (idNum < 5){
                prev_id2 = 'sugg' + (idNum+1);
            }else{
                prev_id2 = 'sugg' + 0; 
            }
            const prev_sugg2 = document.getElementById(prev_id2);
            prev_sugg2.style.background = '#ffffff';
        }
    } catch (error) {
        // console.log(error)
    }
    let prev_id2 = '';
    
}