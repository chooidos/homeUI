import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from './List';

describe('ItemsModule', () => {
  it('should fetch list of all the items when rendered', () => {
    render(<List />);
    expect(screen.queryAllByRole('listitem').length).not.toBe(0);
  });
});
