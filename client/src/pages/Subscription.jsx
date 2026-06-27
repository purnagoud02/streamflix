import axios from "axios";

function Subscription() {
  const payNow = async (amount) => {
    try {
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount }
      );

      const user = JSON.parse(localStorage.getItem("user"));

      const options = {
        key: "rzp_test_xxxxxxxxxxxxx", // your Razorpay key
        amount: order.amount,
        currency: "INR",
        name: "StreamFlix Premium",
        description: "Subscription Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            await axios.post("http://localhost:5000/api/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user?._id,
              plan: amount === 99 ? "Basic" : "Premium",
            });

            alert("🎉 Payment Successful & Upgraded!");
          } catch (err) {
            console.log(err);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
      alert("Payment failed");
    }
  };

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h1>💳 Choose Plan</h1>

      <button onClick={() => payNow(99)}>Basic ₹99</button>
      <button onClick={() => payNow(199)}>Premium ₹199</button>
    </div>
  );
}

export default Subscription;