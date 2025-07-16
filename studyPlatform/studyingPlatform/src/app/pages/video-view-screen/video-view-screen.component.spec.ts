import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoViewScreenComponent } from './video-view-screen.component';

describe('VideoViewScreenComponent', () => {
  let component: VideoViewScreenComponent;
  let fixture: ComponentFixture<VideoViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoViewScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
