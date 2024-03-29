import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponent } from './reg.component';

describe('RegComponent', () => {
  let component: RegComponent;
  let fixture: ComponentFixture<RegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RegComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(RegComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RegComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
