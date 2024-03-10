'use client';

import taskSchema from '@/src/lib/validations/task.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useTaskMngtControllers = () => {
  const [tasks, setTasks] = useState([]);
  const formTask = useForm({
    resolver: yupResolver(taskSchema)
  });

  return {
    tasks
  };
};

export default useTaskMngtControllers;
