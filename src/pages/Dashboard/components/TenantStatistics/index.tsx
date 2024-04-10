import useSystemStatistics from "@hooks/pages/Dashboard/useSystemStatistics";
import { useEffect, useState } from "react";
import { StyledTenantStatisticsContainer, StyledTenantStatisticsData } from "./styles";

interface SystemStatistics {
  total_amount_donations: number;
  total_subscription: number;
  total_users: number;
}

const TenantStatistics = () => {
  const { fetchSystemStatistics } = useSystemStatistics();
  const [statistics, setStatistics] = useState<SystemStatistics>();

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const statisticsData = await fetchSystemStatistics();
        setStatistics(statisticsData);
      } catch (error) {
        console.error("Error loading statistics:", error);
      }
    };

    loadStatistics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledTenantStatisticsContainer>
      {statistics ? (
        <StyledTenantStatisticsData>
          <p>Usuarios de la app {statistics.total_users}</p>
          <p>Hinchas socios: {statistics.total_subscription}</p>
          <p>Donaciones: {statistics.total_amount_donations}</p>
        </StyledTenantStatisticsData>
      ) : (
        <p>Loading statistics...</p>
      )}
    </StyledTenantStatisticsContainer>
  );
};

export default TenantStatistics;
