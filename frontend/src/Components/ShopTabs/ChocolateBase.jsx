import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const chocolateBases = [
  { label: "🍫 Milk Chocolate", value: "milk", price: 50 },
  { label: "🍫 Dark Chocolate (50% cocoa)", value: "dark50", price: 55 },
  { label: "🍫 Dark Chocolate (70% cocoa)", value: "dark70", price: 60 },
  { label: "🍫 Dark Chocolate (85% cocoa)", value: "dark85", price: 65 },
  { label: "🍫 White Chocolate", value: "white", price: 50 },
  { label: "🍫 Ruby Chocolate", value: "ruby", price: 70 },
  { label: "🍫 Sugar-Free Chocolate", value: "sugarFree", price: 60 },
  { label: "🍫 Vegan Chocolate", value: "vegan", price: 65 },
];

const ChocolateBase = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "chocolateBase", value }));
  };

  return (
    <Card title="Chocolate Base">
      <Form.Item name="chocolateBase">
        <Select onChange={handleChange} placeholder="Select chocolate base">
          {chocolateBases.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label} — ₹{item.price}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default ChocolateBase;
