import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../redux/Slice/orderSlice";

const { Option } = Select;

const toppings = [
  { label: "🌰 Crushed Nuts", value: "crushedNuts", price: 10 },
  { label: "🍪 Cookie Pieces", value: "cookiePieces", price: 12 },
  { label: "🍬 Sprinkles", value: "sprinkles", price: 8 },
  { label: "🍫 Chocolate Chips", value: "chocolateChips", price: 15 },
  { label: "🍓 Strawberry Fruits", value: "strawberryFruits", price: 18 },
  { label: "🍇 Blueberry Fruits", value: "blueberryFruits", price: 18 },
  { label: "🥭 Mango Fruits", value: "mangoFruits", price: 20 },
  { label: "Cranberry Fruits", value: "cranberryFruits", price: 20 },
  { label: "🍯 Honey Drizzle", value: "honeyDrizzleTopping", price: 12 },
  { label: "🍊 Candied Orange Peel", value: "orangePeel", price: 14 },
  { label: "🍭 Candy Bits", value: "candyBits", price: 10 },
];

const Toppings = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "toppings", value }));
  };

  return (
    <Card title="Toppings">
      <Form.Item name="toppings">
        <Select mode="multiple" onChange={handleChange} placeholder="Select toppings">
          {toppings.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label} — ₹{item.price}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default Toppings;
