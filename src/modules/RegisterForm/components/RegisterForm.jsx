import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import Block from "../../../components/Block";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const success = false;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form className="login-form">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите email!",
                },
              ]}
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
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
            <Form.Item
              name="password_2"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, повторите пароль!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/signin">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
            <Form.Item>
              <Link className="auth__register-link" to="/">
                На главную
              </Link>
            </Form.Item>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
