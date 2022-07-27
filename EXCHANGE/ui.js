class UI{
    static changeFirstUnit(firstUnit){
        const outputFirst=document.getElementById("outputFirst");
        outputFirst.innerHTML=firstUnit;
    }
    static changeSecondUnit(secondUnit){
        const outputSecond=document.getElementById("outputSecond");
        outputSecond.innerHTML=secondUnit;
    }
    static changePlaceHolder(result){
        const outputResult=document.getElementById("outputResult");
        outputResult.value=result;
    }
}