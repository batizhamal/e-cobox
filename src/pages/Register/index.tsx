import { Input, Button } from "antd";
import { useState } from "react";
import { Form, Formik, Field } from "formik";
import { AuthApi } from "../../api/authApi";
import "../Login/index.scss";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const api = new AuthApi();

  return (
    <>
      <div className="ant-row register">
        <div className="ant-col">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              name: "",
              companyName: "",
              address: "",
              phoneNumber: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              const response = api.register(values);
              console.log(response);
            }}
          >
            <form className="form">
              <label className="form--label">Username</label>
              <input className="form--input" name="username" type="text" />
              <label className="form--label">E-mail</label>
              <input className="form--input" name="email" type="email" />
              <label className="form--label">Fullname</label>
              <input className="form--input" name="name" type="text" />
              <label className="form--label">Company name</label>
              <input className="form--input" name="companyName" type="text" />
              <label className="form--label">Company address</label>
              <input className="form--input" name="address" type="text" />
              <label className="form--label">Phone number</label>
              <input
                className="form--input"
                name="phoneNumber"
                type="phone_number"
              />
              <label className="form--label">Password</label>
              <input className="form--input" name="password" type="password" />
              <label className="form--label">Confirm password</label>
              <input
                className="form--input"
                name="passwordConfirm"
                type="password"
              />
              <button className="form--button" type="submit">
                Sign up
              </button>

              <a href="/login">Already have an account?</a>
            </form>
          </Formik>
        </div>
        <div className="ant-col">
          <h6 className="login--title">Sign up</h6>
          <p className="login--info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id commodo lectus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi egestas mi ut semper aliquet. Sed pulvinar
            ipsum quis odio condimentum aliquam. Pellentesque eu vulputate ex.
            Cras dignissim convallis lectus quis auctor. Integer sem nibh,
            hendrerit vitae rhoncus et, tincidunt vitae tortor. Cras est dolor,
            bibendum nec magna sit amet, efficitur vestibulum mi. Curabitur
            rutrum purus sit amet diam commodo, vel suscipit felis sagittis.
            Duis pretium molestie facilisis. Aenean dolor enim, imperdiet sit
            amet lacinia et, pulvinar vitae just
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
