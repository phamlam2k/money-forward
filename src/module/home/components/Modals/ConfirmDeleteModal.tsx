import React from 'react';

import BaseButton from '@/src/lib/common/base/buttons/BaseButton';
import CustomModal from '@/src/lib/common/modals/CustomModal';

type IConfirmDeleteModal = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const ConfirmDeleteModal: React.FC<IConfirmDeleteModal> = ({
  isOpen,
  onClose,
  onDelete
}) => {
  return (
    <CustomModal isOpen={isOpen} closeModal={onClose}>
      <div>
        <h1 className='text-[22px] font-bold'>
          <span className='text-black'>Confirm Delete</span>
        </h1>
        <p className='text-[18px]'>
          <span className='text-black'>
            Are you sure you want to delete this task?
          </span>
        </p>
        <div className='flex justify-end gap-[20px] mt-[20px]'>
          <BaseButton variant='border' onClick={onClose}>
            Cancel
          </BaseButton>
          <BaseButton onClick={onDelete}>Delete</BaseButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmDeleteModal;
