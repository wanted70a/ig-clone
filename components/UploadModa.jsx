import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const UploadModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <div>
      <p>MODAL</p>
      {showModal && <p>Modal is Open</p>}
    </div>
  );
};

export default UploadModal;
