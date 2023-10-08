/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID,  } from "appwrite";

export const IDEAS_DATABASE_ID = "<YOUR_DATABASE_ID>"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "<YOUR_COLLECTION_ID>"; // Replace with your collection ID

const IdeasContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useIdeas() {
  return useContext(IdeasContext);
}

export function IdeasProvider(props) {
  const [ideas, setIdeas] = useState([]);

  async function add(idea) {
    const response = await databases.createDocument(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      ID.unique(),
      idea
    );
    setIdeas((ideas) => [response.$id, ...ideas]);
  }

  async function remove(id) {
    await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    setIdeas((ideas) => ideas.filter((idea) => idea.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
  }

  async function init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
     
    );
    setIdeas(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <IdeasContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  );
}
