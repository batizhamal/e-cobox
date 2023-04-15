import { Empty } from "antd";

const NotLoggedIn = () => {
  return (
    <>
      <div className="tasks--empty">
        <Empty description="Log in to view tasks" />
      </div>
    </>
  );
};

export default NotLoggedIn;
