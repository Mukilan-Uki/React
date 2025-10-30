import { useEffect, useState } from "react";
import img2 from '/home/uki-dsa-04/Mukilan/UKi/React/Days/src/components/assets/heart-mark-svgrepo-com.svg'
import img1 from '/home/uki-dsa-04/Mukilan/UKi/React/Days/src/components/assets/vegetable-food-broccoli-svgrepo-com (1).svg';
import img3 from '/home/uki-dsa-04/Mukilan/UKi/React/Days/src/components/assets/ibm-svgrepo-com.svg'
import img4 from '/home/uki-dsa-04/Mukilan/UKi/React/Days/src/components/assets/google-chrome-svgrepo-com.svg'

export default function ButtonLike(){
        let[hhh,setheart]=useState(0);
        let heartClicked=()=>{
            setheart(hhh+1);
            console.log(hhh);
        }
        let[vvv,setveg]=useState(0);
        let vegClicked=()=>{
            setveg(vvv+1);
            console.log(vvv);
        }
        let[iii,setibm]=useState(0);
        let ibmClicked=()=>{
            setibm(iii+1);
            console.log(iii);
        }
        let[ccc,setchr]=useState(0);
        let chromeClicked=()=>{
            setchr(ccc+1);
            console.log(ccc);
        }
    
        let fun1=()=>{
            if(hhh>=4){
                alert('You clicked HEART several times');
            }
        }
        let fun2=()=>{
            if(vvv>=4){
                alert('You clicked VEGETABLE several times');
            }
        }
        let fun3=()=>{
            if(iii>=4){
                alert('You clicked IBM several times');
            }
        }
        let fun4=()=>{
            if(ccc>=4){
                alert('You clicked CHROME several times');
            }
        }
        useEffect(fun1,[hhh])
        useEffect(fun2,[vvv])
        useEffect(fun3,[iii])
        useEffect(fun4,[ccc])
    
        return(
            <>
            <button onClick={vegClicked} style={{padding:'15px'}}><img src={img1} style={{width:'50px',height:'50px'}}></img></button>
            <button onClick={heartClicked} style={{padding:'15px'}}><img src={img2} style={{width:'50px',height:'50px'}}></img></button>
            <button onClick={ibmClicked} style={{padding:'15px'}}><img src={img3} style={{width:'50px',height:'50px'}}></img></button>
            <button onClick={chromeClicked} style={{padding:'15px'}}><img src={img4} style={{width:'50px',height:'50px'}}></img></button>
            </>
        )
}