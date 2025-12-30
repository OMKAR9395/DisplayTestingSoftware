import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPanel } from './command-panel';

describe('CommandPanel', () => {
  let component: CommandPanel;
  let fixture: ComponentFixture<CommandPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
