// iterate over Trains array in seeds and add the line name to the drop-down
function populateLines(){
  let blankChoice = "<option value='---'>---</option>"
  $('#trainSelect').append(blankChoice)
  Trains.forEach((train) => {
    $('#trainSelect').append(`<option>${train[0].line}</option>"`)
  })
}

function reset() {
  $('#origin').css('visibility','hidden')
  $('#destination').css('visibility','hidden')
  $('#chooser').css('visibility', 'hidden')
  $('#originSelect').children().remove();
  $('#destinationSelect').children().remove();
  $('#trip').children().remove()
  $('#foodChoice').val(' ')
  $('#songRequest').css('visibility', 'hidden')
  store.restaurants = []
  store.stops = []
  line = []
  currentTrip = undefined
  currentLine = undefined

}

function populateOriginStops(){
  let lineChoice = $('#trainSelect').val();
  let blank = "<option value='---'>---</option>";
  $('#originSelect').append(blank)
  var line = linesObject[lineChoice]

  let stopList = []
  var stops = line.map( (stop) => {
    let stationStop = new Stop(stop)

    let html = `<option value='${stationStop.stopNum}'>${stationStop.name}</option>`
    $('#originSelect').append(html)
    stopList.push(stationStop)
  })


  let curLine = new Line(lineChoice, stopList)
  return curLine

}

function populateDestinationStops(value, currentLine){

  var blank = "<option value='---'>---</option>";
  $('#destinationSelect').append(blank)

  var stops = currentLine.stops.map( (stop) => {
    if (stop.stopNum !== value){
      let html = `<option value='${stop.stopNum}'>${stop.name}</option>`
      $('#destinationSelect').append(html)
    }
  })
}
