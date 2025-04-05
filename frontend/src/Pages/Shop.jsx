import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Tabs, Button, Popconfirm, message } from "antd";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../redux/Slice/orderSlice";
import ChocolateBase from "../Components/ShopTabs/ChocolateBase";
import AddOnExtras from "../Components/ShopTabs/AddOnExtras";
import DietaryPreferences from "../Components/ShopTabs/DietaryPreferences";
import Fillings from "../Components/ShopTabs/Fillings";
import FlavorInfusion from "../Components/ShopTabs/FlavorInfusion";
import Packaging from "../Components/ShopTabs/Packaging";
import ShapeDesign from "../Components/ShopTabs/ShapeDesign";
import Toppings from "../Components/ShopTabs/Toppings";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const { TabPane } = Tabs;

const Shop = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const success = () => {
    dispatch(addToCart());
    messageApi.open({
      type: "success",
      content: "Order added successfully",
    });
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  const cancel = () => {
    dispatch(clearCart());
    messageApi.open({
      type: "error",
      content: "Order cancelled",
    });
  };

  return (
    <>
      <Navbar />
      <div className="h-screen">
        {contextHolder}
        <div className="bg-[#fd85b2] w-full h-[30vh] flex items-center justify-center flex-col gap-2">
          <h1 className="text-center text-4xl text-white font-extrabold">Shop</h1>
          <p className="text-center text-lg text-white font-normal">
            <Link to="/">Home</Link> / Shop
          </p>
        </div>

        <div className="p-10 flex items-center justify-center">
          <Form form={form} layout="vertical">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Chocolate Base" key="1">
                <ChocolateBase />
              </TabPane>
              <TabPane tab="Flavor Infusion" key="2">
                <FlavorInfusion />
              </TabPane>
              <TabPane tab="Pick Fillings" key="3">
                <Fillings />
              </TabPane>
              <TabPane tab="Add Toppings" key="4">
                <Toppings />
              </TabPane>
              <TabPane tab="Shape & Design" key="5">
                <ShapeDesign />
              </TabPane>
              <TabPane tab="Dietary Preferences" key="6">
                <DietaryPreferences />
              </TabPane>
              <TabPane tab="Packaging" key="7">
                <Packaging />
              </TabPane>
              <TabPane tab="Add-On Extras" key="8">
                <AddOnExtras />
              </TabPane>
            </Tabs>

            <Form.Item style={{ marginTop: "24px" }}>
              <Popconfirm
                title="Are you sure you want to place order?"
                onConfirm={success}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" style={{ background: "#fd85b2", color: "white" }} htmlType="submit">
                  Submit Order
                </Button>
              </Popconfirm>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
