import ProductHierarchy from "../../components/ProductHierarchy";

interface Props {
  handleToggleShowTemplate: (status: boolean) => void;
}

const ChecksheetSection = ({ handleToggleShowTemplate }: Props) => {
  return (
    <ProductHierarchy
      onSubmit={() => {
        handleToggleShowTemplate(true);
      }}
    />
  );
};

export default ChecksheetSection;
