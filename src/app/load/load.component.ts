import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './load.component.html',
  styleUrl: './load.component.css'
})
export class LoadComponent {
  x = signal(5);
  y = signal(3);
  z = computed(() => this.x() + this.y()) as WritableSignal<number>;

  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });
  constructor(){
    console.log("signals",this.z());
    this.x.set(10);
    console.log("signals",this.z());
    this.x.update(value => value + 1);
    console.log("signals",this.z());

    effect(()=>{
      console.log("x 1",this.x());
      console.log("z 1",this.z());
      console.log("showCount 1",this.showCount());
      console.log(this.conditionalCount());

    })
  }

  calculateX(){
    this.x.set(200);
    console.log("200 ",this.z());
  }

  countBool(){
    this.showCount.set(false);
    this.count.set(10);
    console.log(this.conditionalCount());

    this.showCount.set(true);
    console.log(this.conditionalCount());
  }
  
}
