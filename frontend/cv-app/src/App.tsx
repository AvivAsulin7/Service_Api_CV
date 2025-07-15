import { useEffect } from "react";
import "./App.css";
import UploadArea from "./components/UploadArea/UploadArea";
import Applicants from "./components/Applicants/Applicants";
import { useModal } from "./hooks/useModal";
import Modal from "./components/reusable-components/Modal/Modal";
import { useDispatch } from "react-redux";
import { getApplicants } from "./redux/actions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import cv from "./images/cv.png";

function App() {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const { showModal, closeModal, handleErrorMessage, error } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getApplicants());
      } catch (error) {
        handleErrorMessage(error);
      }
    };

    fetchData();
  }, [dispatch, handleErrorMessage]);

  return (
    <div className="App">
      <Modal showModal={showModal} closeModal={closeModal}>
        <h3>{error}</h3>
      </Modal>
      <h1>Service API for CV</h1>
      <h3>*New Version-using Docker & CI/CD & AWS</h3>
      <img src={cv} alt="cv"></img>
      <UploadArea />
      <Applicants />
    </div>
  );
}

export default App;
