import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appWidgetContent]',
})
export class WidgetContentDirective {
  constructor() {}
  public tpl = inject(TemplateRef);
}
