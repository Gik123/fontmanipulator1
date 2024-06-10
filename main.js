 function setup(){
        video = createCapture(VIDEO);
        video.size(550, 500);
    
    canvas = createCanvas(550, 400);
    canvas.position(600, 120);
    
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
    }

    function modelloaded(){
        console.log('PoseNet is initialized')
    }

    function gotposes(results){
        if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX + "noseY = " + noseY);
    
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);
        }
    }