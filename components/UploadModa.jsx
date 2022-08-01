import { CameraIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const UploadModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [selectedFile, setSelectedFIle] = useState(null);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFIle(readerEvent.target.result);
    };
  };
  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          onRequestClose={() => {
            setShowModal(false);
            setSelectedFIle(null);
          }}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <label htmlFor="filepicker">
              {selectedFile ? (
                <img
                  src={selectedFile}
                  alt=""
                  className="w-full max-h-[250px] object-cover cursor-pointer"
                />
              ) : (
                <CameraIcon className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500 mx-auto" />
              )}
              <input
                id="filepicker"
                type="file"
                hidden
                onChange={handleFileInputChange}
              />
            </label>
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter you caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload post
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UploadModal;
