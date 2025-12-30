import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandQr } from './command-qr';

describe('CommandQr', () => {
  let component: CommandQr;
  let fixture: ComponentFixture<CommandQr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandQr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandQr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
