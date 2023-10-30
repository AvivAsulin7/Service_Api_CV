import Applicant from "../Applicant/Applicant";
import "./Applicants.css";
import { applicantType } from "../../types/types";
import { reducerType } from "../../redux/types";
import { useSelector } from "react-redux";

const Applicants: React.FC = () => {
  const applicants = useSelector<reducerType>((state) => state.reducer) as any;
  return (
    <div className="applicants">
      {applicants.length > 0 ? (
        applicants.map((applicant: applicantType, index: number) => {
          return <Applicant applicant={applicant} id={index} key={index} />;
        })
      ) : (
        <h2>No Applicants Yet.</h2>
      )}
    </div>
  );
};

export default Applicants;
