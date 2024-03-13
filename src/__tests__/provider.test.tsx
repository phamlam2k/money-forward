import {
  TaskActionType,
  TaskMngtProvider,
  useTasks,
  useTasksDispatch
} from '../lib/common/providers/TaskMngt';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('tasksReducer', () => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
      getItem(key: string) {
        return store[key] || null;
      },
      setItem(key: string, value: string) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      }
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  test('Adds a task', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      hours: 3
    };

    const { result } = renderHook(
      () => ({
        value: useTasks(),
        dispatch: useTasksDispatch()
      }),
      {
        wrapper: TaskMngtProvider
      }
    );

    act(() => {
      result.current.dispatch({
        type: TaskActionType.Added,
        ...task
      });
    });

    expect(result.current.value.tasks.length).toBe(1);
    expect(result.current.value.tasksFilter.length).toBe(1);
    expect(localStorage.getItem('list')).not.toBeNull();
  });

  test('Deletes a task', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      hours: 3
    };

    const { result } = renderHook(
      () => ({
        value: useTasks(),
        dispatch: useTasksDispatch()
      }),
      {
        wrapper: TaskMngtProvider
      }
    );

    act(() => {
      result.current.dispatch({
        type: TaskActionType.Added,
        ...task
      });
    });

    act(() => {
      result.current.dispatch({
        type: TaskActionType.Deleted,
        id: '1'
      });
    });

    expect(result.current.value.tasks.length).toBe(0);
    expect(result.current.value.tasksFilter.length).toBe(0);
    expect(localStorage.getItem('list')).toEqual('[]');
  });

  test('Filters tasks by keyword', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      hours: 3
    };

    const { result } = renderHook(
      () => ({
        value: useTasks(),
        dispatch: useTasksDispatch()
      }),
      {
        wrapper: TaskMngtProvider
      }
    );

    act(() => {
      result.current.dispatch({
        type: TaskActionType.Added,
        ...task
      });
    });

    act(() => {
      result.current.dispatch({
        type: TaskActionType.Search,
        value: 'Test'
      });
    });

    expect(result.current.value.tasksFilter.length).toBe(1);
  });
});
