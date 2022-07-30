import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const UploadModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <Modal
      isOpen={showModal}
      className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
      onRequestClose={() => setShowModal(false)}
      ariaHideApp={false}
    >
      <div className="flex flex-col justify-center items-center h-[100%]">
        <p>MODAL</p>
        {showModal && <p>Modal is Open</p>}
      </div>
    </Modal>
  );
};

export default UploadModal;
