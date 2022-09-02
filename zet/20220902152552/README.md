# What are Directives in Angular?

There are two Directives in Angular:
- *Attribute Directives:*
  
  Looks like a normal html attribute (possibly w/ data binding or event
  binding)

  Only affect / change the element they are used on

  `Rendere2`: `HostListener` to listen to Host Events, `HostBinding` to
  Host Properties.
  
- *Structural Directives:*

  Affect a whole area in the `DOM` (elements get added/removed).

  Structural Directives, such as `*ngIf` and `*ngFor`, or
  `<ng-template>` act as a template boundary. You cannot access template
  variables outside of these boundaries.

  Look like normal html attributes but have a leading `*` (for
  desurgaring).
  - `ngFor`: Output lists, getting Index
  - `ngStyle`: Dynamic Styling
  - `ngIf`: enhance with else condition, to Output Data conditionally
  - `ngClass`: Dynamic CSS Classes
  - `ngSwitch`: `*ngSwitchCase="Value that should be shown`,
    `*ngSwitchDefault`
  - `ngTemplate`: 
    - Property Binding `[ngIf]`: is going to be the same as `*nfIf`,
      will make the `ngIf`?
    - create your own structural directives `ng generate directive
      NAME`: `TemplateRef: What should
      be rendered`, `ViewContainerRef: Where should be rendered`

Related: 
 - https://angular.io/guide/structural-directives
 - https://angular.io/guide/attribute-directives

    #Angular #Directives #ngFor #ngIf
