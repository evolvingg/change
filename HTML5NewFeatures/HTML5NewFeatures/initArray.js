onmessage = function (msgfrmMainThread) {

    console.log("Message from Main thread : " + msgfrmMainThread.data);

    //var d = document.getElementById('btn');
    //console.log(d.value);
    var myArraydata = [];

    for (var i = 0; i <=2000; i++) {
        myArraydata[i] = [];
        for (var j = 0; j < 2000; j++) {
            myArraydata[i][j] = Math.random();
        }
    }

    postMessage(myArraydata);// send the array to the main thread !
    myArraydata = null; // done with the array !
}