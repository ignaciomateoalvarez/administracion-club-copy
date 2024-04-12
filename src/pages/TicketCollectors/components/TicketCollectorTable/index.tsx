import useTicketCollectors from "@hooks/pages/TicketCollectors/useTicketCollectors";
import { useEffect, useState } from "react";
import { TableContainer, StyledTable, TableHeader, TableRow, TableHeaderCell, TableCell } from "./styles";

interface TicketCollector {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  created_at: string;
}

const TicketCollectorTable = () => {
  const { fetchAllTicketCollectors } = useTicketCollectors();
  const [ticketCollectors, setTicketCollectors] = useState<TicketCollector[]>([]);

  useEffect(() => {
    const loadTicketCollectors = async () => {
      try {
        const response = await fetchAllTicketCollectors();
        const simplifiedData = response.map((collector: TicketCollector) => ({
          id: collector.id,
          firstname: collector.firstname,
          lastname: collector.lastname,
          phone: collector.phone,
          created_at: collector.created_at,
        }));
        setTicketCollectors(simplifiedData);
        console.log(simplifiedData);
      } catch (error) {
        console.error("Error loading ticket collectors:", error);
      }
    };

    loadTicketCollectors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Fecha de alta</TableHeaderCell>
            <TableHeaderCell>Nombre y apellido</TableHeaderCell>
            <TableHeaderCell>Celular</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {ticketCollectors.map((collector) => (
            <TableRow key={collector.id}>
              <TableCell>{collector.id}</TableCell>
              <TableCell>{collector.created_at}</TableCell>
              <TableCell>{collector.firstname} {collector.lastname}</TableCell>
              <TableCell>{collector.phone}</TableCell>
              <TableCell>Test</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TicketCollectorTable;
