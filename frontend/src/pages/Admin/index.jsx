// Admin/index.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserManagement, PaymentManagement } from "../../components";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UserManagement />;
      case "payment":
        return <PaymentManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block w-64 bg-gray-800 text-white h-full">
        <div className="mb-8 p-4">
          <img
            src="/asset/image/logo.svg"
            alt="Logo"
            className="w-32 mx-auto"
          />
        </div>
        <nav className="space-y-2 px-4">
          <button
            onClick={() => {
              setActiveTab("users");
              setIsSidebarOpen(false);
            }}
            className={`w-full text-left block py-2 px-4 rounded ${
              activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Manajemen Akun
          </button>
          <button
            onClick={() => {
              setActiveTab("payment");
              setIsSidebarOpen(false);
            }}
            className={`w-full text-left block py-2 px-4 rounded ${
              activeTab === "payment" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Metode Pembayaran
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left block py-2 px-4 text-red-400 hover:bg-gray-700 rounded"
          >
            Keluar
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header with Mobile Menu */}
        <div className="sticky top-0 bg-white z-20 shadow-sm">
          <div className="flex justify-end items-center p-4">
            {/* Mobile Menu Button - Right aligned */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
          <div className="p-4">
            <div className="flex justify-center mb-8">
              {" "}
              {/* Center logo */}
              <img src="/asset/image/logo.svg" alt="Logo" className="w-32" />
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => {
                  setActiveTab("users");
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left block py-2 px-4 rounded ${
                  activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Manajemen Akun
              </button>
              <button
                onClick={() => {
                  setActiveTab("payment");
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left block py-2 px-4 rounded ${
                  activeTab === "payment" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Metode Pembayaran
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left block py-2 px-4 text-red-400 hover:bg-gray-700 rounded"
              >
                Keluar
              </button>
            </nav>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Content Area */}
        <div className="overflow-auto h-[calc(100vh-64px)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
