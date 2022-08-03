import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const UploadModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [selectedFile, setSelectedFIle] = useState(null);
  const [loading, setLoading] = useState(false);
  const captionRef = useRef(null);
  const { data: session } = useSession();

  const uploadPost = async (e) => {
    if (loading) return;

    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      username: session.user.name,
      profileImage: session.user.image,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );
    setLoading(false);
    setShowModal(false);
  };

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
              ref={captionRef}
              maxLength={150}
              placeholder="Please enter you caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              onClick={uploadPost}
              disabled={!selectedFile || loading}
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
