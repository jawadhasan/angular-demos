import { Component } from '@angular/core';

@Component({
  selector: 'app-tempref-sample',
  template: `<div>
    <h3>{{ title }}</h3>
    <p>This component is a child. It has a method hello()</p>
    <p>hello() method can be called by parent component using TemplateReference Variable</p>

  </div>`,
})
export class TempRefSampleComponent {
  title = 'TempRef Sample component';

  hello(){
    alert('hello from child component');
  }

  hello2(){
    alert('hello2 from child component');
  }
}
