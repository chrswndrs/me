# Understanding the Component Lifecycle in Angular

A component instance has a lifecycle that starts when Angular
instantiates the component class and renders the component view along
with its child views. The lifecycle continues with change detection, as
Angular checks to see when data-bound properties change, and updates
both the view and the component instance as needed. The lifecycle ends
when Angular destroys the component instance and removes its rendered
template from the DOM. Directives have a similar lifecycle, as Angular
creates, updates, and destroys instances in the course of execution.

Your application can use lifecycle hook methods to tap into key events
in the lifecycle of a component or directive to initialize new
instances, initiate change detection when needed, respond to updates
during change detection, and clean up before deletion of instances.

1). `ngOnChanges`
2). `ngOnInit`
3). `ngDoCheck`
4). `ngAfterContentInit`
5). `ngAfterContentChecked`
6). `ngAfterViewInit`
7). `ngAfterViewChecked`
8). `ngOnDestroy`

Related: 
 - https://angular.io/guide/lifecycle-hooks
 - Components zet tk

      #Angular #Components #lifecycle #lifecycleHooks
