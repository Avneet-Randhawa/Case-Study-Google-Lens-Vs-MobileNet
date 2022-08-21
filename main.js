// function setup() {
//     canvas = createCanvas(300,500);
//     canvas.position(150,410);
//     video = createCapture(VIDEO);
//     video.hide();
//     classifier = ml5.imageClassifier('MobileNet',modelLoaded);
//   }
//   function modelLoaded(){
//     console.log("Model Is Loaded!!");
//   }
//   function draw(){
//     classifier.classify(video,got_results);
//   }
//   function got_results(error,results){
//     if(error){
//       console.error(error);
//     }else{
//       if((results[0].confidence > 0.5) && (previous_result != results[0].label)){
//           console.log(results);
  
//         //   document.getElementById("result-object-name").innerHTML = previous_result;
//         //   document.getElementById("result-object-accuracy").innerHTML = results[0].confidence.toFixed(3);
//       }
//     }
//   }