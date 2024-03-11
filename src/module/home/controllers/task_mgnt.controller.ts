'use client';

import {
  TaskActionType,
  useTasksDispatch
} from '@/src/lib/common/providers/TaskMngt';
import taskSchema from '@/src/lib/validations/task.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useTaskMngtControllers = () => {
  const dispatch = useTasksDispatch();

  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const formTask = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: '',
      hours: 0
    }
  });

  const handleAddTask: SubmitHandler<{ title: string; hours: number }> = (
    value
  ) => {
    if (dispatch !== null) {
      dispatch({
        type: TaskActionType.Added,
        title: value.title,
        hours: value.hours
      });

      formTask.reset();
    }
  };

  const handleCloseModal = () => {
    setIsOpenErrorModal(false);
  };

  const handleOpenModal = () => {
    if (formTask.formState.errors.title || formTask.formState.errors.hours) {
      setIsOpenErrorModal(true);
    }
  };

  return {
    formTask,
    isOpenErrorModal,

    handleCloseModal,
    handleAddTask,
    handleOpenModal
  };
};

export default useTaskMngtControllers;
