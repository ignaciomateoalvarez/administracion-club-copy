import TenantStatistics from "./components/TenantStatistics/index.tsx";
import NextGame from "./components/NextGame/index.tsx";
import TenantInfo from "./components/TenantInfo.tsx/index.tsx";
import { StyledStatisticsAndNextGameContainer } from "./styles.tsx";

const Dashboard = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <TenantInfo />
      <StyledStatisticsAndNextGameContainer>
        <TenantStatistics />
        <NextGame />
      </StyledStatisticsAndNextGameContainer>
    </div>
  );
};

export default Dashboard;