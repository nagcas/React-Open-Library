import { useEffect, useState } from 'react';
import { format } from 'timeago.js';

export const useGetChanges = (urlOpenLibrary) => {
  const [newData, setNewdata] = useState([]);
  const [load, setLoad] = useState(false);

  function formatData(data) {
    return data.map((item, index) => {
      // Converto il timestamp in oggetto Date
      const date = new Date(item.timestamp);

      // Aggiungo +2 ore (2 * 60 minuti * 60 secondi * 1000 millisecondi)
      date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
      return {
        when: format(date, 'my-local'),
        who: item.author.key,
        description: item.comment,
      };
    });
  }
  useEffect(() => {
    const getAll = async () => {
      setLoad(true);
      try {
        const response = await fetch(urlOpenLibrary);
        const data = await response.json();
        // console.log(data);
        const newFormatData = formatData(data);
        // console.log(newFormatData);
        setNewdata(newFormatData);
      } catch (error) {
        console.error('Error:', error.message);
      } finally {
        setLoad(false);
      }
    };

    getAll();

    const intervalId = setInterval(() => {
      getAll();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [urlOpenLibrary]);

  return { newData, load };
};
