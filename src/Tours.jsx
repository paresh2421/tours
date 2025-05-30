import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
      </div>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour = {removeTour} />
        })}
      </div>
    </section>
  );
};

export default Tours;
