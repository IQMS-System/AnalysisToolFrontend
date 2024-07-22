import { Alert, Button, Flex, Form, Input } from "antd";
import iqmsIcon from "../../assets/icon-long-iqms.png";
import Footer from "./Footer";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | undefined>();

  const handleSubmit = async () => {
    try {
      const response = await loginUser({
        username: username,
        password: password,
      });

      if (response.status_code === 200) {
        navigate("/");
      } else {
        setErr("Something went wrong");
      }
    } catch (error) {
      setErr(
        "Please check you username or password, or contact Operator for more information"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img src={iqmsIcon} alt="Logo" className="w-96" />
        </div>
        <Form name="login" onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Flex vertical>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <Input
                placeholder="Username"
                id="username"
                onChange={(value) => setUsername(value.target.value)}
              />
            </Flex>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Flex vertical>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Input.Password
                placeholder="Password"
                onChange={(value) => setPassword(value.target.value)}
              />
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              Masuk
            </Button>
          </Form.Item>
        </Form>

        {err && (
          <Alert message="Error" description={err} type="error" showIcon />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
