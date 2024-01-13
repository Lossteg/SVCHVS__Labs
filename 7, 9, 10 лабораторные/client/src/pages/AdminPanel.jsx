import { useState, useEffect } from "react";
import Tab from "../components/admin/Tab";
import CommunityManagement from "../components/admin/CommunityManagement";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/adminActions";
import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Community Management");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const adminPanelError = useSelector((state) => state.admin?.adminPanelError);

  useEffect(() => {
    if (adminPanelError === "Unauthorized") {
      dispatch(logoutAction()).then(() => {
        navigate("/admin/signin");
      });
    }
  }, [adminPanelError, dispatch, navigate]);

  return (
    <div className="pt-5 max-w-6xl mx-auto flex flex-col justify-center items-center ">
      <Tab activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === "Community Management" && <CommunityManagement />}
    </div>
  );
};

export default AdminPanel;
