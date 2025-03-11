import { FormControl, Modal } from "@mui/material";
import PropTypes from "prop-types";
import ModalBox from "../common/ModalBox";
import HeadingModal from "../common/HeadingModal";
import SubHeadingModal from "../common/SubHeadingModal";
import {
  AnimalTypesText,
  conservationOptions,
} from "../../../constants/dashboard/animalTypes";
import HeadingForm from "../../form/HeadingForm";
import CustomTextField from "../../form/CustomTextField";
import { useState } from "react";
import SingleImageUpload from "../../form/SingleImageUpload ";
import CustomSelect from "../../form/CustomSelect";
import CustomButton from "../../common/CustomButton";
import agent from "../../../utils/agent";
import { message } from "antd";

const CreateAnimalTypeModal = ({ open = false, onClose, onSuccess }) => {
  // Form state
  const [form, setForm] = useState({
    scientificName: "",
    vietnameseName: "",
    englishName: "",
    family: "",
    weightRange: "",
    characteristics: "",
    distribution: "",
    habitat: "",
    diet: "",
    reproduction: "",
    conservationStatus: "",
    urlImage: "",
  });

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Validation state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Handle file upload
  const handleFileChange = (file) => {
    if (file) {
      setForm({ ...form, urlImage: file.url }); // Update urlImage with secure_url

      // Clear error for urlImage if it exists
      if (errors.urlImage) {
        setErrors({
          ...errors,
          urlImage: null,
        });
      }
    } else {
      setForm({ ...form, urlImage: "" }); // Clear urlImage if file is removed
    }
  };

  // Handle conservation status change
  const handleChangeConservationStatus = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Update form state

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!form.scientificName)
      newErrors.scientificName = "Scientific name is required";
    if (!form.vietnameseName)
      newErrors.vietnameseName = "Vietnamese name is required";
    if (!form.englishName) newErrors.englishName = "English name is required";
    if (!form.family) newErrors.family = "Family is required";
    if (!form.weightRange) newErrors.weightRange = "Weight range is required";
    if (!form.characteristics)
      newErrors.characteristics = "Characteristics range is required";
    if (!form.distribution)
      newErrors.distribution = "Distribution range is required";
    if (!form.habitat) newErrors.habitat = "Habitat range is required";
    if (!form.diet) newErrors.diet = "Diet range is required";
    if (!form.reproduction)
      newErrors.reproduction = "Reproduction range is required";
    if (!form.conservationStatus)
      newErrors.conservationStatus = "Conservation status is required";
    if (!form.urlImage) newErrors.urlImage = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      message.error("Please fill in all required fields");
      return;
    }

    // Set loading state
    setIsSubmitting(true);

    try {
      // Create request body
      const requestBody = {
        scientificName: form.scientificName,
        vietnameseName: form.vietnameseName,
        englishName: form.englishName,
        family: form.family,
        weightRange: form.weightRange,
        characteristics: form.characteristics,
        distribution: form.distribution,
        habitat: form.habitat,
        diet: form.diet,
        reproduction: form.reproduction,
        conservationStatus: form.conservationStatus,
        urlImage: form.urlImage,
      };

      const response = await agent.Animal.postAnimalTypes(requestBody);

      // Show success message
      message.success("Animal type created successfully");

      // Reset form
      setForm({
        scientificName: "",
        vietnameseName: "",
        englishName: "",
        family: "",
        weightRange: "",
        characteristics: "",
        distribution: "",
        habitat: "",
        diet: "",
        reproduction: "",
        conservationStatus: "",
        urlImage: "",
      });

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess(response);
      }

      // Close modal
      onClose();
    } catch (error) {
      // Handle error
      console.error("Error creating animal type:", error);
      message.error(
        error.response?.data?.message || "Failed to create animal type"
      );
    } finally {
      // Reset loading state
      setIsSubmitting(false);
    }
  };

  // Reset form when modal is closed
  const handleClose = () => {
    setForm({
      scientificName: "",
      vietnameseName: "",
      englishName: "",
      family: "",
      weightRange: "",
      characteristics: "",
      distribution: "",
      habitat: "",
      diet: "",
      reproduction: "",
      conservationStatus: "",
      urlImage: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      footer={null}
      style={{ zIndex: 1000 }}
    >
      <ModalBox>
        {/* HEADING */}
        <HeadingModal
          onClose={handleClose}
          text={AnimalTypesText.headingCreateModal}
        />
        {/* SUB HEADING */}
        <SubHeadingModal text={AnimalTypesText.subHeadingCreateModal} />
        {/* FORM INPUT */}
        <FormControl
          className="modal-content"
          style={{
            marginTop: "20px",
            height: "500px",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {/* Animal Names */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <HeadingForm text="Animal Names" />
            <div className="" style={{ display: "flex", gap: 12 }}>
              <CustomTextField
                name="scientificName"
                label="Scientific Name *"
                placeholder="Scientific Name"
                value={form.scientificName}
                onChange={handleChangeForm}
                error={!!errors.scientificName}
                helperText={errors.scientificName}
              />
              <CustomTextField
                name="vietnameseName"
                label="Vietnamese Name *"
                placeholder="Vietnamese Name"
                value={form.vietnameseName}
                onChange={handleChangeForm}
                error={!!errors.vietnameseName}
                helperText={errors.vietnameseName}
              />
              <CustomTextField
                name="englishName"
                label="English Name *"
                placeholder="English Name"
                value={form.englishName}
                onChange={handleChangeForm}
                error={!!errors.englishName}
                helperText={errors.englishName}
              />
            </div>
          </div>

          {/* Classification  */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <HeadingForm text="Classification" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CustomTextField
                name="family"
                label="Family *"
                placeholder="Family"
                value={form.family}
                onChange={handleChangeForm}
                error={!!errors.family}
                helperText={errors.family}
              />
              <CustomSelect
                label="Conservation Status *"
                value={form.conservationStatus}
                name="conservationStatus"
                options={conservationOptions}
                onChange={handleChangeConservationStatus}
                error={!!errors.conservationStatus}
                helperText={errors.conservationStatus}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <HeadingForm text="Habitat and Distribution" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CustomTextField
                name="habitat"
                label="Habitat"
                placeholder="Habitat"
                value={form.habitat}
                onChange={handleChangeForm}
                error={!!errors.habitat}
                helperText={errors.habitat}
              />
              <CustomTextField
                name="distribution"
                label="Distribution"
                placeholder="Distribution"
                value={form.distribution}
                onChange={handleChangeForm}
                error={!!errors.distribution}
                helperText={errors.distribution}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <HeadingForm text="Physical Characteristics" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CustomTextField
                name="weightRange"
                label="Weight Range"
                placeholder="Weight Range"
                value={form.weightRange}
                onChange={handleChangeForm}
                error={!!errors.weightRange}
                helperText={errors.weightRange}
              />
              <CustomTextField
                name="characteristics"
                label="Characteristics"
                placeholder="Characteristics"
                value={form.characteristics}
                onChange={handleChangeForm}
                error={!!errors.characteristics}
                helperText={errors.characteristics}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <HeadingForm text="Biology Profile" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CustomTextField
                name="reproduction"
                label="Reproduction"
                placeholder="Reproduction"
                value={form.reproduction}
                onChange={handleChangeForm}
                error={!!errors.reproduction}
                helperText={errors.reproduction}
              />
              <CustomTextField
                name="diet"
                label="Diet"
                placeholder="Diet"
                value={form.diet}
                onChange={handleChangeForm}
                error={!!errors.diet}
                helperText={errors.diet}
              />
            </div>
          </div>

          <div>
            <SingleImageUpload
              onChange={handleFileChange}
              title="Upload Animal Type Image *"
            />
            {errors.urlImage && (
              <div
                style={{ color: "#f44336", fontSize: "12px", marginTop: "4px" }}
              >
                {errors.urlImage}
              </div>
            )}
          </div>

          <div
            className="button-group"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 15,
              margin: "30px 0 20px 0",
            }}
          >
            <CustomButton
              variant="outlined"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="contained"
              onClick={handleSubmit}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Type"}
            </CustomButton>
          </div>
        </FormControl>
      </ModalBox>
    </Modal>
  );
};

CreateAnimalTypeModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default CreateAnimalTypeModal;
