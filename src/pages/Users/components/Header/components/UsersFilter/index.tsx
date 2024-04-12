import { FiltersContainer, FilterGroup, FilterLabel, FilterInput } from './styles';

interface FiltersProps {
  filters: {
    date: string;
    name: string;
    dni: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

const UsersFilter = ({ filters, onFilterChange }: FiltersProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <FiltersContainer>
      <FilterGroup>
        <FilterLabel>Buscar por nombre y apellido:</FilterLabel>
        <FilterInput
          type="text"
          name="name"
          value={filters.name}
          onChange={handleInputChange}
          placeholder='Escribi nombre y/o apellido'
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Fecha de alta:</FilterLabel>
        <FilterInput
          type="text"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          placeholder='Desde -> Hasta'
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>DNI/Pasporte:</FilterLabel>
        <FilterInput
          type="text"
          name="dni"
          value={filters.dni}
          onChange={handleInputChange}
          placeholder='Busca por DNI o Pasaporte'
        />
      </FilterGroup>
    </FiltersContainer>
  );
};

export default UsersFilter;
