import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    });

    setTours(newTours);
  };
  const fetchTours = async () => {
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
