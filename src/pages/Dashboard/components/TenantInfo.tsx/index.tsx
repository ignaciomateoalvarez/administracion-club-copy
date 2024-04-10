import useTenantInfo from "@hooks/pages/Dashboard/useTenantInfo";
import { useEffect, useState } from "react";
import { StyledTenantInfoContainer, StyledTenantData, StyledTenantColumnData } from "./styles";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface CustomerServiceHour {
  id: number;
  full_service_hour: string;
}

interface TenantInfo {
  name: string;
  logo: { url: string };
  locality: string;
  province: string;
  zipcode: string;
  country: string;
  facebook_url: string | null;
  instagram_url: string | null;
  twitter_url: string | null;
  contact_info: ContactInfo;
  customer_service_hours: CustomerServiceHour[];
}

const TenantInfo = () => {
  const { fetchTenantInfo } = useTenantInfo();
  const [tenantInfo, setTenantInfo] = useState<TenantInfo | null>(null);

  useEffect(() => {
    const loadNextMatch = async () => {
      try {
        const tenantData = await fetchTenantInfo();
        setTenantInfo(tenantData);
        console.log(tenantInfo)
      } catch (error) {
        console.error("Error loading next match:", error);
      }
    };

    loadNextMatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledTenantInfoContainer>
      {tenantInfo ? (
        <StyledTenantData>
          <StyledTenantColumnData>
            <h3>Dirección</h3>
            <p>{tenantInfo.contact_info.address}</p>
            <p>{tenantInfo.locality}</p>
            <p>{tenantInfo.province}</p>
            <p>{tenantInfo.country}</p>
          </StyledTenantColumnData>

          <StyledTenantColumnData>
            <h3>Datos de contacto</h3>
            <p>Email: {tenantInfo.contact_info.email}</p>
            <p>Teléfono: {tenantInfo.contact_info.phone}</p>
          </StyledTenantColumnData>

          <StyledTenantColumnData>
            <h3>Redes sociales</h3>
            {tenantInfo.facebook_url && <p>Facebook: {tenantInfo.facebook_url}</p>}
            {tenantInfo.instagram_url && <p>Instagram: {tenantInfo.instagram_url}</p>}
            {tenantInfo.twitter_url && <p>Twitter: {tenantInfo.twitter_url}</p>}
          </StyledTenantColumnData>
          
          <StyledTenantColumnData>
            <h3>Días y horarios de atención</h3>
            {tenantInfo.customer_service_hours.map((hour) => (
              <p key={hour.id}>{hour.full_service_hour}</p>
            ))}
          </StyledTenantColumnData>
        </StyledTenantData>
      ) : (
        <p>Loading tenant profile...</p>
      )}
    </StyledTenantInfoContainer>
  );
};

export default TenantInfo;
