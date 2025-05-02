function ColegiosSelect({ onSelectChange }) {
  const [colegios, setColegios] = useState([]);
  const [seleccionado, setSeleccionado] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/colegios')
      .then(response => setColegios(response.data))
      .catch(error => console.error('Error al obtener colegios:', error));
  }, []);

  const handleChange = (e) => {
    setSeleccionado(e.target.value);
    onSelectChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="colegios">Selecciona un colegio:</label>
      <select id="colegios" value={seleccionado} onChange={handleChange}>
        <option value="">-- Elige uno --</option>
        {colegios.map(colegio => (
          <option key={colegio.id} value={colegio.id}>
            {colegio.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
