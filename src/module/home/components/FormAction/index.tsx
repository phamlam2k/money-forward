'use client';

import { FormProvider } from 'react-hook-form';
import BaseInputForm from '@/src/lib/common/base/form/BaseInputForm';
import BaseButton from '@/src/lib/common/base/buttons/BaseButton';
import ErrorValidateModal from '../Modals/ErrorValidateModal';
import useTaskMngtControllers from '../../controllers/task_mgnt.controller';

const FormAction = () => {
  const {
    formTask,
    errorMessage,
    isOpenErrorModal,

    handleAddTask,
    handleCloseModal
  } = useTaskMngtControllers();

  return (
    <FormProvider {...formTask}>
      <form
        onSubmit={formTask.handleSubmit(handleAddTask)}
        className='mt-[10px] flex items-end gap-[30px]'
      >
        <BaseInputForm
          name='title'
          label='Title'
          inputProps={{
            ['data-testid']: 'title'
          }}
        />
        <BaseInputForm
          name='hours'
          label='Hours'
          type='number'
          inputProps={{
            ['data-testid']: 'hours'
          }}
        />
        <BaseButton type='submit' role='add_task'>
          Add
        </BaseButton>
      </form>
      <ErrorValidateModal
        isOpen={isOpenErrorModal}
        errorMessage={errorMessage}
        closeModal={handleCloseModal}
      />
    </FormProvider>
  );
};

export default FormAction;
