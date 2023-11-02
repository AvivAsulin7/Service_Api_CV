import React from "react";
import { applicantType } from "../../types/types";
import "./Applicant.css";
import Button from "../reusable-components/Button/Button";
import { BASE_ACCESS_PDF, DELETE, GREEN, RED } from "../../constants/constant";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { deleteApplicant, getApplicants } from "../../redux/actions";
import { AiFillDelete } from "react-icons/ai";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import Modal from "../reusable-components/Modal/Modal";

interface applicantProps {
  applicant: applicantType;
  id: number;
}

const Applicant: React.FC<applicantProps> = ({ applicant, id }) => {
  const { showModal, openModal, closeModal, handleErrorMessage, error } =
    useModal();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const handleDeleteApplicant = async () => {
    try {
      closeModal();
      await dispatch(deleteApplicant(applicant._id));
      await dispatch(getApplicants());
    } catch (error) {
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
        <div>
          <h2>
            {applicant.firstName} {applicant.lastName}
          </h2>
          {applicant.id && <p>ID: {applicant.id}</p>}
        </div>
      </div>
      {applicant.email && (
        <div className="connect">
          <strong>
            <CgMail size={33} />
          </strong>
          {applicant.email}
        </div>
      )}
      {applicant.linkedinUrl && (
        <div className="connect">
          <strong>
            <BsLinkedin size={30} />
          </strong>
          <a href={applicant.linkedinUrl}>{applicant.linkedinUrl}</a>
        </div>
      )}
      {applicant.phone && (
        <div className="connect">
          <strong>
            <AiOutlinePhone size={30} />
          </strong>
          {applicant.phone}
        </div>
      )}

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
