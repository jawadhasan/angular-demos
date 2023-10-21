let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true }
);

function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  console.log(`analytics`, body);

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
  //   fetch("/analytics", { body, method: "POST", keepalive: true });
}

try {
  function onFirstInputEntry(entry) {
    // Only report FID if the page wasn't hidden prior to
    // the entry being dispatched. This typically happens when a
    // page is loaded in a background tab.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Report the FID value to an analytics endpoint.
      sendToAnalytics({ fid });
    }
  }

  // Create a PerformanceObserver that calls `onFirstInputEntry` for each entry.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe entries of type `first-input`, including buffered entries,
  // i.e. entries that occurred before calling `observe()` below.
  po.observe({
    type: "first-input",
    buffered: true,
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
  console.error(e);
}

function performanceCallback(list, observer) {
  list.getEntries().forEach((entry) => {
    console.log(entry);
    // console.log(`name    : ${entry.name}`);
    // console.log(`type    : ${entry.type}`);
    // console.log(`start   : ${entry.startTime}`);
    // console.log(`duration: ${entry.duration}`);

    //todo send to analytics
  });
}

//performance wiring
if ("performance" in window) {
  console.log("performance API is available.");

  let observer = new PerformanceObserver(performanceCallback);
  // observer.observe({ type: "event", buffered: true });
 observer.observe({ entryTypes: ["event","paint","first-input"] });
  // observer.observe({ entryTypes: ["first-input",'event','mark', "largest-contentful-paint", 'measure', 'layout-shift','visibility-state','resource','navigation','paint'] });
} else {
  console.log("performance API not available.");
}

function performanceNowExample() {
  //performance now example
  const timeStart = performance.now();
  runMyCode();
  const timeTaken = performance.now() - timeStart;
  console.log(`runMyCode() executed in ${timeTaken}ms`);
}
function markExample() {
  performance.mark("start:app");
  performance.mark("start:init");

  init(); // run initialization functions

  performance.mark("end:init");
  performance.mark("start:funcX");

  funcX(); // run another function

  performance.mark("end:funcX");
  performance.mark("end:app");

  //An array of all mark objects in the Performance buffer can be extracted using:
  const mark = performance.getEntriesByType("mark");
  console.log(mark);

  //A PerformanceMeasure object is appended to the buffer with the calculated time duration.
  performance.measure("init", "start:init", "end:init");

  //To obtain this value, you can either request an array of all measures:
  const measure = performance.getEntriesByType("measure");
  console.log(measure);

  //or request a measure by its name:
  const initMeasure = performance.getEntriesByName("init");
  console.log(initMeasure);

  //Marks can be cleared by name or you can specify an empty value to clear all marks:
  //performance.clearMarks('start:init');

  //Similarly, measures can be cleared by name or an empty value to clear all:
  //performance.clearMeasures();
}

function paintExample() {
  const paintEntries = performance.getEntriesByType("paint");
  console.log(`paintEntries `, paintEntries);
  paintEntries.forEach((paintMetric) => {
    console.info(`${paintMetric.name}: ${paintMetric.startTime}`);
  });
}
