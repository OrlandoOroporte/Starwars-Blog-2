const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
    },
    actions: {
      getPeople: async () => {
        let store = getStore();
        try {
          let response = await fetch("https://swapi.dev/api/people");
          let data = await response.json();
          if (response.ok) {
            setStore({
              ...store,
              people: data.results,
            });
          }
        } catch (error) {}
      },
      
    },
  };
};
export default getState;
