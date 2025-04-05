// Add price mapping
const prices = {
    flavorInfusion: {
      mint: 10, caramel: 15, strawberry: 12, lemon: 10,
      coconut: 14, vanilla: 12, orange: 10, hazelnut: 16,
      coffee: 15, blueberry: 13,
    },
    toppings: {
      crushedNuts: 12, cookiePieces: 10, sprinkles: 8,
      chocolateChips: 9, strawberryFruits: 14, blueberryFruits: 13,
      mangoFruits: 15, cranberryFruits: 14, honeyDrizzleTopping: 10,
      orangePeel: 9, candyBits: 8,
    },
    fillings: {
      almond: 12, cashew: 12, hazelnut: 14, walnut: 13,
      pistachio: 15, caramelFilling: 14, strawberryJam: 12,
      raspberryJam: 12, blueberryJam: 13, milkGanache: 15,
      darkGanache: 15, whiteGanache: 15, seaSaltCaramel: 14,
      roseFlowers: 13, lavenderFlowers: 13, cookieCrumbs: 10,
      honeyDrizzleFilling: 11,
    },
  };
  
  const calculateTotal = (values) => {
    let total = 50; // base price
    ["flavorInfusion", "fillings", "toppings"].forEach((type) => {
      if (Array.isArray(values[type])) {
        values[type].forEach((item) => {
          total += prices[type][item] || 0;
        });
      }
    });
    return total;
  };
  
  const handleFinish = async (values) => {
    if (order) {
      console.log("Selected Options:", values);
      const totalPrice = calculateTotal(values);
      const payload = {
        userId: "user123", // Replace with actual user id
        base: values.chocolateBase,
        flavors: values.flavorInfusion,
        fillings: values.fillings,
        toppings: values.toppings,
        shape: values.shapeDesign,
        dietary: values.dietaryPreferences,
        packaging: values.packaging,
        price: totalPrice,
      };
  
      const chocolateRes = await fetch("/api/chocolate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const chocolateData = await chocolateRes.json();
  
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user123", // Replace dynamically
          chocolates: [chocolateData._id],
          totalAmount: totalPrice,
        }),
      });
  
      setSelectedOptions(values);
    }
  };
  