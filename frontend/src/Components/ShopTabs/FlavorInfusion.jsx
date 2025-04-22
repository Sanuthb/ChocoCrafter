import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const flavors = [
  { label: "🌿 Mint", value: "mint", price: 8 },
  { label: "🍯 Caramel", value: "caramel", price: 10 },
  { label: "🍓 Strawberry", value: "strawberry", price: 10 },
  { label: "🍋 Lemon", value: "lemon", price: 9 },
  { label: "🥥 Coconut", value: "coconut", price: 11 },
  { label: "🍦 Vanilla", value: "vanilla", price: 10 },
  { label: "🍊 Orange Zest", value: "orange", price: 9 },
  { label: "🌰 Hazelnut", value: "hazelnut", price: 12 },
  { label: "☕ Coffee", value: "coffee", price: 10 },
  { label: "🍇 Blueberry", value: "blueberry", price: 12 },
];

const FlavorInfusion = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "flavorInfusion", value }));
  };

  return (
    <Card title="Flavor Infusions">
      <Form.Item name="flavorInfusion">
        <Select mode="multiple" onChange={handleChange} placeholder="Select flavor infusions">
          {flavors.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label} — ₹{item.price}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default FlavorInfusion;
