import { Formik } from "formik";
import "./index.scss";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <>
      <div className="login--content">
        <div className="ant-row">
          <div className="ant-col">
            <h6 className="login--title">Log in</h6>
            <p className="login--info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id commodo lectus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi egestas mi ut semper aliquet.
              Sed pulvinar ipsum quis odio condimentum aliquam. Pellentesque eu
              vulputate ex. Cras dignissim convallis lectus quis auctor. Integer
              sem nibh, hendrerit vitae rhoncus et, tincidunt vitae tortor. Cras
              est dolor, bibendum nec magna sit amet, efficitur vestibulum mi.
              Curabitur rutrum purus sit amet diam commodo, vel suscipit felis
              sagittis. Duis pretium molestie facilisis. Aenean dolor enim,
              imperdiet sit amet lacinia et, pulvinar vitae just
            </p>
          </div>
          <div className="ant-col">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              <form className="form">
                <label className="form--label">Username</label>
                <input className="form--input" name="username" type="text" />

                <label className="form--label">Password</label>
                <input
                  className="form--input"
                  name="password"
                  type="password"
                />

                <button className="form--button" type="submit">
                  Sign in
                </button>

                <a href="/register">Do not have an account?</a>
              </form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
