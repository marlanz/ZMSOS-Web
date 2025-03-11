import { FormControl, Modal } from "@mui/material";
import PropTypes from "prop-types";
import ModalBox from "../common/ModalBox";
import HeadingModal from "../common/HeadingModal";
import SubHeadingModal from "../common/SubHeadingModal";
import { AnimalTypesText } from "../../../constants/dashboard/animalTypes";
import HeadingForm from "../../form/HeadingForm";
import CustomTextField from "../../form/CustomTextField";
import { useState } from "react";
import SingleImageUpload from "../../form/SingleImageUpload ";

const CreateAnimalTypeModal = ({ open = false, onClose }) => {
  const [image, setImage] = useState(null);

  const handleChange = (file) => {
    console.log("Selected file:", file);
    setImage(file);
  };

  return (
    <Modal open={open} onClose={onClose} footer={null} style={{ zIndex: 1000 }}>
      <ModalBox>
        {/* HEADING */}
        <HeadingModal
          onClose={onClose}
          text={AnimalTypesText.headingCreateModal}
        />
        {/* SUB HEADING */}
        <SubHeadingModal text={AnimalTypesText.subHeadingCreateModal} />
        {/* FORM INPUT */}
        <FormControl
          className="modal-content"
          style={{ marginTop: "20px", height: "500px", overflowY: "scroll" }}
        >
          {/* Animal Names */}
          <div
            className="names"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <HeadingForm text="Animal Names" />
            <div className="" style={{ display: "flex", gap: 12 }}>
              <CustomTextField
                name="scientificName"
                label="Scientific Name"
                placeholder="Scientific Name"
                // value={form.scientificName}
                // onChange={handleChangeForm}
              />
              <CustomTextField
                name="scientificName"
                label="Scientific Name"
                placeholder="Scientific Name"
                // value={form.scientificName}
                // onChange={handleChangeForm}
              />
              <CustomTextField
                name="scientificName"
                label="Scientific Name"
                placeholder="Scientific Name"
                // value={form.scientificName}
                // onChange={handleChangeForm}
              />
            </div>
          </div>
          <SingleImageUpload onChange={handleChange} />
        </FormControl>
      </ModalBox>
    </Modal>
  );
};
CreateAnimalTypeModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CreateAnimalTypeModal;
