import PropTypes from "prop-types";
import loupe from "../assets/radio/loupe.png";

export default function SearchBarHome({ query, setQuery }) {
  return (
    <div>
      <section className="flex justify-center">
        <input
          className=" w-2/6 h-7 rounded-xl px-2 shadow-md my-5 shadow-gray-600 text-black"
          type="text"
          placeholder="Choisissez votre ville ?"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <img
          className="w-5 h-5 relative right-7 top-6"
          src={loupe}
          alt="loupe"
        />
      </section>
    </div>
  );
}

SearchBarHome.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
