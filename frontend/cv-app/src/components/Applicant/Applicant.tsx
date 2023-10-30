import React from "react";
import { applicantType } from "../../types/types";
import "./Applicant.css";
import Button from "../reusable-components/Button/Button";
import { DELETE, GREEN, RED } from "../../constants/constant";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { deleteApplicant, getApplicants } from "../../redux/actions";
import { AiFillDelete } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { useModal } from "../../hooks/useModal";
import Modal from "../reusable-components/Modal/Modal";
import { CustomErrorType } from "../../types/types";

interface applicantProps {
  applicant: applicantType;
  id: number;
}

const BASE_ACCESS_PDF = "http://localhost:5000/cv-files/";

const Applicant: React.FC<applicantProps> = ({ applicant, id }) => {
  const { showModal, openModal, closeModal, handleErrorMessage, error } =
    useModal();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const handleDeleteApplicant = async () => {
    try {
      closeModal();
      await dispatch(deleteApplicant(applicant._id));
      dispatch(getApplicants());
    } catch (error) {
      console.log(error);
      handleErrorMessage(error);
    }
  };

  const handleDownloadCv = () => {
    const newWindow = window.open(
      BASE_ACCESS_PDF + applicant.rawData,
      "_blank"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className="applicant">
      <Modal showModal={showModal} closeModal={closeModal} name={DELETE}>
        {error ? (
          <h3>{error}</h3>
        ) : (
          <div>
            <h3>Are you sure you want to delete a applicant?</h3>
            <div className="delete-modal-btns">
              <Button name={GREEN} onClick={handleDeleteApplicant}>
                Yes
              </Button>
              <Button name={RED} onClick={closeModal}>
                No
              </Button>
            </div>
          </div>
        )}
      </Modal>
      <div>
        <h2>Applicant {id + 1}#</h2>
        <strong>Name:</strong> {applicant.firstName} {applicant.lastName}
      </div>
      <div>
        <strong>ID:</strong> {applicant.id}
      </div>
      <div>
        <strong>Email:</strong> {applicant.email}
      </div>
      <div>
        <strong>LinkedIn:</strong> <a href={applicant.linkedinUrl}>Link</a>
      </div>
      <div>
        <strong>Phone:</strong> {applicant.phone}
      </div>

      <div className="buttons">
        <Button name={GREEN} onClick={handleDownloadCv}>
          Download CV <BsDownload size={17} className="icon" />
        </Button>
        <Button name={RED} onClick={openModal}>
          Delete <AiFillDelete size={17} className="icon" />
        </Button>
      </div>
    </div>
  );
};

export default Applicant;
