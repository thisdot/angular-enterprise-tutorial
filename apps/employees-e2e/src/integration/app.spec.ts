import { getGreeting } from '../support/app.po';

describe('employees', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to employees!');
  });
});
