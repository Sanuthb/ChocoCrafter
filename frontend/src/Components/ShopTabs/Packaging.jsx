import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const Packaging = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "packaging", value }));
  };

  return (
    <Card>
      <Form.Item name="packaging">
        <Select onChange={handleChange} placeholder="Select packaging type">
          <Option value="ecoFriendly">Eco-Friendly Box</Option>
          <Option value="luxuryBox">Luxury Gift Box</Option>
          <Option value="tin">Reusable Tin</Option>
        </Select>
      </Form.Item>
    </Card>
  );
};

export default Packaging;
