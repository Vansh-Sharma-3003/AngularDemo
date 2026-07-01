import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseViewerBenchmark } from './response-viewer-benchmark';

describe('ResponseViewerBenchmark', () => {
  let component: ResponseViewerBenchmark;
  let fixture: ComponentFixture<ResponseViewerBenchmark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseViewerBenchmark],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseViewerBenchmark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
