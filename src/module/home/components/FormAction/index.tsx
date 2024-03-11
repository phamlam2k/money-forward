'use client';

import { FormProvider } from 'react-hook-form';
import useTaskMngtControllers from '../../controllers/task_mgnt.controller';
import BaseInputForm from '@/src/lib/common/base/form/BaseInputForm';
import BaseButton from '@/src/lib/common/base/buttons/BaseButton';
import CustomModal from '@/src/lib/common/modals/CustomModal';

const FormAction = () => {
  const {
    formTask,
    isOpenErrorModal,
    handleAddTask,
    handleOpenModal,
    handleCloseModal
  } = useTaskMngtControllers();

  return (
    <FormProvider {...formTask}>
      <form
        onSubmit={formTask.handleSubmit(handleAddTask)}
        className='mt-[20px] flex items-end gap-[30px]'
      >
        <BaseInputForm name='title' label='Title' />
        <BaseInputForm name='hours' label='Hours' type='number' />
        <BaseButton type='submit' onClick={handleOpenModal}>
          Add
        </BaseButton>
      </form>
      <CustomModal isOpen={isOpenErrorModal} closeModal={handleCloseModal}>
        <div>
          <h1 className='text-[22px] font-bold'>
            <span className='text-black'>Error</span>
          </h1>
          <p className='text-[18px]'>
            <span className='text-black'>Please fill all fields</span>
          </p>
        </div>
      </CustomModal>
    </FormProvider>
  );
};

export default FormAction;
