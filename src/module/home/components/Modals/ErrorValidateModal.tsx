/* eslint-disable @next/next/no-img-element */
import CustomModal from '@/src/lib/common/modals/CustomModal';

type IErrorValidateModal = {
  isOpen: boolean;
  errorMessage: string;
  closeModal: () => void;
};

const ErrorValidateModal = ({
  isOpen,
  errorMessage,
  closeModal
}: IErrorValidateModal) => {
  return (
    <CustomModal isOpen={isOpen} closeModal={closeModal}>
      <div className='p-[20px] w-[300px]'>
        <img
          src='/warning.svg'
          alt='Warning Icon'
          className='w-[150px] h-[150px] mx-auto'
        />
        <div className='mt-[20px]'>
          <p className='text-[22px] text-center'>
            <span className='text-black'>{errorMessage}</span>
          </p>
        </div>
      </div>
    </CustomModal>
  );
};

export default ErrorValidateModal;
