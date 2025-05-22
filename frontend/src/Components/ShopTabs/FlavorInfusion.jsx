import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const flavors = [
  { label: "🌿 Mint", value: "mint", price: 8, calories: 2 },         // natural mint oil, ~2 kcal
  { label: "🍯 Caramel", value: "caramel", price: 10, calories: 40 }, // sweetened syrup-based, ~40 kcal
  { label: "🍓 Strawberry", value: "strawberry", price: 10, calories: 10 }, // puree/extract
  { label: "🍋 Lemon", value: "lemon", price: 9, calories: 8 },       // zest or extract
  { label: "🥥 Coconut", value: "coconut", price: 11, calories: 35 }, // desiccated or oil
  { label: "🍦 Vanilla", value: "vanilla", price: 10, calories: 12 }, // extract or beans
  { label: "🍊 Orange Zest", value: "orange", price: 9, calories: 9 }, // zest or extract
  { label: "🌰 Hazelnut", value: "hazelnut", price: 12, calories: 63 }, // nut paste, high fat
  { label: "☕ Coffee", value: "coffee", price: 10, calories: 5 },     // espresso or powder
  { label: "🍇 Blueberry", value: "blueberry", price: 12, calories: 15 }, // puree or jam base
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
              {item.label} — ₹{item.price} -- Calories {item.calories}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default FlavorInfusion;
