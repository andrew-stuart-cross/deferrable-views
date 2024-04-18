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

  it('should pass having - defer (when isVisible)', async () => {
    // Arrange
    // await TestBed.configureTestingModule({
    //   deferBlockBehavior: DeferBlockBehavior.Playthrough,
    // }).compileComponents();

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
  });
});


// import { AppComponent } from './app.component';
// import { Component } from '@angular/core';
// import {
//   DeferBlockBehavior,
//   DeferBlockState,
//   TestBed,
//   fakeAsync,
//   tick,
// } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });


