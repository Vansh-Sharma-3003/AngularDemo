import { TestBed } from '@angular/core/testing';

import { NotificationMessages } from './notification-messages';

describe('NotificationMessages', () => {
  let service: NotificationMessages;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationMessages);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
