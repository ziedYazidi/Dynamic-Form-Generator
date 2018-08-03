import {FormGeneratorModule} from './form.module';

describe('FormModule', () => {
  let formModule: FormGeneratorModule;

  beforeEach(() => {
    formModule = new FormGeneratorModule();
  });

  it('should create an instance', () => {
    expect(formModule).toBeTruthy();
  });
});
