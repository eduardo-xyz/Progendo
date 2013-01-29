
//to prevent dragging, uncomment this section
function preventBehavior(e)
{
    e.preventDefault();
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function alertDismissed() {
    console.log("alertDismissed..");
}

function iPadAlert(title, message, buttonText)
{
	navigator.notification.alert(
                                 message,  // message
                                 alertDismissed,         // callback
                                 title,            // title
                                 buttonText                  // buttonName
                                 );
}

function GET_IPAD_UUID() {
    var uuid = device.uuid;
    //console.log("GET_IPAD_UUID -> "+uuid);
    return uuid;
}

//
// PhoneGap is ready
//
function onDeviceReady() {
    
    InitializeLoadingAnimation();
    
    initFastButtons();
    
    //onLocalStorageDeleteAll();
    
    $("#video1").bind("ended", function() {
        $('#video1').hide();
        $('.atrasInicioVideos_buttons').fadeIn();
        $('#submit_play_video1').fadeIn();
    });    

    $("#video2").bind("ended", function() {  
        $('#video2').hide();                                     
        $('.atrasInicioVideos_buttons').fadeIn();
        $('#submit_play_video2').fadeIn();
    });
    initDragAndDrop();
}

function initDragAndDrop(){

    $( "div.draggable" ).draggable({ appendTo: "div.droppable", revert: 'invalid' });
    $( "div.droppable" ).droppable({ accept: "div.draggable" });
}

// onSuccess Geolocation
//
function Geolocation(position) {
    console.log("Geolocation");
    
    //var timestamp = new Date(position.timestamp);
    var timestamp = new Date("DD/MM/YY hh:mm:ss");
    
    var element = document.getElementById('geolocation');
    element.innerHTML = '<h3>Open Event</h3>Latitude: '           + position.coords.latitude              + '<br />' +
    'Longitude: '          + position.coords.longitude             + '<br />' +
    'Altitude: '           + position.coords.altitude              + '<br />' +
    'Accuracy: '           + position.coords.accuracy              + '<br />' +
    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
    'Heading: '            + position.coords.heading               + '<br />' +
    'Speed: '              + position.coords.speed                 + '<br />' +
    'Timestamp: '          + timestamp         + '<br />';
    
    //var screenId = document.getElementById('screenId').value;
    
    //SaveLogInfo(screenId,"Pantalla Abierta", timestamp);
}

function InitializeLoadingAnimation()
{
    var cl = new CanvasLoader('canvasloader-container');
    cl.setColor('#ffffff'); // default is '#000000'
    cl.setDiameter(200); // default is 40
    cl.setDensity(160); // default is 40
    cl.setRange(0.5); // default is 1.3
    cl.setSpeed(10); // default is 2
    cl.setFPS(11); // default is 24
    cl.show(); // Hidden by default
}