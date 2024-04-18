import { ComponentFixture, DeferBlockBehavior, TestBed } from '@angular/core/testing';
import { WhenConditionExampleComponent } from './when-condition-example.component';
import { By } from '@angular/platform-browser';

describe('WhenConditionExampleComponent', () => {
  let component: WhenConditionExampleComponent;
  let fixture: ComponentFixture<WhenConditionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Playthrough,
      imports: [WhenConditionExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhenConditionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show @placeholder content', async () => {
    // Arrange
    const fixture = TestBed.createComponent(WhenConditionExampleComponent);

    // Act
    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('Something until the loading starts');
    expect(fixture.nativeElement.innerHTML).not.toContain('empty defer block');
  });

  it('should show @defer content on button press (when isVisible)', async () => {
    // Arrange
    const fixture = TestBed.createComponent(WhenConditionExampleComponent);

    // Act
    const button = fixture.debugElement.query(
      By.css('[data-test="button--isVisible"]'),
    ).nativeElement;
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    expect(fixture.nativeElement.innerHTML).toContain('empty defer block');
    expect(fixture.nativeElement.innerHTML).not.toContain('Something until the loading starts');
  });
});
