import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { QUERY_POKEMONS } from "../../../graphql/_queries";

export default function useAction() {
  const perPage = 20;
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(perPage);

  const { data, loading, fetchMore } = useQuery(QUERY_POKEMONS, {
    variables: {
      offset: 0,
      limit,
    },
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const count = data?.species_aggregate?.aggregate?.count;

  const handleScroll = () => {
    const element = document.documentElement;
    const size = Math.ceil(window.innerHeight + element.scrollTop);
    if (size === element.offsetHeight && !loading) {
      setLimit(limit + perPage); // load more data
      fetchMore({
        variables: {
          offset: limit,
          limit,
        },
      });
    }
  };

  useEffect(() => {
    if (data) {
      setPokemons(data.species);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    count,
    loading,
    pokemons,
  };
}
