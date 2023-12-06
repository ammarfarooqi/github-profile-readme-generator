import { isGitHubUsernameValid, isMediumUsernameValid, isTwitterUsernameValid } from '../validation';

describe('validation', () => {
  it('isGitHubUsernameValid', () => {
    expect(isGitHubUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isGitHubUsernameValid('ammarfarooqi')).toBe(true);
  });

  it('isMediumUsernameValid', () => {
    expect(isMediumUsernameValid('ammarfarooqi')).toBe(false);
    expect(isMediumUsernameValid('@ammarfarooqi')).toBe(true);
  });

  it('isTwitterUsernameValid', () => {
    expect(isTwitterUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isTwitterUsernameValid('ammarfarooqi')).toBe(true);
  });
});
