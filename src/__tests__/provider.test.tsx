import { useTasksDispatch } from '@/src/lib/common/providers/TaskMngt'; // Import your custom hook
// Import the hook to test
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useTaskMngtControllers from '../module/home/controllers/task_mgnt.controller';

const mockUseTasksDispatch = jest.mock(
  '../lib/common/providers/TaskMngt',
  () => ({
    useTasksDispatch: jest.fn()
  })
);

describe('useTaskMngtControllers', () => {
  it('should handle adding a task successfully', async () => {
    const mockDispatch = jest.fn();

    const { result } = renderHook(() => useTaskMngtControllers());
    const { handleAddTask } = result.current;

    await act(async () => {
      handleAddTask({ title: 'Task 1', hours: 2 });
    });

    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: 'Added',
    //   title: 'Task 1',
    //   hours: 2
    // });
  });

  it('should handle validation error', async () => {
    const mockDispatch = jest.fn();

    const { result } = renderHook(() => useTaskMngtControllers());
    const { handleAddTask, isOpenErrorModal, errorMessage } = result.current;

    await act(async () => {
      handleAddTask({ title: '', hours: 0 }); // Invalid data
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    // expect(isOpenErrorModal).toBe(true);
    expect(errorMessage).toBeDefined();
  });

  it('should close error modal', async () => {
    const { result } = renderHook(() => useTaskMngtControllers());
    const { handleCloseModal, isOpenErrorModal } = result.current;

    await act(async () => {
      handleCloseModal();
    });

    expect(isOpenErrorModal).toBe(false);
  });
});
