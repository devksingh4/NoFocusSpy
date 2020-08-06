document.hidden = false;
document.visibilityState = 'visible';
for (events of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
    window.addEventListener(events, function(event) {
          event.stopImmediatePropagation();
      }, true);
  }