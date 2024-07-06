import { Button, Input } from "antd";
import iqmsIcon from "../../assets/icon-long-iqms.png";
import Footer from "./Footer";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img src={iqmsIcon} alt="Logo" className="w-96" />
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <Input placeholder="Username" id="username" />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Passwordll
            </label>
            <Input.Password placeholder="Password" />
          </div>

          <Button type="primary" block>
            Masuk
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
