import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import FormAction from '../module/home/components/FormAction';
import { act } from 'react-dom/test-utils';
import { TaskMngtProvider } from '../lib/common/providers/TaskMngt';

describe('Page', () => {
  beforeEach(() => {
    jest.mock('../lib/common/providers/TaskMngt', () => ({
      ...jest.requireActual('../lib/common/providers/TaskMngt'),
      useTasks: () => ({
        tasks: [],
        tasksFilter: [],
        keyword: ''
      }),
      useTasksDispatch: () => jest.fn()
    }));

    jest.mock('react-hook-form', () => ({
      ...jest.requireMock('react-hook-form'),
      Controller: () => <></>,
      useForm: () => {
        return {
          reset: () => jest.fn(),
          handleSubmit: () => jest.fn()
        };
      }
    }));
  });

  it('should render the basic fields', () => {
    render(
      <TaskMngtProvider>
        <FormAction />
      </TaskMngtProvider>
    );
    expect(screen.getByRole('add_task')).toBeInTheDocument();

    expect(screen.getByRole('title')).toBeInTheDocument();

    expect(screen.getByRole('hours')).toBeInTheDocument();
  });

  it('renders a heading', () => {
    render(
      <TaskMngtProvider>
        <FormAction />
      </TaskMngtProvider>
    );

    const title = 'Task 1';
    const hours = 34;

    const titleInput = screen.getByRole('title');
    fireEvent.change(titleInput, { target: { value: title } });

    const hoursInput = screen.getByRole('hours');
    fireEvent.change(hoursInput, { target: { value: hours } });

    const addBtn = screen.getByRole('add_task');

    act(() => {
      fireEvent.click(addBtn);
    });

    // expect(screen.getByText(title)).toBeInTheDocument();
  });
});
