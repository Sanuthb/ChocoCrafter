import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const chocolateBases = [
  { label: "🍫 Milk Chocolate", value: "milk", price: 50, calories: 535 },          // ~535 kcal per 100g
  { label: "🍫 Dark Chocolate (50% cocoa)", value: "dark50", price: 55, calories: 546 }, // ~546 kcal
  { label: "🍫 Dark Chocolate (70% cocoa)", value: "dark70", price: 60, calories: 598 }, // ~598 kcal
  { label: "🍫 Dark Chocolate (85% cocoa)", value: "dark85", price: 65, calories: 604 }, // ~604 kcal
  { label: "🍫 White Chocolate", value: "white", price: 50, calories: 539 },        // ~539 kcal
  { label: "🍫 Ruby Chocolate", value: "ruby", price: 70, calories: 544 },          // ~544 kcal
  { label: "🍫 Sugar-Free Chocolate", value: "sugarFree", price: 60, calories: 480 }, // varies, ~480 kcal
  { label: "🍫 Vegan Chocolate", value: "vegan", price: 65, calories: 520 },        // ~520 kcal
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
              {item.label} — ₹{item.price} -- Calories {item.calories}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default ChocolateBase;
