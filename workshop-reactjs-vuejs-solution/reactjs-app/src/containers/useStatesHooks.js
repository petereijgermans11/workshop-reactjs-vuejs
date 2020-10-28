import { useState } from 'react';

const useStatesHooks = () => {
  const [carstats,setCarstats] = useState([]);
  const [config,setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
   });
   return { carstats,  config };
}

export default useStatesHooks;