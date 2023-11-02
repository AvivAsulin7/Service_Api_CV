import { useState, ChangeEvent } from "react";
import Button from "../reusable-components/Button/Button";
import Modal from "../reusable-components/Modal/Modal";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { AddApplicant, getApplicants } from "../../redux/actions";
import { useModal } from "../../hooks/useModal";
import "./UploadArea.css";

const UploadArea: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const { showModal, closeModal, handleErrorMessage, error } = useModal();

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setFile(file[0]);
    } else {
      console.error("No file selected");
    }
  };

  const handleUploadCV = async () => {
    if (!file) {
      handleErrorMessage("You need to choose a file.");
    } else {
      setFile(null);
      const fileInput = document.getElementById(
        "customFileInput"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
      const formData = new FormData();
      formData.append("rawData", file as Blob);
      try {
        await dispatch(AddApplicant(formData));
        await dispatch(getApplicants());
      } catch (error) {
        handleErrorMessage(error);
      }
    }
  };

  return (
    <div className="upload-area">
      <Modal showModal={showModal} closeModal={closeModal}>
        <h3>{error}</h3>
      </Modal>
      <div className="input-file">
        <label htmlFor="customFileInput">Choose a file...</label>
        <input
          id="customFileInput"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <div>{file && file.name}</div>
      </div>
      <div className="upload-cv">
        <Button onClick={handleUploadCV}>Upload CV</Button>
      </div>
    </div>
  );
};

export default UploadArea;
