import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { QuestionFormComponent } from './question-form.component'

describe('QuestionFormComponent', () => {
  let component: QuestionFormComponent
  let fixture: ComponentFixture<QuestionFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionFormComponent]
    })
    fixture = TestBed.createComponent(QuestionFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
