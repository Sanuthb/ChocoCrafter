import { Form, Checkbox, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const options = [
  { label: "Vegan", value: "vegan" },
  { label: "Gluten-Free", value: "glutenFree" },
  { label: "Nut-Free", value: "nutFree" },
  { label: "Lactose-Free", value: "lactoseFree" },
];

const DietaryPreferences = () => {
  const dispatch = useDispatch();

  const handleChange = (checkedValues) => {
    dispatch(setOrderOption({ key: "dietaryPreferences", value: checkedValues }));
  };

  return (
    <Card>
      <Form.Item name="dietaryPreferences">
        <Checkbox.Group options={options} onChange={handleChange} />
      </Form.Item>
    </Card>
  );
};

export default DietaryPreferences;
