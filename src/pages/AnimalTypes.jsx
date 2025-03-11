import { useEffect, useState } from "react";
import { fontFamily } from "../constants/fontFamily";
import { types } from "../data/types";
import AnimalTypesTbl from "../components/tables/AnimalTypesTbl";
import FilterListIcon from "@mui/icons-material/FilterList";
import Heading from "../components/common/Heading";
import { AnimalTypesText } from "../constants/dashboard/animalTypes";
import CustomButton from "../components/common/CustomButton";
import CustomAutocomplete from "../components/common/CustomAutoCompleteSearch";
import CreateAnimalTypeModal from "../components/modals/AnimalType/CreateAnimalTypeModal";
import agent from "../utils/agent";

const AnimalTypes = () => {
  const [open, setOpen] = useState(false);
  const [animalTypes, setAnimalTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchAnimalTypes = async () => {
    setLoading(true);
    try {
      const data = await agent.Animal.getAnimalTypes();
      setAnimalTypes(data.data);
    } catch (error) {
      console.error("Error fetching animal types:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimalTypes();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSuccess = () => {
    fetchAnimalTypes();
  };

  const handleSearchChange = () => {};
  return (
    <div>
      {/* HEADING */}
      <Heading text={AnimalTypesText.heading} />
      {/* SUB HEADING */}
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          margin: "15px 0",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
          }}
        >
          {/* AUTO-COMPLETE SEARCH  */}
          <CustomAutocomplete
            options={types}
            optionLabelKey="scientificName"
            fontFamily={fontFamily.msr}
            onChange={handleSearchChange}
          />

          {/* FILTER BUTTON */}
          <CustomButton
            filter={true}
            variant="outlined"
            startIcon={<FilterListIcon />}
          >
            {AnimalTypesText.filter}
          </CustomButton>
        </div>

        {/* CREATE ANIMAL TYPE BUTTON */}
        <CustomButton onClick={handleOpen}>{AnimalTypesText.add}</CustomButton>
      </div>
      {/* TABLE */}
      <AnimalTypesTbl animalTypes={animalTypes} loading={loading} />
      {/* MODAL */}
      <CreateAnimalTypeModal
        onClose={handleClose}
        open={open}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default AnimalTypes;
