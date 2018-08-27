import {FormGeneratorModule} from './form.module';

describe('form', () => {
  let formModule: FormGeneratorModule;

  beforeEach(() => {
    formModule = new FormGeneratorModule();
  });

  it('should create an instance', () => {
    expect(formModule).toBeTruthy();
  });
});
