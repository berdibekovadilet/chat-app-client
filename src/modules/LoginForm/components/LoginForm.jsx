import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import Block from "../../../components/Block";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form className="login-form">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите имя пользователя!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Имя пользователя"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите пароль!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/signup">
                Зарегистрироваться
              </Link>
            </Form.Item>
          </Form>
        </Block>
      </div>
    </section>
  );
};

export default LoginForm;
