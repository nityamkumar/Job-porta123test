import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describe block to group related tests for AppComponent
describe('AppComponent', () => {
  
  // beforeEach block to set up the TestBed configuration before each test
  beforeEach(async () => {
    // TestBed.configureTestingModule is used to configure the testing module
    await TestBed.configureTestingModule({
      // Imports the component being tested (AppComponent) into the testing module
      imports: [AppComponent],
    }).compileComponents(); // compiles all components in the testing module
  });

  // Test case: should create the app
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // creates a component fixture for the AppComponent
    const app = fixture.componentInstance; // retrieves the component instance
    expect(app).toBeTruthy(); // asserts that the component instance is truthy (not null or undefined)
  });

  // Test case: should have the 'ng-job-search' title
  it(`should have the 'ng-job-search' title`, () => {
    const fixture = TestBed.createComponent(AppComponent); // creates a component fixture for the AppComponent
    const app = fixture.componentInstance; // retrieves the component instance
    expect(app.title).toEqual('ng-job-search'); // asserts that the title property of the component matches 'ng-job-search'
  });

  // Test case: should render title
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // creates a component fixture for the AppComponent
    fixture.detectChanges(); // triggers change detection to update the component's view
    const compiled = fixture.nativeElement as HTMLElement; // retrieves the native HTML element of the component
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng-job-search'); // asserts that the h1 element's text content contains 'Hello, ng-job-search'
  });
});
