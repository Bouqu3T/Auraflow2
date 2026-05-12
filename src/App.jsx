import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'antd-mobile';

// 导入页面组件
import LoginPage from './pages/LoginPage';
import CustomizeHomePage from './pages/CustomizeHomePage';
import QuestionnairePage from './pages/QuestionnairePage';
import PlanDisplayPage from './pages/PlanDisplayPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

// 导入组件
import BottomNavbar from './components/BottomNavbar';

// 带底部导航栏的页面布局
const WithNavbar = ({ children }) => (
  <div className="min-h-screen pb-20">
    {children}
    <BottomNavbar />
  </div>
);

function App() {
  return (
    <Provider>
      <Router>
        <div className="max-w-md mx-auto bg-white">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/customize" element={<WithNavbar><CustomizeHomePage /></WithNavbar>} />
            <Route path="/questionnaire" element={<WithNavbar><QuestionnairePage /></WithNavbar>} />
            <Route path="/plan" element={<WithNavbar><PlanDisplayPage /></WithNavbar>} />
            <Route path="/order" element={<WithNavbar><OrderConfirmationPage /></WithNavbar>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;