import { TestBed } from '@angular/core/testing';

import { TodoManager } from './todo-manager';

describe('TodoManager', () => {
  let service: TodoManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
