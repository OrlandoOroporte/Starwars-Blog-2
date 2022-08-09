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
      //aqui va la conuslta de los planetas a la api
      getPlanets: async () => {
        let store = getStore();
        try {
          let response = await fetch("https://swapi.dev/api/planets");
          let data = await response.json();
          if (response.ok){
            setStore({
              ...store,
              planets: data.results,
            })
          }
        } catch (error) {
          
        }

      }
    },
  };
};
export default getState;
