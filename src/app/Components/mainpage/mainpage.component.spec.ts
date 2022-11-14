import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageComponent } from './mainpage.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      imports: [HttpClientTestingModule],
      providers: [MovieserviceService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
