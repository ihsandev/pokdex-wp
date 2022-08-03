import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  GET_POKEMON_BY_FILTER_TYPES,
  GET_TYPES,
  QUERY_POKEMONS,
} from "../../../graphql/_queries";
import client from "../../../configs/apollo-client";

export default function useAction() {
  const perPage = 20;
  const [pokemons, setPokemons] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [limit, setLimit] = useState(perPage);
  const [typesFilter, setTypesFilter] = useState([]);

  const { data, loading, fetchMore } = useQuery(QUERY_POKEMONS, {
    variables: {
      offset: 0,
      limit,
    },
    ssr: true,
    notifyOnNetworkStatusChange: true,
  });

  const types = useQuery(GET_TYPES);

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

  const setDataPokemons = (data = {}) => {
    const { species = {}, species_aggregate = {} } = data;
    setPokemons(species);
    setCounter(species_aggregate?.aggregate?.count);
  };

  useEffect(() => {
    if (data) {
      setDataPokemons(data);
    }
  }, [data]);

  useEffect(() => {
    if (typesFilter.length === 0) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleChangeFilter = (value) => setTypesFilter(value);

  const filterByQuery = (query, variables) => {
    return client.query({ query, variables: { ...variables } }).then((res) => {
      setDataPokemons(res.data);
      setLoadingFilter(res.loading);
    });
  };

  const handleSubmitFilter = () => {
    if (typesFilter?.length > 0) {
      filterByQuery(GET_POKEMON_BY_FILTER_TYPES, {
        offset: 0,
        limit: 100,
        types: typesFilter,
      });
    } else {
      if (data) {
        setDataPokemons(data);
      }
    }
  };

  return {
    count: counter,
    loading,
    loadingFilter,
    pokemons,
    types,
    typesFilter,
    handleChangeFilter,
    handleSubmitFilter,
  };
}
