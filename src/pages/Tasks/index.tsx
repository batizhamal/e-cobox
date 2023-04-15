import NotLoggedIn from "./pages/NotLoggedIn";
import TasksMain from "./pages/TasksMain";
import "./index.scss";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const loggedIn = () => {
  return true;
};

const Tasks = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="tasks--content">
            {!loggedIn() ? <NotLoggedIn /> : <TasksMain />}
          </div>
        </>
      )}
    </>
  );
};

export default Tasks;
