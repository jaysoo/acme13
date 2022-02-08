import { render } from '@testing-library/react';

import Blib from './blib';

describe('Blib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Blib />);
    expect(baseElement).toBeTruthy();
  });
});
