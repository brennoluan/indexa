import { ChangeDetectorRef, Component, effect, inject, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-erro',
  imports: [],
  templateUrl: './message-erro.html',
  styleUrl: './message-erro.css',
})
export class MessageErro {
  control = input.required<FormControl>();
  private changeDetector = inject(ChangeDetectorRef);

  constructor() {
    effect(onCleanup => {
      const subscription = this.control().events.subscribe(() => this.changeDetector.markForCheck());
      onCleanup(() => subscription.unsubscribe());
    });
  }
}
