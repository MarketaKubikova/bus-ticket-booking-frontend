import CitySelector from './components/CitySelector';
import type { CityResponse } from './models';

function App() {
  const handleSelectionChange = (
    departure: CityResponse | null,
    arrival: CityResponse | null,
  ) => {
    console.log('Departure:', departure);
    console.log('Arrival:', arrival);
    // TODO: trigger trips fetch here
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Bus Ticket Booking</h1>
      <CitySelector onSelectionChange={handleSelectionChange} />
    </div>
  );
}

export default App;
