import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import FormAction from '../module/home/components/FormAction';

describe('Page', () => {
  it('should render the basic fields', () => {
    render(<FormAction />);
    expect(screen.getByRole('add_task')).toBeInTheDocument();

    expect(screen.getByRole('title')).toBeInTheDocument();

    expect(screen.getByRole('hours')).toBeInTheDocument();
  });

  it('renders a heading', () => {
    render(<FormAction />);

    // Mock the setState function
    const setStateMock = jest.fn();

    // Mock the useState hook
    jest
      .spyOn(React, 'useState')
      .mockImplementation(((initialValue: any) => [
        initialValue,
        setStateMock
      ]) as any);

    const title = 'Task 1';
    const hours = 31;

    const titleInput = screen.getByRole('title');
    fireEvent.change(titleInput, { target: { value: title } });

    const hoursInput = screen.getByRole('hours');
    fireEvent.change(hoursInput, { target: { value: hours } });

    const addBtn = screen.getByRole('add_task');
    fireEvent.click(addBtn);

    expect(setStateMock).toHaveBeenCalledTimes(2);
  });
});
