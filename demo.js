if (typeof(Worker) !== "undefined") {
    document.alert("support");
  } else {
    // Sorry! No Web Worker support..
   document.alert("Not Supported");
  }