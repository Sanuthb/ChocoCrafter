import { Form, Select, Card } from "antd";
import { useDispatch } from "react-redux";
import { setOrderOption } from "../../Redux/Slice/orderSlice";

const { Option } = Select;

const ShapeDesign = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setOrderOption({ key: "shapeDesign", value }));
  };

  return (
    <Card>
      <Form.Item name="shapeDesign">
        <Select onChange={handleChange} placeholder="Select chocolate shape">
          <Option value="regularBar">🍫 Chocolate Bar (Regular)</Option>
          <Option value="miniBar">🍫 Chocolate Bar (Mini)</Option>
          <Option value="largeBar">🍫 Chocolate Bar (Large)</Option>
          <Option value="roundTruffles">🍩 Truffles (Round)</Option>
          <Option value="heartTruffles">🍩 Truffles (Heart)</Option>
          <Option value="starTruffles">🍩 Truffles (Star)</Option>
          <Option value="customTruffles">🍩 Truffles (Custom)</Option>
          <Option value="chocolateDiscs">🍪 Chocolate Discs</Option>
          <Option value="birthdayMold">🎂 Birthday Mold</Option>
          <Option value="anniversaryMold">🎂 Anniversary Mold</Option>
          <Option value="corporateLogo">🎂 Corporate Logo</Option>
          <Option value="textEngraving">🖋 Personalized Text Engraving</Option>
        </Select>
      </Form.Item>
    </Card>
  );
};

export default ShapeDesign;
