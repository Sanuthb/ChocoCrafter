import { Form, Checkbox, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../redux/Slice/orderSlice";

const options = [
  { label: "Personalized Message — ₹10", value: "message" },
  { label: "Gift Card — ₹30", value: "giftCard" },
  { label: "Special Occasion Tag — ₹15", value: "occasionTag" },
];

const AddOnExtras = () => {
  const dispatch = useDispatch();

  const handleChange = (checkedValues) => {
    dispatch(setOrderOption({ key: "addOnExtras", value: checkedValues }));
  };

  return (
    <Card title="Add-On Extras">
      <Form.Item name="addOnExtras">
        <Checkbox.Group options={options} onChange={handleChange} />
      </Form.Item>
    </Card>
  );
};

export default AddOnExtras;
