function idCard(tNum){
    let numArray = tNum.split('');
    let W=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    let CheckCode=[1,0,'X',9,8,7,6,5,4,3,2];
    let sum=0;
    let tCode='';
    for(let i=0,len=16;i<=len;i++){
    sum=sum+numArray[i]*W[i];
    }
    for(let i=0,len=16;i<=len;i++){
    tCode=tCode+numArray[i];
    }
    return tCode+CheckCode[sum%11]
    }
