'use client';

import {
  TaskActionType,
  useTasksDispatch
} from '@/src/lib/common/providers/TaskMngt';
import taskSchema from '@/src/lib/validations/task.validation';
import { ITaskState } from '@/src/types/task.type';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useTaskMngtControllers = () => {
  const dispatch = useTasksDispatch();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpenErrorModal, setIsOpenErrorModal] = useState<boolean>(false);

  const formTask = useForm<ITaskState>({
    defaultValues: {
      title: '',
      hours: 0
    }
  });

  const handleAddTask: SubmitHandler<ITaskState> = (value) => {
    taskSchema
      .validate(value)
      .then(() => {
        if (dispatch !== null) {
          dispatch({
            type: TaskActionType.Added,
            title: value.title,
            hours: value.hours
          });

          dispatch({
            type: TaskActionType.Search,
            value: ''
          });

          formTask.reset();
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsOpenErrorModal(true);
      });
  };

  const handleCloseModal = () => {
    setIsOpenErrorModal(false);
  };

  return {
    formTask,
    isOpenErrorModal,
    errorMessage,

    handleCloseModal,
    handleAddTask
  };
};

export default useTaskMngtControllers;
