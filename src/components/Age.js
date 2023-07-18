import { useParams } from "react-router-dom";
const Age = () => {
    const params = useParams();
    const age = params.myage;
    const name = params.myname;
  return <div>{name} Age is {age}</div>;
};

export default Age;
