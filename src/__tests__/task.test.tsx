import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormAction from '../module/home/components/FormAction';
import { act } from 'react-dom/test-utils';

describe('Form Action Controller', () => {
  it('success validation', () => {
    render(<FormAction />);

    const title = 'Task 1';
    const hours = 21;

    const titleInput = screen.getByTestId('title');
    fireEvent.change(titleInput, { target: { value: title } });

    const hoursInput = screen.getByTestId('hours');
    fireEvent.change(hoursInput, { target: { value: hours } });

    const addBtn = screen.getByRole('add_task');

    act(() => {
      fireEvent.click(addBtn);
    });

    expect(screen.getByTestId('title')).toHaveValue(title);
    expect(screen.getByTestId('hours')).toHaveValue(String(hours));
  });

  it('error validation', () => {
    render(<FormAction />);

    const title = 'Task 1';
    const hours = 34;

    const titleInput = screen.getByTestId('title');
    fireEvent.change(titleInput, { target: { value: title } });

    const hoursInput = screen.getByTestId('hours');
    fireEvent.change(hoursInput, { target: { value: hours } });

    expect(screen.getByTestId('title')).toHaveValue(title);
    expect(screen.getByTestId('hours')).toHaveValue(String(hours));
  });
});
