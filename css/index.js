function storeData(v){
    var txtInput = document.getElementById('txtInput');
    var oldvalue = txtInput.value;
    txtInput.value = oldvalue +v ;
    var t = oldvalue.length;
    var lastChr = oldvalue[t-1];
    var oprSym =["+","-","*","/",".","%","^","√",];
    if(oprSym.includes(v)){
        if(oprSym.includes(lastChr)){

            var removeLast= oldvalue.slice(0,-1);
            txtInput.value= removeLast+v;
        }
        else {

            txtInput.value = oldvalue +v ;
        }

    }

else {

    txtInput.value = oldvalue +v ;
}


}



function calData(){



    var txtInput= document.getElementById('txtInput');
    var oldvalue=eval(txtInput.value);
    txtInput.value = oldvalue  ;
}



function calData(){
    var txtInput= document.getElementById('txtInput');
   var oldvalue=txtInput.value;
   
    var z = oldvalue.slice(-2,-1);
    var x = oldvalue.slice(-2,-1);
    var xx = oldvalue.slice(0,1);
    var y= oldvalue.slice(0,4);
    var yy= oldvalue.slice(0,4);
    var w= oldvalue.slice(0,4);
    var ww = oldvalue.slice(0);

    var opm =["^"];
    var op =["√"];
    var om =["sin("];
    var oy =["cos("];
    var os =["tan("];
    
   
     if (opm.includes(z)){
        var a = oldvalue.slice(-1);
        var b = oldvalue.slice(0,-2);
        var c = Math.pow(b, a);
        txtInput.value = c;

    }
 



   else if(op.includes(xx)) {
        var l = oldvalue.slice(1);
        var m= Math.sqrt(l).toFixed(3);
        txtInput.value = m;

    }


    else if(om.includes(y)) {
        var n = oldvalue.slice(4,-1);   
        var o = Math.sin(n * Math.PI / 180).toFixed(3);
        txtInput.value = o;

    }

    else if(oy.includes(yy)) {
        var p = oldvalue.slice(4,-1);   
        var q = Math.cos(p * Math.PI / 180).toFixed(3);
        txtInput.value = q;

    }
    else if(os.includes(w)) {

        var t = oldvalue.slice(4,-1);   
        var u = Math.sin(t * Math.PI / 180).toFixed(3);
        var v = Math.cos(t * Math.PI / 180).toFixed(3);
        var s = u/v
        txtInput.value = s.toFixed(3);

    }

 


 

else{

    var txtInput= document.getElementById('txtInput');
    var oldvalue=eval(txtInput.value);
txtInput.value = oldvalue
}
       

  
    

}




function clearData (){
    var txtInput = document.getElementById('txtInput').value="";
}

function delData(){

    var txtInput = document.getElementById('txtInput');
    var oldvalue = txtInput.value;
    var backvalue= oldvalue.slice(0,-1);
        txtInput.value = backvalue
}