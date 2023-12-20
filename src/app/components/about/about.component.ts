import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h5>About Us</h5>
      <div className="col col-md-12 mb-3">
        <i>Powered By: </i>
        <a
          className="text-primary"
          href="https://awsclouddemos.com/"
          target="_blank"
          >awsclouddemos.com</a
        >
        |
        <a
          className="text-primary"
          href="https://hexquote.com/"
          target="_blank"
        >
          hexquote.com</a
        >
      </div>
    </div>
    <button class="btn btn-primary" (click)="logPerformance()">LogPerf</button>
  `,
})
export class AboutComponent implements AfterViewInit {
  constructor() {
    performance.mark('constructor');
    setTimeout(() => this.printMeasures(), 1000);
  }

  ngAfterViewInit(): void {
    // https://github.com/tomeustace/angular-performance/blob/master/src/app/app.component.ts

    performance.mark('routingEnd');

    performance.measure('routingMeasure', 'routingStart', 'routingEnd');

    performance.mark('afterViewInit');
    performance.measure(
      'constructorToAfterViewInit',
      'constructor',
      'afterViewInit'
    );
  }

  printMarks() {
    // const entries = performance.getEntriesByType("mark");
    // for (const entry of entries) {
    //   console.table(entry.toJSON());
    // }
  }

  printMeasures() {
    const entriesMeasures = performance.getEntriesByType('measure');
    for (const entry of entriesMeasures.filter(
      (ent) => !ent.name.includes('Zone')
    )) {
      // if(entry.duration > 5) {
      //   throw new Error('LONG RUNNING TASK: ' + entry.name);
      // }
      console.table(entry.toJSON());
    }
  }

  logPerformance() {
    console.log('log perforance...');

    // Get Navigation Timing entries:
    // var perfEntries = performance.getEntriesByType('navigation');
    // console.log(perfEntries);

    const [pageNav] = performance.getEntriesByType('navigation');

    // Request time only (excluding redirects, DNS, and connection/TLS time)
    const requestTime = pageNav.responseStart - pageNav.requestStart;

    // Response time only (download)
    const responseTime = pageNav.responseEnd - pageNav.responseStart;

    // Request + response time
    const requestResponseTime = pageNav.responseEnd - pageNav.requestStart;

    console.log(`RequestRespTime: ${requestResponseTime}`);


  }
}
