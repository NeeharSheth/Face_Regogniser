function take_snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("esult").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';})
}

console.log("ml5 version",ml5.version);

Webcam.set({
    width: 320,
    height: 400,
    image_format: 'png',
png_quality: 70
});
camera= document.getElementById("camera");
Webcam.attach(camera);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FPK800EeU/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}