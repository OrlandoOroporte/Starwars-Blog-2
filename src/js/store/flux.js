const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      favorites: [], 
      endPoint: ["people","planets"],
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

      },
      // favorites 
     setFavorites:  (id) => {
        let store = getStore();
        let existe = store.favorites.find((item) => item.created == id)
        if(!existe){
          for (const endPoint of store.endPoint) {
            for (const item of store[endPoint]) {
              if(item.created == id){
                setStore({
                  ...store,
                  favorites: [...store.favorites,item]
                })
                break;
              }
            }
          }
        } else {
          let newArray = store.favorites.filter((item) => item.created != id)
          setStore({...store,
          favorites: newArray})
        }
     }
    },
  };
};
export default getState;
