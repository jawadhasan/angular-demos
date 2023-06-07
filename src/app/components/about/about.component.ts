import { Component } from '@angular/core';

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
  `,
})
export class AboutComponent {}
