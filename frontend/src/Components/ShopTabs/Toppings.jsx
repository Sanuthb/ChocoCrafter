import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const toppings = [
  { label: "🌰 Crushed Nuts", value: "crushedNuts", price: 10, calories: 65 },       // mixed nuts average
  { label: "🍪 Cookie Pieces", value: "cookiePieces", price: 12, calories: 50 },     // crushed biscuit
  { label: "🍬 Sprinkles", value: "sprinkles", price: 8, calories: 40 },             // sugar-based
  { label: "🍫 Chocolate Chips", value: "chocolateChips", price: 15, calories: 48 }, // ~70% chocolate
  { label: "🍓 Strawberry Fruits", value: "strawberryFruits", price: 18, calories: 4 },  // fresh/freeze-dried
  { label: "🍇 Blueberry Fruits", value: "blueberryFruits", price: 18, calories: 6 },    // fresh/freeze-dried
  { label: "🥭 Mango Fruits", value: "mangoFruits", price: 20, calories: 7 },            // dried/fresh mango
  { label: "Cranberry Fruits", value: "cranberryFruits", price: 20, calories: 8 },      // dried cranberries
  { label: "🍯 Honey Drizzle", value: "honeyDrizzleTopping", price: 12, calories: 32 }, // 10g honey = 32 kcal
  { label: "🍊 Candied Orange Peel", value: "orangePeel", price: 14, calories: 30 },    // sugar-rich
  { label: "🍭 Candy Bits", value: "candyBits", price: 10, calories: 42 },              // like M&Ms or Skittles
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
              {item.label} — ₹{item.price} -- Calories {item.calories}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Card>
  );
};

export default Toppings;
