function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KlcuzqeDc/model.json',modelLoaded);

}
function modelLoaded(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
    if(error){
    console.error(error);
    }
    else{
  console.log(result);
  
    }
}