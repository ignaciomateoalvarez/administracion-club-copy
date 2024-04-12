import useUsers from "@hooks/pages/Users/useUsers";
import { useEffect, useState } from "react";
import { StyledTable, TableHead, TableHeaderCell, TableRow, TableCell } from "./styles";
import UsersFilter from "../Header/components/UsersFilter";

interface User {
  id: number;
  dni: string;
  full_name: string;
  email: string;
  created_at: string;
}

const UsersTable = () => {
  const { fetchAllUsers } = useUsers();
  const [users, setUsers] = useState<User[]>([]);
  const [filters, setFilters] = useState({
    date: '',
    name: '',
    dni: ''
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetchAllUsers();
        setUsers(response);
        console.log(response);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <UsersFilter filters={filters} onFilterChange={handleFilterChange} />
      {users.length === 0 ? (
        <p>No hay usuarios </p>
      ) : (
        <StyledTable>
          <TableHead>
            <tr>
              <TableHeaderCell>Fecha de alta</TableHeaderCell>
              <TableHeaderCell>Nombre y apellido</TableHeaderCell>
              <TableHeaderCell>Correo electronico</TableHeaderCell>
              <TableHeaderCell>Dni/Pasaporte</TableHeaderCell>
            </tr>
          </TableHead>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.created_at}</TableCell>
                <TableCell>{user.full_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.dni}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};

export default UsersTable;
