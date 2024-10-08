import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersProfilePageComponent } from './users-profile-page.component';

describe('UsersProfilePageComponent', () => {
  let component: UsersProfilePageComponent;
  let fixture: ComponentFixture<UsersProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersProfilePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
