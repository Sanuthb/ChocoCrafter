import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const fillings = [
  { label: "🥜 Almond", value: "almond", price: 15, calories: 50 },
  { label: "🥜 Cashew", value: "cashew", price: 15, calories: 55 },
  { label: "🥜 Hazelnut", value: "hazelnut", price: 18, calories: 60 },
  { label: "🥜 Walnut", value: "walnut", price: 18, calories: 65 },
  { label: "🥜 Pistachio", value: "pistachio", price: 20, calories: 60 },
  { label: "🍫 Caramel Filling", value: "caramelFilling", price: 12, calories: 40 },
  { label: "🍓 Strawberry Jam", value: "strawberryJam", price: 10, calories: 30 },
  { label: "🍓 Raspberry Jam", value: "raspberryJam", price: 10, calories: 30 },
  { label: "🍇 Blueberry Jam", value: "blueberryJam", price: 12, calories: 30 },
  { label: "🥛 Milk Ganache", value: "milkGanache", price: 15, calories: 70 },
  { label: "🥛 Dark Ganache", value: "darkGanache", price: 15, calories: 65 },
  { label: "🥛 White Ganache", value: "whiteGanache", price: 15, calories: 75 },
  { label: "🧂 Sea Salt Caramel", value: "seaSaltCaramel", price: 14, calories: 40 },
  { label: "🌸 Rose Flowers", value: "roseFlowers", price: 16, calories: 5 },
  { label: "🌸 Lavender Flowers", value: "lavenderFlowers", price: 16, calories: 5 },
  { label: "🍪 Cookie Crumbs", value: "cookieCrumbs", price: 10, calories: 50 },
  { label: "🍯 Honey Drizzle", value: "honeyDrizzleFilling", price: 12, calories: 60 },
];


const Fillings = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "fillings", value }));
  };

  return (
    <Card title="Fillings">
      <Form.Item name="fillings">
        <Select mode="multiple" onChange={handleChange} placeholder="Select fillings">
          {fillings.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label} — ₹{item.price} -- Calories {item.calories}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default Fillings;
